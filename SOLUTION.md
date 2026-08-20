# Lösning

## Nyckelkommandon

```bash
git merge case-01-konflikt
git status
git add index.html kontakt.html
git status
git commit
git push
```

## Så löser du konflikten i Visual Studio Code

Efter `git merge case-01-konflikt` kommer Git att stoppa mergen eftersom det finns konflikter i `index.html` och `kontakt.html`.

Öppna konfliktfilerna i Visual Studio Code.

Du kan antingen läsa konfliktmarkeringarna direkt i filen:

```text
<<<<<<< HEAD
Din version
=======
Den andra branchens version
>>>>>>> case-01-konflikt
```

eller använda **Resolve in Merge Editor** i Visual Studio Code.

I det här caset ska du behålla **din egen version**, alltså ändringarna från `case-01-behall-mina-andringar`.

När du har löst konflikterna sparar du filerna och kör:

```bash
git add index.html kontakt.html
git status
git commit
git push
```

## Alternativt sätt – via terminalen

Om du redan vet att du vill behålla hela din egen version av konfliktfilerna kan du använda:

```bash
git checkout --ours index.html
git checkout --ours kontakt.html
git add index.html kontakt.html
git commit
git push
```

`--ours` betyder här att Git behåller versionen från branchen du står i, alltså `case-01-behall-mina-andringar`.

## Därför händer det

Merge-konflikterna uppstår eftersom `case-01-behall-mina-andringar` och `case-01-konflikt` har ändrat samma delar av `index.html` och `kontakt.html`.

Git kan inte automatiskt avgöra vilken version som ska behållas och stoppar därför mergen tills konflikterna har lösts.

## Tips

- Använd `git status` för att se vilka filer som innehåller konflikter.
- Konflikterna är redan förberedda och uppstår när du kör mergen.
- Öppna konfliktfilerna i Visual Studio Code och jämför versionerna.
- I det här caset ska du behålla dina egna ändringar.
- `git checkout --ours <filnamn>` är ett snabbare alternativ om du vill behålla hela din egen version.
- Använd `git add` för att markera konflikterna som lösta.
- Slutför mergen med `git commit`.
- Kontrollera med `git status` att merge-processen är klar.