---
title: "Passkeys"
date: 2023-11-02T12:00:00+01:00
draft: true
tags: ["SwiftUI", "Custom Colors", "Color Extension", "UI Design", "Swift Programming", "Hex Colors"]
categories: ["Swift", "SwiftUI"]
---

Creating custom colors in SwiftUI enhances the visual appeal of your app and maintains consistency across the user interface. Extending the `Color` struct in SwiftUI is an efficient way to define and manage custom colors. Follow this step-by-step guide to learn how:

1. **Organize Your Code**: 
   Begin by creating a new Swift file. Naming it `CustomColors.swift` would be a logical choice. This practice helps in keeping your codebase organized and clean.

2. **Extend the `Color` Struct**: 
   Open your new Swift file, and start by importing the SwiftUI framework. Then, extend the `Color` struct to add your custom color definitions.

3. **Define Custom Colors**: 
   Within the extension, define static properties for your custom colors. Each property should return an instance of `Color`.

```swift
import SwiftUI

extension Color {
    static let customRed = Color(red: 0.862, green: 0.1176, blue: 0.2078)
    static let customHexBlue = Color(hex: "#0000FF")

    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3: // RGB (12-bit)
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6: // RGB (24-bit)
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8: // ARGB (32-bit)
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (255, 0, 0, 0)
        }
        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue: Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}
```

In the code above, we've defined two custom colors and an initializer for hex values:
- `customRed`: A predefined custom red color.
- `customHexBlue`: A custom blue color initialized using a hex value.
- `init(hex:)`: An initializer to create a color from a hex string.

4. **Usage in Your SwiftUI Project**: 
   You can now use your custom colors as `Color.customRed`, `Color.customHexBlue`, and so on, throughout your SwiftUI project.

#### Handling Hex Colors:
The `Color` extension includes an initializer for hex strings, allowing you to easily define colors using hex values. The initializer handles different formats including RGB, ARGB, and more, converting them into a `Color` object.
