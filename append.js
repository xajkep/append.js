function fill(element, entry, suffix="") {
    Object.entries(element).forEach(e => {
        const [key, value] = e;

        if (value instanceof Array) {
            var box = entry.find("."+key);
            append(box, value, key);
        } else {
            if (suffix === "") {
                target = "%"+key+"%";
            } else {
                target = "%"+suffix+"."+key+"%";
            }
            entry.html(entry.html().replaceAll(target, value));

            if (entry.attr("value") !== null) {
                entry.attr("value", entry.attr("value").replace(target, value));
            }
        }
    });
}

function append(id, data, suffix="") {
    if (typeof(id) == 'string') {
        var box = u(id);
    } else {
        var box = id;
    }

    if (box.length == 0) {
        console.error("can't found " + id);
        return;
    }

    var template = box.children(".template");

    if (template.length == 0) {
        console.error("can't found children " + id + " .template");
        return;
    }


    if (data instanceof Array) {
        data.forEach(function (element) {
            var entry = template.clone();
            entry.removeClass("template");
            entry.addClass("active");
            entry.attr("disabled", false);
            fill(element, entry, suffix);
            box.append(entry);
        });
    } else {
        console.error("argument 'data' isn't an Array");
        return;
    }

    u(".active .close").on("click", function() {
        u(this).closest(".active").remove();
    })
}

function reset(id) {
    var box = u(id);
    box.find('.active').remove();
}