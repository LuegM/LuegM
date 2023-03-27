---
title: "Font Awesome 6 in xCode & SwiftUI"
date: 2023-02-02T15:18:20+01:00
draft: false
tags: ["Font Awesome", "Icon", "Apple", "iOS", "iPadOS", "Xcode"]
categories: ["Swift", "SwiftUI"]
---
## Introduction
Welcome to my blog post on **Font Awesome 6 in Xcode & SwiftUI**. 

In this post, I'll be sharing with you the steps on how to install Font Awesome icons in your Xcode project using SwiftUI. 

We'll start by downloading the font files, adding the .otf files to the project, adding the fonts to the Info.plist file and creating a new struct for CustomFonts. 

Then, I'll show you how to use Font Awesome icons in your Xcode project. 
I'll take you through the process of searching for an icon on Font Awesome, copying the glyph, and adding the icon as text. 

To wrap things up, I'll also include a style preview to give you an idea of the various font styles available. 
Whether you're a beginner or an experienced iOS developer, this post will guide you through the process of adding Font Awesome icons to your Xcode project with ease.

---
## How to add...

### 1.  download the font files
[Download Font Awesome](https://fontawesome.com/download)

→ use the „**For The Desktop**“ Version

![](/FA/screenshot_fa_download.png)

### 2. add *.otf* files to the project

![](/FA/screenshot_fa_otfs.png)

You will then be prompted with a dialog box. 

{{< notice warning >}}
Be sure to check your project name under “Add to targets.” \
This will ensure that your fonts are compiled as assets at build time.
{{< /notice >}}

![](/FA/screenshot_fa_addToTarget.png)

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
Font Awesome 6 Sharp-Regular-400.otf
```

```plaintext
Font Awesome 6 Sharp-Solid-900.otf
```

{{< notice note >}}
The fonts might not be named like these anymore.\
Check real filenames!
{{< /notice >}}


### 4. create a new struct for **CustomFonts**

1. create a new Swift File *(name: "CustomFonts)*
2. add this code
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

## How to use...

### 1. go to Font Awesome and search for an icon

[Search | Font Awesome](https://fontawesome.com/search)

### 2. click Copy Glyph

![](/FA/screenshot_fa_glyph.png)

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

