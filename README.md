# Create modular css structure

A <b>start</b> mappába dolgozunk az <b>end</b> mappában találjuk a megoldást

## 1. init npm 
Inicializáljuk a node modulokat, menjünk a start mappába és futassuk terminálban a következőt:
```npm init```

## 2. Nézzük meg az scss-all-files mappát
Itt találhatjuk az összes scss fájl ömlesztve, ezekből a fájlokből kell felépítenünk az end mappában található struktúrát

## 3. A default mappa létrehozása

- hozzunk létre egy <b>scss</b> és abban egy további <b>default</b> mappát és egy <b>index.scss</b> fájlt
- az <b>index.scss</b> fájl lesz a belépési pontunk a default mappához
- az index.scss mappában helyezzük el a következő sorokat:
```
@import 'default/variables';
@import 'default/index'; // import default theme
```

## 4. Az almappák létrehozás

- a <b>default</b> mappában hozzuk létre a következő mappákat:
```
components
layout
modules
utils
```

- az <b>scss-all-files</b> mappából másoljuk a következő fájlokat a default mappa gyökerébe

```
_base.scss
_compontents.scss
_layout.scss
_modules.scss
_utils.scss
_variables.scss
```

- a <b>default</b> mappa gyökerében hozzunk létre egy <b>index.scss</b>, majd ebbe a fájlba másoljuk be a következő sorokat:

```
@import "base";
@import "utils";
@import "layout";
@import "components";
@import "modules";
```

## 5. A <b>components</b> mappa

- másoljuk át a következő fájlokat a <b>components</b> mappába

```
badge.scss
button.scss
form.scss
```

- hozzunk létre egy _index.scss nevű fájlt a <b>components</b> mappába, tartalma a következő legyen:

```
@import "badge";
@import "button";
@import "form";
```

## 6. A <b>layout</b> mappa

- másoljuk át a következő fájlokat a <b>layout</b> mappába

```
content.scss
footer.scss
header.scss
sidebar.scss
```

- hozzunk létre egy _index.scss nevű fájlt a <b>layout</b> mappába, tartalma a következő legyen:

```
@import "content";
@import "footer";
@import "header";
@import "sidebar";
```

## 7. A <b>modules</b> mappa

- másoljuk át a következő fájlokat a <b>modules</b> mappába

```
base.scss
category.scss
header-links.scss
login-links.scss
logo.scss
news.scss
product-item.scss
search.scss
```

- hozzunk létre egy _index.scss nevű fájlt a <b>modules</b> mappába, tartalma a következő legyen:

```
@import 'base';
@import 'category';
@import 'header-links';
@import 'login-links';
@import 'logo';
@import 'news';
@import 'product-item';
@import 'search';
```

## 8. A <b>utils</b> mappa

- másoljuk át a következő fájlokat a <b>utils</b> mappába

```
align.scss
cols.scss
container.scss
float.scss
lists.scss
```

- hozzunk létre egy _index.scss nevű fájlt a <b>utils</b> mappába, tartalma a következő legyen:

```
@import 'align';
@import 'cols';
@import 'container';
@import 'float';
@import 'lists';
```

## 9. Futassuk a gulp taskot, gyúrjuk egybe a css-t
Mivel már létrehoztuk a moduláris struktúránkat a <b>start</b> mappában állva a terminálban futassuk a <b>gulp</b>