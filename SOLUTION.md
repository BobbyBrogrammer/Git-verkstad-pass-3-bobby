# Lösning

## Nyckelkommandon

```bash
git merge case-04-felaktig-version
git log --oneline
git reset --hard HEAD~1
git status
git push --force-with-lease
```

## Därför händer det

När en felaktig ändring har mergats in blir den en del av branchens historik.

Git sparar tidigare commits, vilket gör att du kan gå tillbaka till versionen som fanns innan den felaktiga ändringen.

## Tips

- Använd `git log --oneline` för att se commit-historiken.
- Kontrollera alltid vilken commit du vill gå tillbaka till innan du återställer.
- `git reset --hard` tar bort ändringar i arbetskatalogen, så använd kommandot försiktigt.
- Om den felaktiga versionen redan har pushats behöver remote-branchen uppdateras efter återställningen.