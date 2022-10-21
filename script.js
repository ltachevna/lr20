$(document).ready(function () {
  //1
  const list = JSON.stringify($('.list').children());
  console.log(list);

  //2
  const newList = JSON.parse(list);
  // const info = JSON.stringify(document);
  // console.log(JSON.stringify(list));
  console.log(newList);

  //3
  // console.log($('body').children());
  const obj = Object.keys(newList);
  console.log(obj);
  // const arr = newList.map((el) => el);
  $ul = $(`<ul><li>${obj[4]}</li><li>${obj[1]}</li><li>${obj[2]}</li></ul>`);
  $('.root').append($ul);

  //4

  console.log($(document.body).children());

  //5

  $table = $('<table></table>');
  $trHead = $(
    '<tr><th></th><th title="Настоящее">Present</th><th title="Прошлое">Past</th><th title="Будущее">Future</th></tr>'
  );

  $table.append($trHead);
  for (let i = 0; i < 3; i++) {
    switch (i) {
      case 0:
        $th = $('<th>+</th>');
        $td1 = $('<td>I dance</td>');
        $td2 = $('<td>I danced</td>');
        $td3 = $('<td>I will dance</td>');
        $tr = $('<tr></tr>');
        $tr.append($th, $td1, $td2, $td3);
        $table.append($tr);
        break;
      case 1:
        $th = $('<th>-</th>');
        $td1 = $('<td>I don`t dance</td>');
        $td2 = $('<td>I didn`t dance</td>');
        $td3 = $('<td>I won`t dance</td>');
        $tr = $('<tr></tr>');
        $tr.append($th, $td1, $td2, $td3);
        $table.append($tr);
        break;
      case 2:
        $th = $('<th>?</th>');
        $td1 = $('<td>Do I dance?</td>');
        $td2 = $('<td>Did I dance?</td>');
        $td3 = $('<td>Will I dance?</td>');
        $tr = $('<tr></tr>');
        $tr.append($th, $td1, $td2, $td3);
        $table.append($tr);
        break;
    }
  }
  $(document.body).append($table);

  $('th').addClass('thStyle');
  $('td').addClass('tdStyle');
  $('tr').addClass('trStyle');
  $('table').addClass('tableStyle');
});

//8
$form = $(`<form></form>`);
$input1 = $(`<input class='text'/>`);
$input2 = $(`<input class='number' type='number' />`);
$input3 = $(`<input type='submit'/>`);

$form.submit((e) => e.preventDefault());

$form.append($input1, $input2, $input3);
$(document.body).append($form);
$input3.click(() => {
  let i1 = document.querySelector('.text');
  let i2 = document.querySelector('.number');
  i1.value === '' || i2.value === '' ? alert('error') : alert('good');
});
//9
$label = $('<label></label>');
$input = $(`<input type='checkbox'>`);
$span = $('<span></span>');

$label.addClass('switch');
$span.addClass('slider');

$label.append($input, $span);
$(document.body).append($label);
