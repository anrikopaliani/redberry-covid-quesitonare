import { useForm } from 'react-hook-form';
import { useYupValidationResolver } from '@/hooks';
import { CovidPoliticsFormValidation } from '@/schemas';

const RADIO_OPTIONS = [
  { label: 'კვირაში ორჯერ', value: 'twice_a_week' },
  { label: 'კვირაში ერთხელ', value: 'once_a_week' },
  { label: 'ორ კვირაში ერთხელ', value: 'once_every_two_weeks' },
  { label: 'თვეში ერთხელ', value: 'once_a_month' },
];

const RADIO_OPTIONS_2 = [
  { label: '0', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
];

const useCovidPoliticsForm = () => {
  const resolver = useYupValidationResolver(CovidPoliticsFormValidation);
  const form = useForm({
    resolver,
    defaultValues: {
      non_formal_meetings: '',
      number_of_days_from_office: '',
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data) => console.log(data);

  return {
    form,
    handleSubmit,
    errors,
    onSubmit,
    RADIO_OPTIONS,
    RADIO_OPTIONS_2,
  };
};

export default useCovidPoliticsForm;