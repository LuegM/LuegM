---
title: "Font Awesome 6 in xCode & SwiftUI"
date: 2023-02-02T15:18:20+01:00
draft: false
tags: ["Font Awesome", "Icon", "Apple", "iOS", "iPadOS", "Xcode"]
categories: ["Swift", "SwiftUI"]
---

## How to install…

### 1.  download the font files
[Download Font Awesome](https://fontawesome.com/download)

→ use the „**For The Desktop**“ Version

![](/FA/screenshot_fa_download.png)

----

### 2. add *.otf* files to the project

![](/FA/screenshot_fa_otfs.png)

You will then be prompted with a dialog box. 

Be sure to check your project name under “Add to targets.” 
This will ensure that your fonts are compiled as assets at build time.
![](/FA/screenshot_fa_addToTarget.png)

----

### 3. add the fonts to „Info.plist“ file

![](/FA/screenshot_fa_infoPlist.png)

```plaintext
Font Awesome 6 Brands-Regular-400.otf
```

```plaintext
Font Awesome 6 Duotone-Solid-900.otf
```

```plaintext
Font Awesome 6 Pro-Light-300.otf
```

```plaintext
Font Awesome 6 Pro-Regular-400.otf
```

```plaintext
Font Awesome 6 Pro-Solid-900.otf
```

```plaintext
Font Awesome 6 Pro-Thin-100.otf
```

```plaintext
Font Awesome 6 Sharp-Solid-900.otf
```

→ might not be named like these → check real filenames

### 4. create a new struct for **CustomFonts**

```swift
struct CustomFonts {
    static let FAPro = "FontAwesome6Pro-Regular"
    static let FAProLight = "FontAwesome6Pro-Light"
    static let FAProSolid = "FontAwesome6Pro-Solid"
    static let FAProThin = "FontAwesome6Pro-Thin"
    static let FADuotone = "FontAwesome6Duotone-Solid"
    static let FASharp = "FontAwesome6Sharp-Solid"
    static let FABrands = "FontAwesome6Brands-Regular"
}
```

----

## How to use…

### 1. go to Font Awesome and search for an icon

[Search | Font Awesome](https://fontawesome.com/search)

### 2. click Copy Glyph

![](/FA/screenshot_fa_glyph.png)

----

### 3. add the icon as text

```swift
Text("<icon>")
	.font(.custom(CustomFonts.<FontName>, size: <size>))
```

e.g.
```swift
Text("<icon>")
	.font(.custom(CustomFonts.FADuotone, size: 20))

Text("<icon>")
	.font(.custom(CustomFonts.FAProThin, size: 20))
```

----
## Style preview
![](/FA/style_prev.pdf)

