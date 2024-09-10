Internationalization (i18n) libraries like i18next require you to provide translations for each language you want to support. 
These translations are typically structured in JSON format, where each language has its own set of key-value pairs.
By organizing your translations this way and using i18next, you can easily manage and switch between different languages on your website.


To implement a page that uses Internationalization (i18n) with a library like i18next, we'll follow a few steps to set it up. The above code example shows how you can use i18next to handle language translation in a web page.

Step-by-Step Guide:
1.Install i18next: If you're using a development environment, you can install i18next via npm. But for this example, we'll use the CDN to keep things simple.

2.Create Language Translation Files: We'll store our translations in JSON format.

3.HTML and JavaScript: Use i18next to switch languages dynamically on the page.


PROJECT STRUCTURE
/Language-Selector-with-Internationalization--i18--Libraries
    - index.html
    - translations/
        - en.json
        - fr.json
        - sw.json
    - script.js
