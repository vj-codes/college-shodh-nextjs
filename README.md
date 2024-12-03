# EmailJS Setup Guide

Follow these steps to set up project using environment variables from the `.env.example` file.

## Step 1: Copy from `.env.example`

1. In the root directory of your project, locate the `.env.example` file.
2. Copy this file and rename the copy to `.env` using the following command:

```bash
cp .env.example .env
```
## Step 2: Update .env File
1. Open the newly created .env file and update the following fields with your EmailJS credentials:

``` bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID =  "your_service_id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = "your_template_id"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = "your_public_key"
```

2. Replace the placeholder values (your_service_id, your_template_id, your_public_key) with the actual values from your EmailJS account.
