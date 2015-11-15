
$(document).ready(function() {
	var HOST = "https://mvcr.herokuapp.com/api";
//	var HOST = "http://api.consentreceipt.org/api";

	$.fn.serializeObject = function()
	{
	    var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] !== undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            o[this.name].push(this.value || '');
	        } else {
	        	var splitName = this.name.split(".");
	        	if(splitName.length > 1){
	        		o[splitName[0]] = o[splitName[0]] || {}
	        		o[splitName[0]][splitName[1]] = this.value || '';
	        	}else{
	        		o[this.name] = this.value || '';	
	        	}
	        }
	    });
	    return o;
	};
	
	// prevent accidental form submission on 'enter'
	$('input,select').keypress(function(event) { return event.keyCode != 13; });

	$(".js-example-tags").select2({
	  tags: ["CISWG Membership","Join", "Bob’s store", "delivery"]
	});

	var listPurpose = [
		  	{id: "core_function", text: "Core Function"}, {id: "contracted_service", text: "Contracted Service"}, {id: "delivery", text: "Delivery"},
		  	{id: "contact_requested", text: "Contact Requested"}, {id: "personalized_experience", text: "Personalized Experience"}, {id: "marketing", text: "Marketing"},
		  	{id: "marketing_thirdparties", text: "Marketing Third Parties"}, {id: "sharing_for_delivery", text: "Sharing for Delivery"}, {id: "sharing_for_marketing", text: "Sharing for Marketing"},
		  	{id: "3rd_party_sharing_for_corefunction", text: "3rd Party Sharing for Core Function"}, {id: "legally_required_data_retention", text: "Legally Required Data Retention"},
		  	{id: "required_by_law_enforcement_or_government", text: "Required by Law Enforcement or Government"}, {id: "protecting_your_health", text: "Protecting Your Heath"},
		  	{id: "protecting_our_interests", text: "Protecting Our Interests"}, {id: "improve_performance", text: "Improve Performance"}
		];
	var listSensitive = [
			{id: "biographical", text: "Biographical"}, {id: "contact", text: "Contact"}, {id: "biometric", text: "Biometric"},{id: "social_contact", text: "Social Contact"},
			{id: "network", text: "Network/Service"}, {id: "health", text: "Health"}, {id: "financial", text: "Financial"}, {id: "officialId", text: "Official ID"},
			{id: "social_benefit", text: "Social Benefit Data"}, {id: "judicial", text: "Judicial Data"}, {id: "asset", text: "Asset Data"}, {id: "hr", text: "HR Data"},
			{id: "mental_health", text: "Mental Health"}, {id: "membership", text: "Membership"},{id: "behavioral", text: "Behavioral"}, {id: "profiling", text: "Profiling"}
		];

	var createOwn = function(term, data){
			if($(data).filter(function(){
				return this.text.localeCompare(term) === 0;
			}).length === 0){
				return {
					id: term,
					text: term
				};
			};
		};

	function initDropdown(purposeItem, sensitiveItem){
		purposeItem = purposeItem || $(".purpose_item");
		sensitiveItem = sensitiveItem || $(".pi_sensitive");
		purposeItem.select2({
			createSearchChoice: createOwn,
			placeholder: "Choose or enter your own purpose",
			multiple: false,
		  	data: listPurpose,
			searchInputPlaceholder: "--Add your own and Enter here--"
		});

		sensitiveItem.select2({
			createSearchChoice: createOwn,
			placeholder: "Select or enter new PI category",
			multiple: true,
			data: listSensitive
		})
	}

	function getPurposeList(){
		listPurposeData = [];
		$(".purpose_list .purpose").each(function(item){
			var purpose = [];
			//service name
			purpose[0] = $(this).find("input[type='text']").val();
			//purpose
			purpose[1] = $(this).find(".purpose_item").select2("val");
			//attribute
			pi = $(this).find(".pi_sensitive").select2("val");
			purpose = purpose.concat(pi);
			listPurposeData.push(purpose);
		})
		return listPurposeData;
	}

	function makeSharingDropdown(){
		$("#sharing").select2({
			placeholder: "Choose category",
			multiple: true,
		  	data: []
		});

		$("#sharing_purpose").select2({
			placeholder: "Choose purpose",
			multiple: false,
		  	data: []
		});
	}

	function updateSharingDropdown(id, type){
		var temp = $(id).select2("val"); //current selected

		var data = [];
		var haveValue = false;
		var dataList = getPurposeList();
		for(var i = 0; i < dataList.length; i++){
			if(type == "purpose"){
				data.push(dataList[i][1]);
			}else{
				dataList[i].splice(0,2);
				data = data.concat(dataList[i]);
			}
		}

		if(temp instanceof Array){
			for(var l = temp.length -1; l >= 0; l--){
				if(data.indexOf(temp[l]) < 0){
					temp.splice(l, 1);
				}
			}
		}else{
			var idx = data.indexOf(temp);
			if(idx < 0){
				temp = null;
			}
		}

		array = type == "purpose" ? listPurpose: listSensitive
		for(var k = 0; k < data.length; k++){
			var result = $.grep(array, function(e){ return e.id == data[k]; });
			if(result.length > 0){
				data[k] = result[0];
			}
			else{
				data[k] = {id: data[k], text: data[k]};
			}
			//check if selected value
			if(data[k].id == temp){
				haveValue = true;
				break;
			}
		}

		$(id).select2("destroy").select2({
			placeholder: "Choose " + type,
			multiple: (type != "purpose"),
		  	data: data,
		});
		if(temp){
			$(id).select2("val", temp)
		}
	}


	//init event
	$('#purpose').on('click',function(event){
		event.preventDefault();

		var $purpose = $('#purpose_template .purpose').clone();
		$('.purpose_list').append($purpose);

		initDropdown($purpose.find(".purpose_item"), $purpose.find(".pi_sensitive"));

		//init event
		$purpose.find(".purpose_item").on("change", function(e){
			console.log("change");
			updateSharingDropdown("#sharing_purpose", "purpose");
		})
		$purpose.find(".pi_sensitive").on("change", function(e){
			console.log("change");
			updateSharingDropdown("#sharing", "category");
		})
	});

	$("input#on_sensitive").on('change', function(event){
		var check = $(this).is(":checked");
		$("#options").css("display", check?"block":"none");
	});

	$("input#other").on('change', function(event){
		var check = $(this).is(":checked");
		$("#other_pi").prop("disabled", !check);
	});

	$(document).on('click', '.close', function(event) {
		event.preventDefault();
		
		$(event.currentTarget.parentElement.parentElement).remove();
		
	});

	function initData(){
		var timestamp = Math.floor(Date.now()/1000);
		$("#timestamp").val(timestamp);
		$.get(HOST + "/token", function(data){
			$("#uniqueID").val(data);
		});
		initDropdown();
		makeSharingDropdown();
	}

	function serializeForm(){
		var data = $("#consent_form").serializeObject();
		data.data_controller.on_behalf = (data.data_controller.on_behalf == 'true');
		return data;
	}

	function getSensitiveInformation(){
		var sensitiveList = [];
		if($("input#on_sensitive").is(":checked")){
			$.each($("input[name='sensitive_options']:checked"), function() {
			  	sensitiveList.push($(this).val());
			});
		}
		if($("input#other").is(":checked")){
			sensitiveList.push($("#other_pi").val());
		}
		return sensitiveList;
	}

	function getSharingInformation(){
		var sharing = {};
		sharing.sharing = $("#sharing").select2("val");
		sharing.party_name = $("#forparty").val();
		sharing.purpose = $("#sharing_purpose").select2("val");
		return sharing;
	}

	$('#submit').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $(".receipt").offset().top - 55
		}, 1000);

		postData = serializeForm();
		postData.purpose = getPurposeList();
		postData.sensitive = getSensitiveInformation();
		postData.sharing = getSharingInformation();

		$.ajax({
			type: "POST",
			url: HOST + "/mvcr",
			data: JSON.stringify(postData),
			contentType : "application/json", 
			success: function (data) {
				console.log("SUCCESS: ", data);
				var receipt = new Blob([data], {type: "application/jwt"});
				var url  = URL.createObjectURL(receipt);
				var segments = data.split('.');
				var payloadSeg = segments[1];

				var payload = b64utos(payloadSeg);
				var opayload = JSON.parse(payload);
				console.log(opayload);

				$("#rjurisdiction").html(opayload.jurisdiction);
				$("#rsub").html(opayload.sub);
				$("#rnotice").html(opayload.notice);
				$("#rpolicy_uri").html(opayload.policy_uri);
				$("#rdata_controller_on_behalf").html((opayload.data_controller['on_behalf'] ? 'yes' : 'no'));
				$("#rdata_controller_contact").html(opayload.data_controller['contact']);
				$("#rdata_controller_company").html(opayload.data_controller['company']);
				$("#rdata_controller_address").html(opayload.data_controller['address']);
				$("#rdata_controller_email").html(opayload.data_controller['email']);
				$("#rdata_controller_phone").html(opayload.data_controller['phone']);
				$('#rpurpose').empty();
				if (opayload.purpose.length > 0) {
					$.each(opayload.purpose, function(index, value) {
						$("#rpurpose").append('Service Name: <span>' + (value[0] || "None") + '</span><br>');
						$("#rpurpose").append('Purpose: <span>' + (value[1] || "None") + '</span><br>');
						value.splice(0,2);
						if(value.length > 0){
							$("#rpurpose").append('PI Category: <span>' + value + '</span><br>');
						}else{
							$("#rpurpose").append('PI Category: <span>None</span><br>');
						}
						$("#rpurpose").append('<br>');
					});
				} else {
						$("#rpurpose").append('<p>None</p>');
				}

				$('#rsensitive').empty();
				if (opayload.sensitive.length > 0) {
					$.each(opayload.sensitive, function(index, value) {
						$("#rsensitive").append('<p>' + value + '</p>');
					});
				} else {
					$("#rsensitive").append('<p>None</p>');
				}


				if (opayload.sharing) {
					if(opayload.sharing.sharing.length > 0){
						$("#rsharing_data").html(opayload.sharing.sharing.join(" ," ));	
					}else{
						$("#rsharing_data").html("None");	
					}
					
					$("#rsharing_name").html(opayload.sharing.party_name);

					$("#rsharing_purpose").html(opayload.sharing.purpose || "None purpose");
				} else {
					$("#rsharing").append('<p>None</p>');
				}
				
				$("#rmoc").html(opayload.moc);
				$("#rscope").html(opayload.scopes);
				$("#riss").html(opayload.iss);
				var iat = opayload.iat*1000;
				iat = new Date(iat);
				$("#riat").html(iat);
				$("#rjti").html(opayload.jti);


				$("#rhidden").show("slow");
				$("#receipt").hide("slow");

				$("#receiptdl a").attr('href', url);
				$("#receiptdl a").attr('disabled', false);

				//
				// check signature
				//
   
				// fetch key
				var jwt = data;
				$.ajax({
					type: "GET",
					url: HOST + "/jwk",
					data: "json",
					success: function(data) {
						console.log(data);
						var key = KEYUTIL.getKey(data.keys[0]); // there's only one key to parse
				
						// validate the JWT
						var isValid = KJUR.jws.JWS.verify(jwt, key);
						if (isValid) {
							$('#sig').removeClass('bg-warning');
							$('#sig').addClass('bg-success');
							$('#sig').html('<span class="glyphicon glyphicon-ok"></span> Receipt signature is valid.');
						} else {
							$('#sig').removeClass('bg-warning');
							$('#sig').addClass('bg-danger');
							$('#sig').html('<span class="glyphicon glyphicon-remove"></span> Receipt signature is invalid.');
						}
					},
					error: function() {
						$('#sig').removeClass('bg-warning');
						$('#sig').addClass('bg-danger');
						$('#sig').html('<span class="glyphicon glyphicon-warning-sign"></span> Unable to fetch key for receipt.');
					}
				});
   
			},
			error: function(data) {
				console.log(data);
				console.log("ERROR");
			}
		});

	});


	initData();
});

