import { Table, ListColumn, RadioColumn, StringColumn, ChoiceColumn, ScriptColumn, BooleanColumn, ConditionsColumn, DecimalColumn, 
    IntegerColumn, VersionColumn, DomainIdColumn, FieldNameColumn, ReferenceColumn, TableNameColumn, UserRolesColumn, BasicImageColumn, DocumentIdColumn, DomainPathColumn, TranslatedTextColumn, SystemClassNameColumn, TranslatedFieldColumn, GenericColumn, 
    DateColumn, DateTimeColumn, CalendarDateTime, BasicDateTimeColumn, DueDateColumn, CalendarDateTime, IntegerDateColumn, ScheduleDateTimeColumn, and OtherDateColumn } from '@servicenow/sdk/core'




export const x_1644142_new_ide_sample_table = Table({
    name: 'x_1644142_new_ide_sample_table',
    schema: {
        deadline: DateColumn({ label: 'deadline' }),
        state: StringColumn({
            label: 'State',
            choices: {
                ready: { label: 'Ready' },
                completed: { label: 'Completed' },
                in_progress: { label: 'In Progress' },
            },
        }),
        task: StringColumn({ label: 'Task', maxLength: 120 }),
    },
})