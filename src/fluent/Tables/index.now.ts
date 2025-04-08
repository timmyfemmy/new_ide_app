import { Table, StringColumn, DateColumn } from '@servicenow/sdk/core'




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