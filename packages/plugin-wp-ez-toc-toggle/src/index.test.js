import { run } from "./";

beforeAll(() => {
    // language=HTML
    document.documentElement.innerHTML = `<html><head></head><body><div id="ez-toc-container" class="counter-hierarchy counter-numeric ez-toc-grey"><div class="ez-toc-title-container"><p class="ez-toc-title">ניווט מהיר:</p> <span class="ez-toc-title-toggle"><a class="ez-toc-pull-right ez-toc-btn ez-toc-btn-xs ez-toc-btn-default ez-toc-toggle"><i class="ez-toc-glyphicon ez-toc-icon-toggle"></i></a></span></div><nav><ul class="ez-toc-list" style="display: none;"><li><a href="#-robotstxt" title="מה זה קובץ robots.txt&nbsp;">מה זה קובץ robots.txt&nbsp;</a></li><li><a href="#-robotstxt-2" title="איפה קובץ ה robots.txt ממוקם&nbsp;">איפה קובץ ה robots.txt ממוקם&nbsp;</a></li><li><a href="#-robotstxt-3" title="יתרונות וחסרונות בשימוש של הקובץ robots.txt">יתרונות וחסרונות בשימוש של הקובץ robots.txt</a></li><li><a href="#-robotstxt-4" title="תחביר robots.txt">תחביר robots.txt</a></li><li><a href="#i" title="רשימת הזחלנים של מנועי החיפוש השונים">רשימת הזחלנים של מנועי החיפוש השונים</a></li><li><a href="#-robotstxt-5" title="איך קובץ robots.txt צריך להראות בסוף">איך קובץ robots.txt צריך להראות בסוף</a></li><li><a href="#-robotxtxt" title="איך ליצור קובץ robotx.txt">איך ליצור קובץ robotx.txt</a></li></ul></nav></div></body></html>`;
});


test('run', () => {
    run();
});