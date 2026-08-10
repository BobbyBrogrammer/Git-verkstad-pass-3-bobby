# Lösning

## Nyckelkommandon

```bash
git merge case-03-konflikt
git status
git add index.html
git commit
git push
```

## Därför händer det

Konflikten uppstår eftersom både `case-03-behall-bada-versionerna` och `case-03-konflikt` innehåller olika ändringar på samma rad i `index.html`.

Git kan inte avgöra hur ändringarna ska kombineras och ber dig därför lösa konflikten manuellt.

## Tips

- Läs konfliktmarkeringarna (`<<<<<<<`, `=======`, `>>>>>>>`) innan du gör ändringar.
- I det här caset ska du **behålla båda versionerna**.
- Ta bort konfliktmarkeringarna och spara båda ändringarna.
- Kontrollera med `git status` att konflikten är löst innan du skapar merge-commiten.