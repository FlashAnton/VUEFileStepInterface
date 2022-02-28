Vue.component('nspis',
{
    template: '#Spisok',

    props:
    {
        data: '',
    },

    data: function()
    {
        return {
            selected: '',
        }
    },

    methods:
    {
        back: function()
        {
            myVueCatalog.pageN = 'Form';
        },
    }
})
