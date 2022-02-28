Vue.component('format',
{
    template: '#Format',

    methods:
    {
        next: function()
        {
            myVueCatalog.pageN = 'Spisok';
        },

        back: function()
        {
            myVueCatalog.pageN = 'NForm';
        },
    }
})
