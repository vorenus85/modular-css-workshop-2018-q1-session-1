# Create modular css structure

A <b>start</b> mappába dolgozunk az <b>end</b> mappában találjuk a megoldást

## 1. init npm 
Inicializáljuk a node modulokat, menjünk a start mappába és futassuk terminálban a következőt:
```npm init```

## 2. Nézzük meg az scss-all-files mappát
Itt találhatjuk az összes scss fájl ömlesztve, ezekből a fájlokből kell felépítenünk az end mappában található struktúrát

## 3. A default mappa létrehozása

- hozzunk létre egy <b>scss</b> és abban egy további <b>default</b> mappát és azzal egy szinten egy <b>_index.scss</b> fájlt
- az <b>index.scss</b> fájl lesz a belépési pont a gulpnak
- az index.scss fájlban helyezzük el a következő sorokat:
```
// default theme
@import 'default/default.scss';
```

- a default mappán belül hozzunk létre egy default.scss nevű a fájlt a tartalma a következő legyen:

```
// default variables
@import 'variables';

// import default theme
@import "base";
@import "utils";
@import "layout";
@import "components";
@import "modules";
```

## 4. Az almappák létrehozás

- a <b>default</b> mappában hozzunk létre a következő mappákat:
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

## 5. A <b>components</b> mappa

- másoljuk át a következő fájlokat a <b>components</b> mappába

```
badge.scss
button.scss
form.scss
```

- nyissuk meg a <b>default</b> mappában a _components.scss fájlt, ez legyen a tertalma:

```
@import "components/badge";
@import "components/button";
@import "components/form";
```

## 6. A <b>layout</b> mappa

- másoljuk át a következő fájlokat a <b>layout</b> mappába

```
content.scss
footer.scss
header.scss
sidebar.scss
```

- nyissuk meg a <b>default</b> mappában a _layout.scss fájlt, ez legyen a tartalma:

```
@import "layout/content";
@import "layout/footer";
@import "layout/header";
@import "layout/sidebar";
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

- nyissuk meg a <b>default</b> mappában a _modules.scss fájlt, ez legyen a tertalma:

```
@import 'modules/base';
@import 'modules/category';
@import 'modules/header-links';
@import 'modules/login-links';
@import 'modules/logo';
@import 'modules/news';
@import 'modules/product-item';
@import 'modules/search';
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

- nyissuk meg a <b>default</b> mappában a _utils.scss fájlt, ez legyen a tertalma:

```
@import 'utils/align';
@import 'utils/cols';
@import 'utils/container';
@import 'utils/float';
@import 'utils/lists';
```

## 9. Futassuk a gulp taskot, gyúrjuk egybe a css-t
Mivel már létrehoztuk a moduláris struktúránkat a <b>start</b> mappában állva a terminálban futassuk a <b>gulp</b>