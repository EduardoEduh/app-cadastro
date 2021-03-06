export const SupportedTypes = {
    //tipos dos dados do banco
    INTEGER: {
        value: 'INTEGER',
        type: 'INTEGER',
        default_value: null
    },
    LONG: {
        value: 'LONG',
        type: 'INTEGER',
        default_value: null
    },
    DOUBLE: {
        value: 'DOUBLE',
        type: 'REAL',
        default_value: null
    },
    TEXT: {
        value: 'TEXT',
        type: 'TEXT',
        default_value: null
    },
    BOOLEAN: {
        value: 'BOOLEAN',
        type: 'INTEGER',
        default_value: null
    },
    DATETIME: {
        value: 'DATETIME',
        type: 'TEXT',
        default_value: null
    },
    SYNC_STATUS: {
        value: 'STATUS',
        type: 'TEXT',
        default_value: null
    },
    JSON: {
        value: 'JSON',
        type: 'TEXT',
        default_value: null
    },
};

//Criação da estrutura da tabela
export const Tables = {
    cadastros: {
        id: {
            type: SupportedTypes.INTEGER,
            primary_key: true,
        },
        image:{
            type: SupportedTypes.TEXT,
            primary_key: false,
            default_value: null,
        },
        name: {
            type: SupportedTypes.TEXT,
            primary_key: false,
            default_value: null,
        },
        sobrenome: {
            type: SupportedTypes.TEXT,
            primary_key: false,
            default_value: null,
        },
        dataNascimento: {
            type: SupportedTypes.TEXT,
            primary_key: false,
            default_value: null,
        },
        email: {
            type: SupportedTypes.TEXT,
            primary_key: false,
            default_value: null,
        },
    },
};