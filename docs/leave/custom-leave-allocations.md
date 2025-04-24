---
title: Custom Leave Allocations
id: custom-leave-allocations
sidebar_label: Custom Leave Allocations
sidebar_position: 3
description: Learn how to manage custom leave allocations in Skapp, including granting additional leave days to employees, editing allocations, and aligning with organizational policies.
image: /thumbnails/leave/leave-entitlements-thumbnail.png
keywords:
  [
    Skapp Custom Leave Allocations,
    Grant Additional Leave,
    Manage Employee Leave Allocation,
    Skapp Leave Administration,
    Custom Leave Policies,
    Adjust Employee Leave Entitlements,
    Leave Allocation Management,
    Employee Leave Adjustments,
  ]
---

# Custom Leave Allocations

## Introduction

**Custom leave allocations** provide flexibility for administrators to grant additional leave days to individual employees beyond their standard entitlements. This feature accommodates special circumstances such as bonus leave, compensatory leave, or one-time adjustments while ensuring alignment with organizational policies.

---

## Accessing Custom Leave Allocations

1. Click on **Leave Entitlements** under the **Leave** section in the navigation bar.
2. Scroll down on the Leave Entitlements page to find the **Custom Allocation** section.

:::info

Users with the `Super Admin` & `Leave Admin` roles can manage custom allocations.

:::

![Leave Entitlements Navigation](/leave/leave-entitlements-navigation.png)

---

## Adding Custom Allocations

### Step 1: Click on Add Allocation Button

1. Click the **Add Custom Allocation** button in the **Custom Allocation** section.

![Custom Allocation Add Button](/leave/custom-allocation-add-button.png)

### Step 2: Fill in Allocation Details

![Custom Allocation Details](/leave/custom-allocation-details.png)

#### 2.1 Employee Selection

- **Mandatory Field**
- Use the search bar to find and select an employee.

#### 2.2 Leave Type Selection

- **Mandatory Field**
- Select an active leave type from the dropdown.

#### 2.3 Number of Days

- **Mandatory Field**
- Number of days should be in increments of 0.5.

#### 2.4 Effective From

- **Mandatory Field**
- Select the effective from date that determines when the user becomes eligible to apply for leave based on this custom allocation.

#### 2.5 Expiration Date

- **Mandatory Field**
- Must be a date after the effective from date.

### Step 3: Save the Custom Allocation

- Click the **Save** button.

![Custom Allocation Save](/leave/custom-allocation-save.png)

---

## Editing Custom Allocations

### Step 1: Click on Edit Button

- Click the **Edit** button next to the allocation you wish to modify in the custom allocation table.

![Custom Allocation Edit](/leave/custom-allocation-edit-button.png)

### Step 2: Modify Allocation Details

- Employee and Leave Type are pre-filled and not editable.

#### Editing Number of Days:

- Adjust as needed (restrictions same as adding allocations).

<div class="toast toast-important">
    <div class="toast-icon"></div>
    <div>
        <p class="toast-title">Important</p>
        <p class="toast-message"> While editing the allocation you cannot reduce the allocation below the utilized amount. </p>
    </div>
</div>
:::warning

While editing the allocation you cannot reduce the allocation below the utilized amount.

:::

:::tip

**Example**

- An employee, John Doe, was **initially granted 10 custom leave days** under the **Annual** Leave type.
  John has **already utilized 6 days** of this custom allocation.
- When editing the allocation, you cannot reduce the total allocation below the utilized amount.
  In this case, since John has already used 6 days, the minimum number of days allowed during the edit would be 6 days.

- **Allowed Edit**

  - Increase the allocation to a higher value, such as 12 days or 15 days.Keep the allocation the same at 10 days.

- **Not Allowed**
  - Reducing the allocation to 5 days or any value less than the 6 days utilized, as it would lead to inconsistencies (John has already used more leave than the new allocation).

:::

### Step 3: Save Changes

1. Click the **Save Changes** button.

---

## Deleting Custom Allocations

### Step 1: Open the Edit Custom Allocation Modal

1. Click the **Edit** button next to the allocation you wish to delete.

![Custom Allocation Edit](/leave/custom-allocation-edit-button.png)

### Step 2: Check Deletion Eligibility

- If the allocation has not been utilized, the **Delete Custom Allocation** button is enabled.
- If the allocation has been utilized, the button is disabled.

### Step 3: Delete the Custom Allocation

1. Click the **Delete Custom Allocation** button if enabled.

![Custom Allocation Delete](/leave/custom-allocation-delete.png)

---
