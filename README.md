Simple js plugin for jQuery library.
Allow make searchable select box with images
For example:
<select id='my_selectbox'>
<option value='1' class='opt1'>First</option>
<option value='2' class='opt2'>Second</option>
...
<option value='10000' class='opt10000'>ten thousandth</option>
</select>
<script type='text/javascript'>
$(document).ready(function(){
    $('#my_selectbox')..simpSelect();
});
</script>

In result you get list 
<div class="simpSelectCont expanded">
<span class="icon  toggle-simpSelect"></span>
<input class="form-control input-sm simpSelectSearch">
<ul class='simpSelectList'>
   <li class='opt1'><a class=simpSelectItm' data_val='1'>First</a></li>
   <li class='opt1'><a class=simpSelectItm' data_val='2'>Second</a></li>
   ...
   <li class='opt10000'><a class='simpSelectItm' data_val='10000'>ten thousandth</a></li>
</ul>
</div>


