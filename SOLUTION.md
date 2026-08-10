# Lösning

## Nyckelkommandon

```bash
git merge case-01-konflikt
git status
git add index.html
git commit
git push
```

## Därför händer det

Konflikten uppstår eftersom både `case-01-behall-mina-andringar` och `case-01-konflikt` innehåller olika ändringar på samma rad i `index.html`. Git kan inte avgöra vilken version som ska behållas och ber dig därför lösa konflikten manuellt.

## Tips

- Läs konfliktmarkeringarna (`<<<<<<<`, `=======`, `>>>>>>>`) innan du gör ändringar.
- I det här caset ska du behålla **dina egna ändringar**.
- Kontrollera med `git status` att konflikten är löst innan du skapar merge-commiten.