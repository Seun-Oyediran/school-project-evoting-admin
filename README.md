# Admin Guide

## Introduction to the Admin Section

Welcome to the Admin Guide for **Voting App**. This section is dedicated to administrators and election managers who play a pivotal role in overseeing and managing the platform's operations.

As an administrator of **Voting App**, your responsibilities include:

- **Creating Elections**: You have the authority to set up new elections and define their details.

- **Managing Candidates**: You can create and add candidates to elections, ensuring that the platform provides a comprehensive selection for voters.

This guide is designed to assist you in performing these critical administrative tasks effectively. Whether you are setting up a new election, adding candidates, or addressing other administrative functions, you will find step-by-step instructions and valuable information within this guide.

Please refer to the table of contents to navigate to the specific task you need to accomplish. If you have any questions or require further assistance while fulfilling your administrative role on **Voting App**, our support team is here to provide the help you need. We are committed to supporting you in maintaining the functionality and integrity of the platform.

## Purpose of Documentation

This documentation is designed to assist both end-users and developers in effectively using and understanding the features of **Voting app**. Whether you're a voter looking to participate in elections or a developer interested in contributing to or customizing the platform, you'll find valuable information here.

# Prerequisites

Before you can start using or contributing to **Voting App**, please ensure that you have the following prerequisites installed on your system:

1. **Node.js**: You'll need Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

2. **Package Manager (npm or yarn)**: npm (Node Package Manager) comes bundled with Node.js. Alternatively, you can use Yarn as your package manager. Install Yarn from [yarnpkg.com](https://yarnpkg.com/) if you prefer it over npm.

# Installation

Follow these steps to set up and run **Voting App** locally:

1. **Clone the Repository**: git clone https://github.com/Seun-Oyediran/school-project-evoting-admin.git

2. **Navigate to the Project Directory**: cd

3. **Install Dependencies**: npm install or if you're using Yarn yarn install

4. **Configuration**:

- Depending on your use case, you might need to configure environment variables, database connections, or other settings.

5. **Start the Development Server**: npm run dev or with Yarn yarn dev

6. **Access the Application**:

Open your web browser and go to [localhost:3000](http://localhost:3000). You should see **Voting App** up and running.

**Next Steps**

Now that you have **Voting App** running locally, you can start exploring its features. Refer to the "User Guide" section for instructions on using the platform as a voter, or check the "Developer Guide" if you're interested in contributing to or customizing the platform.

Feel free to reach out if you encounter any issues or have questions. We're here to help you make the most of **Voting App**.

# User Guide

## Introduction to the User Guide

Welcome to the User Guide for **Voting App**, your gateway to participating in elections and making your voice heard. Whether you're here to cast your vote, explore election details, or view election results, this guide will walk you through the steps to ensure a seamless experience.

The User Guide is designed to assist voters in making the most of **Voting App**. From creating an account to casting your vote and viewing election results, you'll find detailed instructions and helpful tips to guide you through every step of the process.

Please use the table of contents to navigate to the specific task you want to accomplish. If you encounter any questions or need assistance while using **Voting App**, our support team is here to help you. We're dedicated to ensuring that your voting experience is straightforward and secure.

## Table of Contents

1. [Creating Elections](#creating-elections)
2. [Creating and Adding a Candidate](#creating-and-adding-a-candidate)
3. [Viewing Voter Analytics](#viewing-voter-analytics)

## Creating Elections

If you are an administrator or an authorized user with the privilege to create elections on **Voting App**, follow these steps to set up a new election:

1. **Access the Dashboard**:

   - Option 1: On the dashboard (http://localhost:3000/dashboard), click the "New Election" button.
   - Option 2: Navigate to the elections page by clicking "Elections" on the sidebar. Then, on the elections page, click the "New Election" button.

2. **Complete the Election Form**:

   - A modal will pop up, containing a form with the following required fields:
     - **Name**: Enter a name for the election.
     - **Description**: Provide a brief description of the election.
     - **Start Date**: Select a start date for the election. The start date cannot be before the current date.
     - **End Date**: Choose an end date for the election. The end date must be at least one day after the start date.

3. **Create the Election**:

   - After filling in the required information, click the "Create Election" button.

4. **Confirmation**:
   - Your newly created election will now be displayed on the elections page.

Congratulations! You have successfully created an election on **Voting App**. Users can now view and participate in the election. If you have additional administrative tasks or questions, please refer to the respective sections in this guide or contact us for assistance.

## Creating and Adding a Candidate

To add a candidate to an election on **Voting App**, follow these steps:

1. **Access the Elections Page**:

   - Navigate to the elections page by clicking "Elections" on the sidebar.

2. **Select an Election**:

   - Scroll through the list of elections on the page and locate the one to which you want to add a candidate.
   - Click the "View" button at the bottom of the election card. This will take you to a page displaying the election details and existing candidates (if any).

3. **Add a Candidate**:

   - On the election details page, click the "Add Candidate" button located at the top corner of the page. This action will open a modal with a candidate creation form.

4. **Complete the Candidate Form**:

   - Fill out the candidate information in the form. The following fields are required:
     - **First Name**: Enter the candidate's first name.
     - **Last Name**: Provide the candidate's last name.
     - **State of Origin**: Specify the candidate's state of origin.
     - **Gender**: Select the candidate's gender from the available options.
     - **Date of Birth**: Enter the candidate's date of birth. The candidate must be above 18 years of age.

5. **Add Candidate**:

   - After filling in the required candidate information, click the "Add Candidate" button within the modal.

6. **Confirmation**:
   - The newly created candidate will now be displayed among the candidates for the selected election.

Congratulations! You have successfully added a candidate to the election on **Voting App**. Users can now view and choose this candidate when participating in the election. If you have any more candidates to add or further administrative tasks to perform, you can continue following these steps or refer to the relevant sections in this guide.

## Viewing Voter Analytics

As a user of **Voting App**, you have the option to explore insightful voter analytics that provide a visual representation of all registered voters. This information can help you gain a better understanding of the voter demographics. To access voter analytics, follow these steps:

1. **Access the Dashboard**:

   - Option 1: Click on "Voters Analytics" located on the dashboard.
   - Option 2: Navigate directly to the analytics page by visiting [Voter Analytics](http://localhost:3000/dashboard/stats).

2. **Explore the Analytics**:

   - On the voter analytics page, you will find two main visual representations of voter demographics:

     - **Biaxial Bar Chart**: This chart displays data based on gender (Male or Female) and age group. The age groups are categorized as:

       - Youth (18-34)
       - Middle-Aged (35-49)
       - Elderly (50-69)
       - Old (70+)

     - **Pie Chart**: This chart represents all registered voters based on gender, showing the proportion of Male and Female voters.

3. **Interpret the Data**:

   - Use the biaxial bar chart to observe the distribution of voters across different age groups and genders. It provides insights into the age and gender demographics of registered voters.

   - The pie chart offers a clear overview of the gender distribution among registered voters.

4. **Analyze and Gain Insights**:
   - The voter analytics data can be valuable for understanding the voter base and making informed decisions related to elections and campaigns.

By following these steps, you can access and explore voter analytics on **Voting App**. It's an excellent resource for gaining insights into the registered voter demographics, which can be useful for election planning and strategies.

##

Feel free to explore the platform, create elections and add candidates to make the most of your experience with **Voting App**. If you have any questions or need assistance, don't hesitate to reach out to us.
