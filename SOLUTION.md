# Lösning

## Nyckelkommandon

```bash
git merge case-03-konflikt
git status
git add index.html
git status
git commit
git push
```

## Så löser du konflikten i Visual Studio Code

Efter `git merge case-03-konflikt` stoppar Git mergen eftersom det finns en konflikt i `index.html`.

Öppna `index.html` i Visual Studio Code.

Du kan läsa konfliktmarkeringarna direkt i filen:

```text
<<<<<<< HEAD
Din version
=======
Den andra personens version
>>>>>>> case-03-konflikt
```

I det här caset ska du behålla **båda versionerna**.

Du kan redigera filen manuellt och kombinera ändringarna, eller använda Visual Studio Codes Merge Editor och välja **Accept Both Changes** om alternativet finns.

Kontrollera efteråt att båda ändringarna finns kvar och att konfliktmarkeringarna har försvunnit.

När konflikten är löst sparar du filen och kör:

```bash
git add index.html
git status
git commit
git push
```

## Alternativt sätt – redigera manuellt

Du behöver inte använda Merge Editor.

Om konflikten exempelvis ser ut så här:

```text
<<<<<<< HEAD
<h2>Min version</h2>
=======
<h2>Den andra personens version</h2>
>>>>>>> case-03-konflikt
```

kan du själv ändra den till:

```html
<h2>Min version</h2>
<h2>Den andra personens version</h2>
```

Ta bort konfliktmarkeringarna, spara filen och kör sedan:

```bash
git add index.html
git status
git commit
git push
```

## Därför händer det

Merge-konflikten uppstår eftersom `case-03-behall-bada-versionerna` och `case-03-konflikt` har ändrat samma del av `index.html`.

Git kan inte automatiskt avgöra hur ändringarna ska kombineras och stoppar därför mergen tills konflikten har lösts.

I det här caset ska båda ändringarna finnas kvar i den färdiga versionen.

## Tips

- Använd `git status` för att se vilken fil som innehåller konflikten.
- Konflikten är redan förberedd och uppstår när du kör mergen.
- Öppna `index.html` i Visual Studio Code och jämför versionerna.
- Behåll båda ändringarna i den färdiga filen.
- Du kan använda **Accept Both Changes** eller kombinera koden manuellt.
- Kontrollera att `<<<<<<<`, `=======` och `>>>>>>>` inte finns kvar.
- Använd `git add` när konflikten är löst.
- Slutför mergen med `git commit`.
- Kontrollera med `git status` att merge-processen är klar.