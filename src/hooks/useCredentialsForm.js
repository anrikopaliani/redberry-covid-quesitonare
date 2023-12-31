import { useContext } from 'react';
import { FormContext } from '@/store';
import { useForm, useWatch } from 'react-hook-form';
import useYupValidationResolver from './useYupValidationResolver';
import { UserCredentialsFormValidation } from '@/schemas';
import { useStoredValues, usePersistData } from '@/hooks';
import { useNavigate } from 'react-router-dom';

const useCredentialsForm = () => {
  const resolver = useYupValidationResolver(UserCredentialsFormValidation);
  const getStoredValues = useStoredValues({
    first_name: '',
    last_name: '',
    email: '',
  });

  const { setFormData } = useContext(FormContext);

  const form = useForm({
    mode: 'all',
    resolver,
    defaultValues: getStoredValues,
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const first_name = useWatch({ control, name: 'first_name' });
  const last_name = useWatch({ control, name: 'last_name' });
  const email = useWatch({ control, name: 'email' });

  usePersistData({ first_name, last_name, email }, [
    first_name,
    last_name,
    email,
  ]);

  const navigate = useNavigate();
  const onSubmit = (data) => {
    setFormData((prevState) => ({ ...prevState, ...data }));
    navigate('/covid');
  };

  return [form, handleSubmit, errors, onSubmit];
};

export default useCredentialsForm;
