<?php 
	$type = $_REQUEST['type'];
	$str = '';
	if ($type == 'list') {
		$str = '{ "records":[ 
						{"Name":"张三","City":"德州","Country":"中国","age":20}, 
						{"Name":"李四","City":"济南","Country":"中国","age":25}, 
						{"Name":"圣保罗","City":"休斯顿","Country":"美国","age":40}, 
						{"Name":"安倍","City":"日本","Country":"中国","age":23}, 
						{"Name":"特朗普","City":"华盛顿","Country":"美国","age":42}, 
						{"Name":"刘德华","City":"香港","Country":"中国","age":36}, 
						{"Name":"查理","City":"越南","Country":"越南","age":18}, 
						{"Name":"小花","City":"禹城","Country":"中国","age":2}, 
						{"Name":"普京","City":"莫斯科","Country":"俄罗斯","age":57}, 
						{"Name":"金三胖","City":"平壤","Country":"朝鲜","age":28}, 
						{"Name":"土鳖三世","City":"伦敦","Country":"英国","age":41}
						] 
					}';
	}
	echo $str;
 ?>