import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, InputField } from '../form-control';
import queries from '@/services/queries/election';

const validationSchema = Yup.object().shape({
  description: Yup.string(),
  name: Yup.string().required('Please enter the election name'),
  startDate: Yup.date().required('Please enter the start date'),
  endDate: Yup.date()
    .required('End date is required')
    .test(
      'is-at-least-one-day-after',
      'End date must be at least one day after the start date',
      function (value) {
        const startDate = this.resolve(Yup.ref('startDate')) as string;
        const endDate = value;
        if (startDate && endDate) {
          const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
          const timeDifference = new Date(endDate).getTime() - new Date(startDate).getTime();
          return timeDifference >= oneDayInMilliseconds;
        }
        return true;
      }
    ),
});

const initialValues = {
  description: '',
  name: '',
  startDate: new Date().toISOString().split('T')[0],
  endDate: '',
};

interface IProps {
  handleSuccess: () => void;
}

type InitialValues = ReturnType<() => typeof initialValues>;

const CreateElection = (props: IProps) => {
  const { handleSuccess } = props;
  const { mutate, isLoading, isSuccess } = queries.create();

  const onSubmit = (values: InitialValues) => {
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess) {
      handleSuccess();
    }
  }, [isSuccess]);

  return (
    <div className="voting__app__admin__create w-100">
      <div className="title mb-3">
        <h3>New Election</h3>
      </div>

      <div className="form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => {
            const { values, handleChange, handleBlur, handleSubmit, errors, touched } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div className="d-flex gap-5">
                  <div className="my-2 w-100">
                    <InputField
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Election Name"
                      label="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                    />
                  </div>

                  <div className="my-2 w-100">
                    <InputField
                      name="description"
                      type="description"
                      id="description"
                      placeholder="Enter a short description"
                      label="Description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                </div>

                <div className="d-flex gap-5">
                  <div className="my-2 w-100">
                    <InputField
                      name="startDate"
                      type="date"
                      id="startDate"
                      label="Start Date"
                      value={values.startDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="my-2 w-100">
                    <InputField
                      name="endDate"
                      type="date"
                      id="endDate"
                      label="End Date"
                      value={values.endDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                      min={
                        new Date(new Date().setDate(new Date(values.startDate).getDate() + 1))
                          .toISOString()
                          .split('T')[0]
                      }
                    />
                  </div>
                </div>

                <div className="d-flex">
                  <div className="my-4 mt-5">
                    <Button
                      title="Create Election"
                      color="green"
                      type="submit"
                      isLoading={isLoading}
                    />
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default CreateElection;
