---
title: Clock-In & Clock Out
id: clock-in-clock-out
sidebar_label: Clock-In & Clock Out
sidebar_position: 1
description: Learn how to use the Clock-In & Clock Out feature in Skapp to efficiently track working hours, manage breaks, and understand automatic clock-out for accurate time and attendance management.
image: /thumbnails/attendance/clock-in-clock-out-thumbnail.png
keywords:
  [
    Skapp Clock-In,
    Skapp Clock-Out,
    Employee Time Tracking,
    Attendance Management,
    Work Hours Tracking,
    Automatic Clock-Out,
    Break Management,
    Skapp Time and Attendance,
  ]
---

## Introduction

The Clock-In & Clock Out feature in **Skapp** enables users to track working hours efficiently. Accessible from the fixed top navigation bar on every page, this tool ensures consistent and convenient time tracking. It seamlessly integrates with leave schedules to provide accurate records of working hours.

---

## Accessing the Clock-In Widget

The clock-in widget is prominently located on the top navigation bar of every page within **Skapp**. This ensures that users can easily start or stop work tracking at any time without navigating away from the current page.

![Top navigation bar highlighting the clock-in widget](/attendance/top-navigation-clock-in-widget.png)

---

### Clocking In

#### Starting the Workday

To begin tracking work hours:

1. Click the **Clock-In** button on the top navigation bar.
2. Upon clocking in:
   - The timer starts, displaying the elapsed working time.
   - A green blinking dot appears, indicating that time tracking is active.
   - The **Clock-In** button changes to a **Clock-Out** button.

![Clock-In Button for Starting Work](/attendance/clock-in-button.png)

#### If Leave Is Applied

If attempting to clock in on a day with scheduled leave:

- A confirmation modal appears, providing details of the leave.
- The modal asks for confirmation to proceed.

Options:

- **Clock in anyway**: Proceed with clocking in despite the scheduled leave.
- **Close**: Cancel the action and return to the previous page.

![Leave confirmation modal](/attendance/leave-confirmation-modal.png)

---

### Taking a Break

#### Starting a Break

To pause work tracking during a break:

1. Click the **Pause** button next to the timer.
2. Upon pausing:
   - The timer stops counting.
   - The green blinking dot changes to yellow, indicating a break.
   - The **Pause** button changes to a **Play** button.

![Pause Button for Taking a Break](/attendance/pause-button.png)

### Resuming Work

To resume tracking after a break:

1. Click the **Play** button.
2. Upon resuming:
   - The timer resumes counting working hours.
   - The blinking dot changes back to green.
   - The **Play** button reverts to the **Pause** button.

![Play Button for Resuming Work](/attendance/play-button.png)

#### Multiple Breaks

Users can take multiple breaks throughout the day as needed. Each pause and resume updates the timer to ensure accurate tracking of active working hours.

---

### Clocking Out

#### Ending the Workday

To stop tracking time at the end of the workday:

1. Click the **Clock-Out** button on the top navigation bar.

![Clock-Out Button for Ending Work](/attendance/clock-out-button.png)

2. Click the **Confirm** button on the **Clock out confirmation** modal.

![Clock-Out Confirmation Modal](/attendance/clock-out-confirmation.png)

---

### Automatic Clock-Out

#### If the User Forgets to Clock Out

**Skapp** includes an automatic clock-out feature to maintain accurate records.

- **11:49 pm Reminder**:

  - An alert appears at 11:49 pm, reminding the user to clock out.
  - This serves as a prompt to ensure manual clock-out for accurate time tracking.

- **Automatic Clock-Out at 11:59 pm**:
  - If the user does not clock out manually, the system automatically clocks them out at 11:59 pm.
  - A modal informs the user of the automatic clock-out and displays the total hours worked.

---

### Next Day Reset

The clock-in system resets daily at **12:00 am**.

- After midnight:
  - The **Clock-In** button is re-enabled for the new day.
  - Users can begin tracking time for the new workday by clicking the **Clock-In** button.

---
