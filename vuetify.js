import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { VBadge, VIcon, VAvatar, VSelect, VTooltip, VBtn, VCheckbox, VTextField, VAlert, VRadio } from 'vuetify/components';
import { VDataTable } from "vuetify/labs/VDataTable";
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    components: { VDataTable, VBadge, VIcon, VAvatar, VSelect, VTooltip, VBtn, VCheckbox, VTextField, VAlert, VRadio },
    directives,
});