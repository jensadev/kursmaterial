---
title: Installation
summary: För att komma igång och skriva en webbserver behöver vi installera några verktyg och program.
tags: ["installation", "wsl", "nvm", "linux"]
eleventyNavigation:
    key: installation
    order: 1
    parent: webbserver
---

För att komma igång och skriva en webbserver behöver vi installera några verktyg och program. 

## WSL2

Vi behöver WSL2 för att köra node, eller det gör livet enklare, bättre och snabbare.
Guide till att installera WSL2 finns här: [https://docs.microsoft.com/en-us/windows/wsl/install-win10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

WSL står för Windows Subsystem for Linux och är en Linux-kärna som körs i Windows. Detta gör att vi kan köra Linux-kommandon i Windows.
Vi kommer att använda Ubuntu som Linux-distribution.

### Installera Ubuntu

1. Öppna Microsoft Store
2. Sök efter Ubuntu
3. Klicka på Ubuntu (LTS är bra) och Installera
4. Starta Ubuntu
5. När prompten frågar, skapa ett användarnamn och lösenord (det viktigaste är att du kommer ihåg det)

#### Uppdatera Ubuntu

På samma sätt som Windows så är det viktigt att hålla operativsystemet uppdaterat för säkerhet och stabilitet.
För att se till att Ubuntu är uppdaterat kör följande kommandon:

```bash
sudo apt update
sudo apt upgrade
```

Sudo är `superuser do` och används för att köra kommandon som kräver administratörsrättigheter. Apt är ett verktyg (pakethanterare) för att installera och uppdatera program i Ubuntu.

### Installera Node med NVM

NVM står för Node Version Manager och är ett verktyg för att installera och hantera olika versioner av Node.js.

[Guide](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl) för att installera Node.js med NVM.

## Linux commandon

Du har förhoppningsvis med dig lite cmdline kunskaper från tidigare. Det är bra om du förstår hur filsystemet är uppbyggt både på windows och linux. I filsystemet har du en root, som är den översta nivån, och under den finns olika mappar och filer. I Linux är filsystemet uppbyggt som en trädstruktur där allt börjar från root `/`.
Det finns ingen `C:\` eller `D:\` som i Windows, utan allt är en del av samma filsystem. 

För att navigera i filsystemet använder vi kommandon i terminalen. Här är några grundläggande kommandon som är bra att känna till:

| Kommando | Beskrivning |
|---|---------------|
| `pwd`      | Visar aktiv mapp        |
| `ls`| Listar alla filer i mappen |
| `ll`| Visar alla filerna i mappen, ett alias |
| `ls -la`| Visar alla filerna i mappen, även dolda filer |
| `cd <mappnamn>` | Byter till den angivna mappen |
| `cd ..` | Går upp en nivå i filsystemet, alltså mappen ovanför den du är i |
| `cd` `cd ~` | Går till din users hem mapp |
| `mkdir <mappnamn>` | Skapar en ny mapp |
| `rm <filnamn>` | Tar bort en fil          |
| `rm -r <mappnamn>`  | Tar bort en mapp och dess innehåll   |
