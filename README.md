
# append.js

**append.js** provides a simple function `append()` to help you in common HTML clone / append operations.

## Usage

Add an `id` to your box that will contain your elements and the class `template` to the element that will be cloned.

Then use `%variableName%` where you want to inject your variables.

(Support embeded data)

## Examples

~~~html
<style>
    .template {
        display: none;
    }
</style>

<div id="box">
    <div class="template">
        <a href="/get/%id%">
            %name%
        </a>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/umbrellajs"></script>
<script src="./append.js"></script>
<script>
    var data = [{"name": "Bob", "id": 0}, {"name": "John", "id": 1}];
    append("#box", data);
</script>
~~~

~~~html
<div id="box">
    <div class="template">
        <a href="/get/%id%">
            %name%
        </a>
    </div>
    <div class="">
        <a href="/get/0">
            Bob
        </a>
    </div>
    <div class="">
        <a href="/get/1">
            John
        </a>
    </div>
</div>
~~~~

[More examples](example.html)
