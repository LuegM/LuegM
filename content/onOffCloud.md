---
title: "toggle between local and iCloud CoreData store" # in any language you want
layout: "single" # is necessary
url: "/turnOnOffCloud/"
summary: "turnOnOffClouds"
ShowBreadCrumbs: false
ShowToc: false
ShowReadingTime: false
ShowPostNavLinks: false
ShowShareButtons: false
---

I want to enable/disable Core Data iCloud sync. 

`MyApp.swift`
```swift
import SwiftUI

@main
struct MyApp: App {
    var persistenceContainer = PersistenceController()

    var body: some Scene {        
        WindowGroup {
            ContentView()
                .environmentObject(CoreBluetoothViewModel())
                .environment(\.managedObjectContext, persistenceContainer.container.viewContext)
        }
    }
}
```


---

`iCloudSyncView.swift`
```swift
import SwiftUI

struct iCloudSyncView: View {
    @Environment(\.managedObjectContext) private var viewContext
    @State private var cloudEnabled = true
    
    var body: some View {
        Form {
            Section("Settings") {
                Toggle("iCloud sync", isOn: $cloudEnabled)
                    .onChange(of: cloudEnabled) { value in
                        UserDefaults.standard.set(value, forKey: "iCloud")
                        PersistenceController.shared.updateContainer()
                    }
                    .onAppear {
                        self.cloudEnabled = UserDefaults.standard.bool(forKey: "iCloud")
                    }
                }
            }
        }
    }
}
````


---

`PersistenceController.swift`
```swift
import CoreData

class PersistenceController {
    
    static let shared = PersistenceController()
    lazy var container: NSPersistentContainer = {
        setupContainer()
    }()
    
    init() {
        container = setupContainer()
    }
    
    func updateContainer() {
        saveContext()
        container = setupContainer()
        PersistenceController.shared.fetchAllItems()
    }
    
    private func setupContainer() -> NSPersistentContainer {
        let iCloud = UserDefaults.standard.bool(forKey: "iCloud")
        
        do {
            let newContainer = try PersistentContainer.getContainer(iCloud: iCloud)
            guard let description = newContainer.persistentStoreDescriptions.first else { fatalError("No description found") }
            
            if iCloud {
                newContainer.viewContext.automaticallyMergesChangesFromParent = true
                newContainer.viewContext.mergePolicy = NSMergeByPropertyStoreTrumpMergePolicy
            } else {
                description.setOption(true as NSNumber, forKey: NSPersistentHistoryTrackingKey)
            }
            
            description.setOption(true as NSNumber, forKey: NSPersistentStoreRemoteChangeNotificationPostOptionKey)
            
            newContainer.loadPersistentStores { (storeDescription, error) in
                if let error = error as NSError? { fatalError("Unresolved error \(error), \(error.userInfo)") }
            }
            
            return newContainer
            
        } catch {
            print(error)
        }
        
        fatalError("Could not setup Container")
    }
    
    func fetchAllItems() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "Log")
            
            do {
                let result = try container.viewContext.fetch(request)
                if let data = result as? [NSManagedObject] {
                    print("Data: \(data)")
                }
            } catch {
                let error = error as NSError
                print("ERROR: \(error)")
            }
    }
    
    private func saveContext() {
        do {
            try container.viewContext.save()
        } catch {
            let error = error as NSError
            fatalError("ERROR: \(error)")
        }
    }
}

final class PersistentContainer {
    
    private static var _model: NSManagedObjectModel?
    
    private static func model(name: String) throws -> NSManagedObjectModel {
        if _model == nil {
            _model = try loadModel(name: name, bundle: Bundle.main)
        }
        return _model!
    }
    
    
    private static func loadModel(name: String, bundle: Bundle) throws -> NSManagedObjectModel {
        guard let modelURL = bundle.url(forResource: name, withExtension: "momd") else {
            throw CoreDataModelError.modelURLNotFound(forResourceName: name)
        }

        guard let model = NSManagedObjectModel(contentsOf: modelURL) else {
            throw CoreDataModelError.modelLoadingFailed(forURL: modelURL)
       }
        return model
    }

    
    enum CoreDataModelError: Error {
        case modelURLNotFound(forResourceName: String)
        case modelLoadingFailed(forURL: URL)
    }

    
    public static func getContainer(iCloud: Bool) throws -> NSPersistentContainer {
        let name = "LogModel"
        if iCloud {
            return NSPersistentCloudKitContainer(name: name, managedObjectModel: try model(name: name))
        } else {
            return NSPersistentContainer(name: name, managedObjectModel: try model(name: name))
        }
    }
}
```


---
Then I want to present it here.

`LogListView.swift`
```swift
struct LogListView: View {
    @Environment(\.managedObjectContext) private var viewContext
    
    @FetchRequest(sortDescriptors: [SortDescriptor(\.Nr, order: .forward)])
    var logs: FetchedResults<Log>

    
    var body: some View {
        NavigationStack {
            List{
                if logs.count == 0 {
                    Text("no Logs found")
                }
                ForEach(logs){log in
                    NavigationLink(destination: LogDetailView(diveNo: 1, Site: "someSite")) {
                        LogListObject(log: log)
                    }
                }
                .onDelete(perform: deleteLog)
            }
        }
    }
}
```