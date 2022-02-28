Vue.component('noform',
{
    template: '#noFormat',
        
    methods:
    {
        next: function()
        {
            myVueCatalog.pageN = 'Form';
        },

        back: function()
        {
            myVueCatalog.pageN = 'fSelect';
        },

    }
})
