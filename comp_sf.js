Vue.component('selectf',
{
    template: '#selectfile',

    methods:
    {
        readFile: function(e)
        {
            var vm = this;
            var file = e.target.ownerDocument.getElementById('file').files[0];

            var reader = new FileReader();
            reader.onload = function()
            {
                vm.$root.fileData = JSON.parse(reader.result);
            }
            reader.readAsText(file);
        },

        next: function()
        {
            myVueCatalog.pageN = 'NForm';
        },
    }
})
