$(function(){$(".adminCheckboxRow").on("change",function(e){var n=$(this),t=n.closest("tr");n.is(":checked")?t.addClass("info"):t.removeClass("info")}),$(".adminCheckboxAll").on("change",function(){var e=$(this),n=$(".adminCheckboxRow");e.is(":checked")?n.not(":checked").each(function(e,n){this.checked=!0,$(this).trigger("change")}):n.filter(":checked").each(function(e,n){this.checked=!1,$(this).trigger("change")})})}),$(function(){$(document).delegate(".btn-delete","click",function(e){e.preventDefault();var n=$(this).closest("form");bootbox.confirm(window.Admin.Settings.lang.table["delete-confirm"],function(e){e&&n.submit()})}),bootbox.setDefaults("locale",window.Admin.Settings.locale)}),$(function(){$(document).delegate('*[data-toggle="lightbox"]',"click",function(e){e.preventDefault(),$(this).ekkoLightbox({always_show_close:!1})})}),$(function(){$(".input-date").each(function(){var e=$(this);e.datetimepicker({locale:window.Admin.Settings.locale}).trigger("dp.change").on("dp.change",function(){e.change()})})}),$(function(){$(".input-select").select2()}),$(function(){$(".imageUpload").each(function(e,n){var t=$(n),i=t.closest(".form-group"),a=t.find(".errors"),o=t.find(".no-value"),c=t.find(".has-value"),s=t.find(".thumbnail img.has-value"),l=t.find(".imageValue"),d=new Flow({target:t.data("target"),testChunks:!1,chunkSize:1073741824,query:{_token:t.data("token")}});d.assignBrowse(t.find(".imageBrowse"),!1,!0),d.on("filesSubmitted",function(e){d.upload()}),d.on("fileSuccess",function(e,n){d.removeFile(e),a.html(""),i.removeClass("has-error");var t=$.parseJSON(n);s.attr("src",t.url),c.find("span").text(t.value),l.val(t.value),o.addClass("hidden"),c.removeClass("hidden")}),d.on("fileError",function(e,n){d.removeFile(e);var t=$.parseJSON(n),o="";$.each(t,function(e,n){o+='<p class="help-block">'+n+"</p>"}),a.html(o),i.addClass("has-error")}),t.find(".imageRemove").click(function(){l.val(""),o.removeClass("hidden"),c.addClass("hidden")})})}),$(function(){$(".imageUploadMultiple").each(function(e,n){var t=$(n),i=t.closest(".form-group"),a=t.find(".form-group"),o=t.find(".errors"),c=t.find(".imageValue"),s=new Flow({target:t.data("target"),testChunks:!1,chunkSize:1073741824,query:{_token:t.data("token")}}),l=function(){var e=[];t.find("img[data-value]").each(function(){e.push($(this).data("value"))}),c.val(e.join(","))};s.assignBrowse(t.find(".imageBrowse")),s.on("filesSubmitted",function(e){s.upload()}),s.on("fileSuccess",function(e,n){s.removeFile(e),o.html(""),i.removeClass("has-error");var t=$.parseJSON(n);a.append('<div class="col-xs-6 col-md-3 imageThumbnail"><div class="thumbnail"><img data-value="'+t.value+'" src="'+t.url+'" /><a href="#" class="imageRemove">Remove</a></div></div>'),l()}),s.on("fileError",function(e,n){s.removeFile(e);var t=$.parseJSON(n),a="";$.each(t,function(e,n){a+='<p class="help-block">'+n+"</p>"}),o.html(a),i.addClass("has-error")}),t.on("click",".imageRemove",function(e){e.preventDefault(),$(this).closest(".imageThumbnail").remove(),l()}),a.sortable({onUpdate:function(){l()}})})}),window.Admin.Components.add("ckeditor",function(){CKEDITOR.disableAutoInline=!0,switchOn_handler=function(e,n){var t=$("#"+e).hide(),n=$.extend({height:200},t.data(),n);return editor=CKEDITOR.replace(e,n)},switchOff_handler=function(e,n){e.destroy()},exec_handler=function(e,n,t,i){switch(n){case"insert":e.insertText(i);break;case"changeHeight":e.resize("100%",i)}},window.Admin.WYSIWYG.add("ckeditor",switchOn_handler,switchOff_handler,exec_handler)}),$(function(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$('form[data-type="display-actions"]').on("submit",function(e){var n=$(this),t=$(e.target.action),i=$(".adminCheckboxRow").filter(":checked");i.length||e.preventDefault(),this.action=t.data("action"),this.method=t.data("method"),i.each(function(){n.append('<input type="hidden" name="id[]" value="'+$(this).val()+'" />')})}),$(".inline-editable").editable(),window.Admin.Components.init(),window.Admin.Controllers.call()});