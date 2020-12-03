$(document).ready(function () {
  const headings = [];
  let i = 0;
  $("th:not(:first-child)").each(function (index) {
    headings.push($(this).text());
  });

  $("tbody tr").each(function () {
    $(this).find("td:first-child").append('<div class="table-wrap"></div>');
    $(this)
      .find("td:not(:first-child)")
      .each(function () {
        $(this)
          .parent()
          .find("td:first-child div")
          .append(
            `<table class="table-mobile">
                <tbody>
                    <tr>
                        <td>${headings[i]}</td>
                        <td>${$(this).html()}</td>
                    </tr>
                </tbody>
            </table>`
          );
        i++;
        i = i === headings.length ? 0 : i;
      });
  });

  $("td:first-child").click(function () {
    $(this).find("div.table-wrap").slideToggle();
  });
});

$(window).resize(function () {
  if ($(window).width() > 1200) {
    $("div.table-wrap").css("display", "none");
  }
});
