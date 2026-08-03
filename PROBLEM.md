## Scenario

Ni arbetar två och två i samma branch: `case-03-behall-bada-versionerna`.

Båda deltagarna ska ändra **samma rad** i `index.html`, men skriva olika innehåll.

### Deltagare 1

- Ändra den angivna raden.
- Skapa en commit.
- Pusha ändringen till GitHub.

### Deltagare 2

- Ändra **samma rad**, men skriv något annat.
- Skapa en commit.
- Försök pusha din ändring.

Pushen kommer att nekas eftersom en ny version redan har pushats till GitHub.

Hämta därefter de senaste ändringarna från GitHub. Eftersom båda har ändrat samma rad uppstår en merge-konflikt.

## Din uppgift

Lös merge-konflikten genom att **behålla båda versionerna**.

Redigera filen så att båda deltagarnas ändringar finns kvar och ta bort konfliktmarkeringarna.

Slutför därefter merge-processen och pusha den färdiga lösningen till GitHub.

> **Tips:** En merge-konflikt behöver inte alltid lösas genom att välja en av versionerna. I många fall är den bästa lösningen att kombinera båda ändringarna.