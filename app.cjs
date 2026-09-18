// Startdatei fuer Plesk/Passenger. Laedt das Express-Backend (ES-Modul) aus dist/.
import('./dist/server.js').catch((error) => {
  console.error('SmallTime konnte nicht gestartet werden:', error);
  process.exit(1);
});
