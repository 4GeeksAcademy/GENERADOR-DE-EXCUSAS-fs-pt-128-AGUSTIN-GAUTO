let who = ["Mi perro",`Mi padre`,`Mi hermano`];
let action = [`se comio`,`se llevo`,`daño`];
let what = [`tarjeta del transporte`,`mi coche`,`mi patinete`];
let when = [`y no tenia como ir`,`cuando yo dormia`,`antes de salir de mi casa`];

function generateExcusa() {
          const getRandomElement = (arr) => {
            const randomIndex = Math.floor(Math.random() * arr.length);
            return arr[randomIndex];
          };

          const randomWho = getRandomElement(who);
          const randomAction = getRandomElement(action);
          const randomWhat = getRandomElement(what);
          const randomWhen = getRandomElement(when);

          return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
        }
        window.onload = function() {
          const randomExcusa = generateExcusa();
          const excuseElement = document.getElementById('excuse');

          if (excuseElement) {
            excuseElement.innerHTML = randomExcusa;
          }
        };