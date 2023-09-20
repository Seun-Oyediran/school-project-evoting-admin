import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, InputField, Select } from '../form-control';
import { states } from '@/assets';
import { calculateAge } from '@/utils';
import queries from '@/services/queries/candidate';
import { useParams } from 'next/navigation';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Please enter first name'),
  lastName: Yup.string().required('Please enter last name'),
  state: Yup.string().required('Please select state of orign'),
  gender: Yup.string().required('Please select your gender'),
  dob: Yup.date()
    .required('Please enter your date of birth')
    .test('age', 'You must be at least 18 years old', function (val) {
      return calculateAge(new Date(val)) >= 18;
    }),
});

const initialValues = {
  lastName: '',
  firstName: '',
  state: '',
  gender: '',
  dob: '',
};

interface IProps {
  handleSuccess: () => void;
}

type InitialValues = ReturnType<() => typeof initialValues>;

const CreateCandidate = (props: IProps) => {
  const { handleSuccess } = props;
  const params = useParams();
  const { mutate, isLoading, isSuccess } = queries.create();

  const onSubmit = (values: InitialValues) => {
    mutate({ ...values, electionId: params.id });
  };

  useEffect(() => {
    if (isSuccess) {
      handleSuccess();
    }
  }, [isSuccess]);

  return (
    <div className="voting__app__admin__create w-100">
      <div className="title mb-3">
        <h3>New Candidate</h3>
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
                      name="firstName"
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      label="First Name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                    />
                  </div>

                  <div className="my-2 w-100">
                    <InputField
                      name="lastName"
                      type="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      label="Last Name"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                </div>

                <div className="d-flex gap-5">
                  <div className="my-2 w-100">
                    <Select
                      name="state"
                      id="state"
                      label="State of Origin"
                      options={states}
                      optionLabel="name"
                      optionValue="id"
                      disabledValue="Select state of origin"
                      value={values.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                    />
                  </div>

                  <div className="my-2 w-100">
                    <Select
                      name="gender"
                      id="gender"
                      label="Gender"
                      options={['Male', 'Female']}
                      disabledValue="Select your gender"
                      value={values.gender}
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
                      name="dob"
                      type="date"
                      id="dob"
                      placeholder="Enter Date of Birth"
                      label="Date of Birth"
                      value={values.dob}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                    />
                  </div>

                  <div className="my-2 w-100"></div>
                </div>

                <div className="d-flex">
                  <div className="my-4 mt-5">
                    <Button
                      title="Add Candidate"
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

export default CreateCandidate;
