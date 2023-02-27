import { Typography, TextField, FormControlLabel, Checkbox, Button, Box } from '@mui/material';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// Define an array of options for the dropdown
const typeOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export default function CalendarMain() {
    const [formData, setFormData] = useState({
        type: '',
        name: '',
        detail: '',
        reminder: false,
        date: null
    });

    const handleChange = (event) => {
        const { name, value, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: name === 'reminder' ? checked : value,
        }));
    };

    const handleDateChange = (value) => {
        const date = value.format('MM/DD/YYYY')
        setFormData((prevState) => ({ ...prevState, date }));
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Add logic to save the form data to calendar
    };  

    return (
            <>
                <Typography variant="h4" gutterBottom>
                    {' Set Reminder'}
                </Typography>
                <form onSubmit={handleSubmit}>
                        <div className='flex flex-col w-50'>
                            <TextField
                                required
                                name="name"
                                label="Name"
                                value={formData.name}
                                onChange={handleChange}
                                margin="normal"
                                />
                            <FormControl required margin="normal">
                                <InputLabel id="type-label">Type</InputLabel>
                                <Select
                                    labelId="type-label"
                                    id="type"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                >
                                {typeOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Date"
                                    value={formData.date}
                                    onChange={handleDateChange}
                                    renderInput={(params) => <TextField fullWidth {...params} />}
                                />
                            </LocalizationProvider>
                            <TextField
                                name="detail"
                                label="Detail"
                                value={formData.detail}
                                onChange={handleChange}
                                margin="normal"
                                multiline
                                rows={4}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={formData.reminder} onChange={handleChange} name="reminder" />}
                                label="Reminder"
                            />
                            <Button type="submit" variant="contained" sx={{ mt: 3 }}>
                                Save
                            </Button>
                        </div>
                </form>
            </>
        );
}