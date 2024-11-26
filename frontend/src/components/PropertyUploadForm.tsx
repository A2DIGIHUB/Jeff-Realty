import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDropzone } from 'react-dropzone';

interface PropertyFormValues {
  title: string;
  description: string;
  address: string;
  price: number;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  images: File[];
}

const PropertyUploadForm: React.FC = () => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    address: Yup.string().required('Address is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    propertyType: Yup.string().required('Property type is required'),
    bedrooms: Yup.number().required('Number of bedrooms is required').min(0),
    bathrooms: Yup.number().required('Number of bathrooms is required').min(0),
    squareFootage: Yup.number().required('Square footage is required').positive(),
  });

  const formik = useFormik<PropertyFormValues>({
    initialValues: {
      title: '',
      description: '',
      address: '',
      price: 0,
      propertyType: '',
      bedrooms: 0,
      bathrooms: 0,
      squareFootage: 0,
      images: [],
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          if (key !== 'images') {
            formData.append(key, String(values[key as keyof PropertyFormValues]));
          }
        });
        
        values.images.forEach((image) => {
          formData.append('images', image);
        });

        // TODO: Replace with your API endpoint
        const response = await fetch('/api/properties', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          alert('Property uploaded successfully!');
          formik.resetForm();
        } else {
          throw new Error('Failed to upload property');
        }
      } catch (error) {
        console.error('Error uploading property:', error);
        alert('Failed to upload property. Please try again.');
      }
    },
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    onDrop: (acceptedFiles) => {
      formik.setFieldValue('images', [...formik.values.images, ...acceptedFiles]);
    },
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Upload Property</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              {...formik.getFieldProps('title')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {formik.touched.title && formik.errors.title && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.title}</div>
            )}
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              {...formik.getFieldProps('price')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {formik.touched.price && formik.errors.price && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.price}</div>
            )}
          </div>

          <div>
            <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">
              Property Type
            </label>
            <select
              id="propertyType"
              {...formik.getFieldProps('propertyType')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
            </select>
            {formik.touched.propertyType && formik.errors.propertyType && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.propertyType}</div>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              {...formik.getFieldProps('address')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {formik.touched.address && formik.errors.address && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.address}</div>
            )}
          </div>

          <div>
            <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">
              Bedrooms
            </label>
            <input
              type="number"
              id="bedrooms"
              {...formik.getFieldProps('bedrooms')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {formik.touched.bedrooms && formik.errors.bedrooms && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.bedrooms}</div>
            )}
          </div>

          <div>
            <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">
              Bathrooms
            </label>
            <input
              type="number"
              id="bathrooms"
              {...formik.getFieldProps('bathrooms')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {formik.touched.bathrooms && formik.errors.bathrooms && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.bathrooms}</div>
            )}
          </div>

          <div>
            <label htmlFor="squareFootage" className="block text-sm font-medium text-gray-700">
              Square Footage
            </label>
            <input
              type="number"
              id="squareFootage"
              {...formik.getFieldProps('squareFootage')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {formik.touched.squareFootage && formik.errors.squareFootage && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.squareFootage}</div>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            {...formik.getFieldProps('description')}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {formik.touched.description && formik.errors.description && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.description}</div>
          )}
        </div>

        <div>
          <div {...getRootProps()} className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <input {...getInputProps()} />
                <p className="pl-1">Drag and drop images here, or click to select files</p>
              </div>
            </div>
          </div>
          {formik.values.images.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {formik.values.images.map((file, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index + 1}`}
                    className="h-24 w-24 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    className="absolute -top-2 -right-2 rounded-full bg-red-500 text-white p-1"
                    onClick={() => {
                      const newImages = formik.values.images.filter((_, i) => i !== index);
                      formik.setFieldValue('images', newImages);
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Upload Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyUploadForm;
