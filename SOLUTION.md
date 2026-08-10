# Lösning

## Nyckelkommandon

```bash
git log --oneline
git reset --hard <commit-id>
git status
git push --force-with-lease
```

## Därför händer det

Den felaktiga ändringen har mergats in och blivit en del av historiken i `case-04-tidigare-version`.

Git sparar tidigare commits, vilket gör att du kan hitta versionen som fanns innan den felaktiga ändringen och återställa branchen till det läget.

## Tips

- Använd `git log --oneline` för att hitta den tidigare versionen.
- Kontrollera commit-id noggrant innan du återställer.
- I det här caset ska du återställa till **versionen innan den felaktiga ändringen**.
- Kontrollera med `git status` att allt ser rätt ut innan du pushar.