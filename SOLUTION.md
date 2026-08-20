# Lösning

## Nyckelkommandon

```bash
git merge case-02-konflikt
git status
git add index.html
git status
git commit
git push
```

## Så löser du konflikten i Visual Studio Code

Efter `git merge case-02-konflikt` stoppar Git mergen eftersom det finns en konflikt i `index.html`.

Öppna `index.html` i Visual Studio Code.

Du kan läsa konfliktmarkeringarna direkt i filen:

```text
<<<<<<< HEAD
Din version
=======
Den andra personens version
>>>>>>> case-02-konflikt
```

Du kan också använda Visual Studio Codes Merge Editor.

I det här caset ska du behålla **den andra personens version**, alltså ändringen från `case-02-konflikt`.

I Merge Editor motsvarar det normalt **Incoming Change**.

När konflikten är löst sparar du filen och kör:

```bash
git add index.html
git status
git commit
git push
```

## Alternativt sätt – via terminalen

Om du redan vet att du vill behålla hela versionen från branchen som mergas in kan du använda:

```bash
git checkout --theirs index.html
git add index.html
git commit
git push
```

`--theirs` betyder i den här mergen att Git väljer versionen från `case-02-konflikt`.

## Därför händer det

Merge-konflikten uppstår eftersom `case-02-behall-andras-andringar` och `case-02-konflikt` har ändrat samma del av `index.html`.

Git kan inte automatiskt avgöra vilken version som ska användas och stoppar därför mergen tills konflikten har lösts.

## Tips

- Använd `git status` för att se vilken fil som innehåller konflikten.
- Konflikten är redan förberedd och uppstår när du kör mergen.
- Öppna `index.html` i Visual Studio Code och jämför versionerna.
- I det här caset ska du behålla den andra personens ändringar.
- `git checkout --theirs index.html` är ett snabbare alternativ om du vill behålla hela den inkommande versionen.
- Använd `git add` när konflikten är löst.
- Slutför mergen med `git commit`.
- Kontrollera med `git status` att merge-processen är klar.