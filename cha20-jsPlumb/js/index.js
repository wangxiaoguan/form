$(document).ready(function() {
    $(".deviceLeft .deviceLeft_box").children().draggable({
        helper: "clone",
        scope: "zlg",
    });
    var i = 0;
    $("#main").droppable({
        scope: "zlg",
        drop: function(event, ui) {
            var left = parseInt(ui.offset.left - $(this).offset().left);
            var top = parseInt(ui.offset.top - $(this).offset().top);
            var type = ui.draggable[0].dataset.type;

                i++;
                var id = "chart" + i;
                $(this).append(`<div class="node node${type}css" style="position: absolute" id="${id}" data-type="${type}" data-class="node${type}css" >${$(ui.helper).html() }</div>`);
                $("#" + id).css("left", left).css("top", top);
                jsPlumb.addEndpoint(id, {
                    anchors: "Top"
                },
                hollowCircle);
                jsPlumb.addEndpoint(id, {
                    anchors: "Right"
                },
                hollowCircle);
                jsPlumb.addEndpoint(id, {
                    anchors: "Bottom"
                },
                hollowCircle);
                jsPlumb.addEndpoint(id, {
                    anchors: "Left"
                },
                hollowCircle);
                jsPlumb.draggable(id);
                jsPlumb.makeTarget(id, {
                    anchor: "Continuous"
                }) 
                $("#" + id).draggable({
                    containment: "parent",
                    grid: [10, 10]
                });
                doubleclick("#" + id);
                
        }
    });
    var connectorPaintStyle = {
        lineWidth: 2,
        strokeStyle: "#61b8d0",
    };
    var connectorHoverStyle = {
        lineWidth: 2,
        strokeStyle: "green",
    };
    var paintStyle = {
        fillStyle: "#ccc",
        radius: 10,
        lineWidth: 6,
    }
    var hoverPaintStyle = {
        fillStyle: "#aaa",
    }
    var hollowCircle = {
        endpoint: ["Dot", {
            radius: 5
        }],
        connectorStyle: connectorPaintStyle,
        connectorHoverStyle: connectorHoverStyle,
        paintStyle: paintStyle,
        hoverPaintStyle: hoverPaintStyle,
        isSource: true,
        connector: ["Bezier", {
            stub: [40, 60],
            gap: 10,
            cornerRadius: 5,
            alwaysRespectStubs: true
        }],
        isTarget: true,
        maxConnections: -1,
        connectorOverlays: [["Arrow", {
            width: 10,
            length: 20,
            location: 1,
            id: "arrow"
        }], ["Custom", {
            create: function(component) {
                return $('<span style="background:#fff;position:relative;z-index:999;cursor:pointer;">单击输入</span>');
            },
            location: 0.5,
            id: "customOverlay",
        }], ],
    };
    $("#main").on("mouseenter", ".node",
    function() {
        $(this).append('<img src="./images/close2.png"  style="position:absolute;" />');
        var widthnum = $(this).css("width").substr(0, 5);
        if (widthnum < 60) {
            $("img").css("left", 67).css("top", -13);
        } else {
            $("img").css("left", 110).css("top", -10);
        }
    });
    $("#main").on("mouseleave", ".node",
    function() {
        $("img").remove();
    });
    $("#main").on("click", "img",
    function() {
        if (confirm("确定删除？")) {
            jsPlumb.removeAllEndpoints($(this).parent().attr("id"));
            $(this).parent().remove();
        }
    });
    $("#deviceRight").on("click", "._jsPlumb_overlay",
    function() {
        var that = $(this) 
        that.removeClass('_jsPlumb_overlay') 
        var text = that.text();
        that.html("");
        that.append('<input type="text" id="myDropDown" value="' + text + '" />');
        $('#myDropDown').blur(function() {
            that.html($("#myDropDown").val());
            that.addClass('_jsPlumb_overlay')
        });
        return false
    });
    jsPlumb.bind("dblclick",
    function(conn, originalEvent) {
        if (confirm("纭畾鍒犻櫎姝よ繛绾垮悧锛�")) jsPlumb.detach(conn);
    });
    function doubleclick(id) {
        $(id).dblclick(function() {
            var text = $(this).text();
            $(this).html("");
            $(this).append('<input style="width:100%" type="text" class="note" value="' + text + '" />');
            $(this).mouseleave(function() {
                $(this).html($(".note").val());
            });
        });
    }
    jsPlumb.bind('beforeDrop',
    function(info) {
        if (info.sourceId == info.targetId) {
            return false
        }
        return true
    }) 
    $('.btn1').click(function() {
        var ojson = {
            node: [],
            line: [],
        }
        
        $("#main .node").each(function(idx, elem) {
            var $elem = $(elem);
            var param = {
                class: $elem.data('class'),
                divId: $elem.attr('id'),
                name: $elem[0].innerText,
                positionX: parseInt($elem.css("left"), 10),
                positionY: parseInt($elem.css("top"), 10),
                type: $elem.data('type')
            }
            ojson.node.push(param)
        });
        $.each(jsPlumb.getConnections(),
        function(idx, connection) {
            console.log(idx,connection)
            var param = {
                connectionId: connection.id,
                pageSourceId: connection.sourceId,
                pageTargetId: connection.targetId
            }
            ojson.line.push(param)
        });
        ojson = JSON.stringify(ojson) 
        console.log(ojson)
    })
})