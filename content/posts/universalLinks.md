---
title: "Universal Links in SwiftUI"
date: 2023-02-02T15:10:45+01:00
draft: false
tags: ["Universal Links", "SwiftUI", "Apple", "iOS", "iPadOS", "Xcode"]
categories: ["Swift", "SwiftUI"]
---
## Introduction
Welcome to my blog post on **Universal Links in SwiftUI**!

Universal links are a powerful feature that allows you to link directly to your app from an external source, such as a website. This means that you can take your users directly to specific content within your app, without having to go through the app store or the website. In this post, I will walk you through the process of setting up Universal Links in a SwiftUI app.

First, we will look at how to find your Team ID and Bundle ID. You'll need these values to configure the association file and the app entitlements.

Next, we'll create the association file and upload it to your website. This file contains information about the links that should be associated with your app, and it is a key part of the setup process.

We'll then add the Associated Domains capability to your app, and add the appropriate domain entries to your entitlements. This is an important step that allows your app to receive the universal links and handle them appropriately.

In the code logic section, I'll show you how to add code to your SwiftUI app that will handle the universal links when they are received. This is done using the `onOpenURL` method, which is called whenever your app is opened using a universal link.

Finally, I'll show you how to enable the Universal Links testing-feature on an iPhone and how to verify that the links are set up correctly.

By the end of this post, you will have a complete understanding of how Universal Links work in SwiftUI and will be able to set them up in your own apps. Let's get started!

---
## How to

### 1. get Team-ID and Bundle-ID
#### Team ID:
1. go to https://developer.apple.com/account
2. scroll to **Membership details** and find the **Team ID**
![Team-ID](/universalLinks/screenshot_apple_team-id.png)

#### Bundle ID:
1. open the Xcode project
	1. click on the project name (left panel)
	2. click **Signing & Capabilities**
	3. find the **Bundle ID**
   ![](/universalLinks/screenshot_apple_bundle-id.png)

<div style="page-break-after: always;"></div>

### 2. create the association file
1. create a file with the name: ```apple-app-site-association```  (**without extension!**)
2. this is an example of the file. 
   also check: [supporting associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains)
```json
{
  "applinks": {
      "details": [
           {
             "appIDs": ["<Team-ID>.<Bundle-ID>"],
             "components": [
               {
                  "/": "/app/?*",
               }
             ]
           }
       ]
   }
}
```

### 3. upload it
* upload this file to:
```https://<fully qualified domain>/.well-known/apple-app-site-association```

<div style="page-break-after: always;"></div>

### 4. add entitlement to your app
1. add the capability **Associated Domains**
![](/universalLinks/screenshot_xcode_capability.png)
![](/universalLinks/screenshot_xcode_ad.png)

<div style="page-break-after: always;"></div>

2. add ```applinks:<fully qualified domain>?mode=developer``` for the **development-mode**
   or ```applinks:<fully qualified domain>``` for productive mode
![](/universalLinks/screenshot_xcode_ad_domain.png)

<div style="page-break-after: always;"></div>

### 5. add code-logic to the app
This allows to register a handler that will be called whenever your application is opened using a universal link, regardless of its state (foreground, background, force-quit).

```swift
@main
struct ContentView: App {
  var body: some Scene {
    WindowGroup {
      VStack {
				Text("Hello world")
			}
        .onOpenURL { url in
			// handle universal links
			print("url: \(url)")
		}
    }
  }
}
```

<div style="page-break-after: always;"></div>

### 6. enable on iPhone
1. go to **Settings**

{{< rawhtml >}}
<img src="/universalLinks/icon_settings.png" width="100">
{{< /rawhtml >}}

2. go to **Developer**

{{< rawhtml >}}
<img src="/universalLinks/screenshot_developer.jpeg" width="300">
{{< /rawhtml >}}

3. enable **Associated Domains Development**

{{< rawhtml >}}
<img src="/universalLinks/screenshot_ul_add.jpeg" width="300">
{{< /rawhtml >}}

4. **reboot** your phone

### 7. install App
{{< notice info >}}
If the app is already on your phone:
1. delete the app
2. re-install the app
{{< /notice >}}

<div style="page-break-after: always;"></div>

### 8. check the association
1. go to **Settings**

{{< rawhtml >}}
<img src="/universalLinks/icon_settings.png" width="100">
{{< /rawhtml >}}

2. go to **Developer**

{{< rawhtml >}}
<img src="/universalLinks/screenshot_developer.jpeg" width="300">
{{< /rawhtml >}}

3. tap **Diagnostics**

{{< rawhtml >}}
<img src="/universalLinks/screenshot_ul_diagnostics.jpeg" width="300">
{{< /rawhtml >}}

4. enter the URL 
   *I'm using /app/test because I added this in my file for the server:*
	```"/": "/app/?*"```

{{< rawhtml >}}
<img src="/universalLinks/screenshot_iOS_ul_diagnostics.png" width="300">
{{< /rawhtml >}}

5. see if it worked

{{< rawhtml >}}
<img src="/universalLinks/screenshot_iOS_ul_check.png" width="300">
{{< /rawhtml >}}

### 9. test
1. if you try to open an URL in Safari (like specified above)\
   e.g. ```https://<fully qualified domain>/app/something```
   a banner should appear:

{{< rawhtml >}}
<img src="/universalLinks/screenshot_app_banner.png" width="300">
{{< /rawhtml >}}

2. if you save the URL somewhere (e.g. the notes app) and tap it afterwards, the app should open.

### 10. troubleshooting
1. start the **Console** app on your Mac

{{< rawhtml >}}
<img src="/universalLinks/icon_console.png" width="100">
{{< /rawhtml >}}

2. select your device and click **start streaming**

{{< rawhtml >}}
<img src="/universalLinks/screenshot_console_start.png" width="300">
{{< /rawhtml >}}

3. set the search to ```swcd```

These logs provide some activities related to Universal Links and other associated domain features. We can see the system is downloading the AASA file or not if it errors it will display here.

![](/universalLinks/screenshot_console_log.png)
