---
title: Leave Entitlements
id: leave-entitlements
sidebar_label: Leave Entitlements
sidebar_position: 4
description: Learn how to manage leave entitlements in Skapp, including assigning leave allocations to employees, overriding entitlements, and configuring leave policies with ease using templates and bulk operations.
image: ../../src/images/thumbnails/leave/leave-entitlements-thumbnail.png
keywords:
  [
    Skapp Leave Entitlements,
    Manage Leave Allocations,
    Employee Leave Assignments,
    Override Leave Entitlements,
    Leave Allocation Templates,
    Bulk Leave Management,
    Configure Leave Policies,
    Skapp Leave Administration,
  ]
---

## Introduction

**Leave entitlements** represent the allocation of leave days assigned to each employee based on the organization’s policies Administrators can manage these entitlements by adding leave entitlements for individual employees. The system ensures accurate and flexible leave management through bulk operations and built-in validations, making it easy to upload or adjust entitlements using pre-defined templates.

---

## Accessing the Leave Entitlements Page

1. Click on the **Leave** option in the main navigation bar.
2. Click on the **Leave Entitlements** sub-menu option under the Leave module.

:::info

Users with the `Super Admin` & `Leave Admin` roles can manage leave entitlements.

:::

![Leave Entitlements Navigation](../../src/images/leave/leave-entitlements-navigation.png)

---

## Add Entitlements

### Step 1: Select the year

1. Select the year that you wish to add the entitlements.

![Leave Entitlements Year](../../src/images/leave/leave-entitlements-select-year.png)

### Step 2: Click on Add Entitlments Button

1. Click either the **Add Entitlements** button to open the **Add Entitlements Modal** page.

![Leave Entitlements Button](../../src/images/leave/leave-entitlements-add-button.png)

### Step 3: Download the CSV Template

1. Click the **Download CSV Template** button in the modal to download.

![Leave Entitlements Temaplate](../../src/images/leave/leave-entitlements-template.png)

:::tip

The template includes specific columns to ensure proper formatting: **Employee ID**, **Employee Name**, and **Work Email**. Additionally, it features columns for each **active **[leave types](leave-types)** configured in the system**, such as Annual Leave and Sick Leave

:::

---

### Step 4: Upload the CSV File

1. Click **Next** in the Add Entitlements Modal.
2. Drag and drop the completed CSV file into the designated area or click to select the file manually.
3. Click **Upload Entitlements** after uploading the file.

![Leave Entitlements Temaplate Upload](../../src/images/leave/leave-entitlments-upload-template.png)

:::warning[File Requirment]

- **Format**: CSV only.
- **Size**: Maximum 5MB.
- **Structure**: Must match the provided template, including correct column headings and order.

:::

- The system ensures the accuracy of uploaded data through comprehensive validations, such as verifying **employee details and leave type entries**.
- Any records that pass these validations are successfully uploaded to the system, while invalid entries are excluded. For transparency and easier corrections, an error log is generated detailing issues with the excluded records.

---

### Step 6: Handling Validation Errors

1. If records fail validations, an **Error Log (CSV)** is generated.
2. Click the **Download Error Log** button to download the file.

![Leave Entitlements Error Logo](../../src/images/leave/leave-entitlements-error-log.png)

- The error log contains detailed information in columns such as Employee ID, Employee Name, Work Email, Leave Type, Entitlement Value, and a descriptive Error Message.
- After reviewing the errors, users are encouraged to correct the identified issues in their data and re-upload the file to ensure all records meet the validation criteria

---

## Overriding Entitlements

### Step 1: Navigate to Leave Entitlements

1. Follow the same steps as outlined in above.

### Step 2: Select the year

1. Select the year that you wish to add the entitlements.

### Step 3: Click on Add Entitlments Button

1. Click either the **Bulk Upload** button to open overidden condirmation page.

![Leave Entitlements Bulk Upload](../../src/images/leave/leave-entitlements-bulk-upload.png)

2. Click on the **Confirm and Proceed** button to open the upload modal.

![Leave Entitlements Overridden Confirmation](../../src/images/leave/leave-entitlements-overridden-confirmation.png)

### Step 4: Download CSV Template

1. Click the **Download Template** button in the Add Entitlements Modal.
2. Update the file with the new entitlement values.

:::info

To comapare the exsiting leave types you can export the the selected year currenct entitlments through **Export CSV** button.

:::

### Step 5: Upload the CSV File

1. Click **Next** in the Add Entitlements Modal.
2. Drag and drop the completed CSV file into the designated area or click to select the file manually.

:::warning

- New entitlement values must be **greater than or equal** to the employee's current utilization of the respective leave type.
- **Example**: If a user's current utilization for annual leave is 5 days, the new entitlement must be at least 5 days or greater to account for the days already taken

:::

---
