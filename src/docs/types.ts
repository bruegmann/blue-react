export interface IComponent {
    description?: string;
    displayName?: string;
    methods?: any;
    exampleCode?: string;
    props: {
        hideToggleAction?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        navItemClassName?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        className?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        href?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        icon?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        label?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        checked?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        onChange?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        children?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        featured?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        open?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        onToggle?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        break?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        containerClass?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        hasActions?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        mirrored?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        src?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        content?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        mimeType?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        showDocumentLabel?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        light?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        expandSidebar?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        hideSidebarMenu?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        pages?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        unrouteable?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        disableTitleSet?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
        sidebarToggleIconComponent?: {
            type: { name: string },
            defaultValue: { computed: boolean, value: string },
            description: string,
            required: boolean,
        };
    };
}