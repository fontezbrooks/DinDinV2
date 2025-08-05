This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
__mocks__/
  @gorhom/
    bottom-sheet.ts
  expo-localization.ts
  moti.ts
  react-native-gesture-handler.ts
  react-native-keyboard-controller.ts
.github/
  actions/
    eas-build/
      action.yml
    setup-jdk-generate-apk/
      action.yml
    setup-node-pnpm-install/
      action.yml
  scripts/
    expo-doctor.sh
  workflows/
    compress-images.yml
    e2e-android-eas-build.yml
    e2e-android-maestro.yml
    e2e-android.yml
    eas-build-prod.yml
    eas-build-qa.yml
    expo-doctor.yml
    lint-ts.yml
    new-app-version.yml
    new-github-release.yml
    stale.yml
    test.yml
    type-check.yml
  ISSUE_TEMPLATE.md
  PULL_REQUEST_TEMPLATE.md
.husky/
  .gitignore
  commit-msg
  common.sh
  post-merge
  pre-commit
.maestro/
  app/
    create-post.yaml
    tabs.yaml
  auth/
    login-with-validation.yaml
    onboarding.yaml
  utils/
    hide-keyboard-android.yaml
    hide-keyboard-ios.yaml
    hide-keyboard.yaml
    login.yaml
    onboarding-and-login.yaml
    onboarding.yaml
  config.yaml
android/
  app/
    src/
      debug/
        AndroidManifest.xml
      main/
        java/
          com/
            obytes/
              development/
                MainActivity.kt
                MainApplication.kt
        res/
          drawable/
            ic_launcher_background.xml
            rn_edit_text_material.xml
          mipmap-anydpi-v26/
            ic_launcher_round.xml
            ic_launcher.xml
          values/
            colors.xml
            strings.xml
            styles.xml
          values-night/
            colors.xml
        AndroidManifest.xml
    build.gradle
    proguard-rules.pro
  gradle/
    wrapper/
      gradle-wrapper.properties
  .gitignore
  build.gradle
  gradle.properties
  gradlew
  gradlew.bat
  settings.gradle
cli/
  clone-repo.js
  index.js
  package.json
  README.md
  setup-project.js
  utils.js
docs/
  public/
    _redirects
    favicon.svg
  src/
    assets/
      logo-titled.svg
    components/
      about.astro
      code.astro
      Comments.astro
      GithubStar.astro
      LastUpdated.astro
      reviews.astro
    content/
      docs/
        ci-cd/
          app-releasing-process.mdx
          overview.mdx
          workflows-references.mdx
        getting-started/
          create-new-app.md
          customize-app.mdx
          environment-vars-config.mdx
          project-structure.mdx
          rules-and-conventions.mdx
        guides/
          authentication.mdx
          data-fetching.mdx
          internationalization.mdx
          navigation.mdx
          storage.mdx
          upgrading-deps.mdx
        recipes/
          sentry-setup.mdx
        testing/
          end-to-end-testing.mdx
          overview.mdx
          unit-testing.mdx
        ui-and-theme/
          components.mdx
          fonts.mdx
          Forms.mdx
          ui-theming.mdx
        changelog.md
        faq.md
        how-to-contribute.md
        index.mdx
        libraries-recommendation.md
        overview.md
        reviews.md
        stay-updated.md
      config.ts
    styles/
      custom.css
    env.d.ts
  .gitignore
  astro.config.mjs
  ec.config.mjs
  package.json
  README.md
  tsconfig.json
ios/
  ObytesApp/
    Images.xcassets/
      AppIcon.appiconset/
        Contents.json
      SplashScreenBackground.colorset/
        Contents.json
      SplashScreenLogo.imageset/
        Contents.json
      Contents.json
    Supporting/
      Expo.plist
    AppDelegate.swift
    Info.plist
    ObytesApp-Bridging-Header.h
    ObytesApp.entitlements
    PrivacyInfo.xcprivacy
    SplashScreen.storyboard
  ObytesApp.xcodeproj/
    xcshareddata/
      xcschemes/
        ObytesApp.xcscheme
    project.pbxproj
  ObytesApp.xcworkspace/
    contents.xcworkspacedata
  .gitignore
  .xcode.env
  Podfile
  Podfile.lock
  Podfile.properties.json
prompts/
  expo-doctor.md
  image-to-components.md
  svg-icon.md
  write-unit-tests.md
scripts/
  genrate-apk-and-install
  i18next-syntax-validation.js
src/
  api/
    common/
      api-provider.tsx
      client.tsx
      index.tsx
      utils.tsx
    posts/
      index.ts
      types.ts
      use-add-post.ts
      use-post.ts
      use-posts.ts
    index.tsx
    types.ts
  app/
    (app)/
      _layout.tsx
      index.tsx
      settings.tsx
      style.tsx
    feed/
      [id].tsx
      add-post.tsx
    _layout.tsx
    [...messing].tsx
    +html.tsx
    login.tsx
    onboarding.tsx
  components/
    settings/
      item.tsx
      items-container.tsx
      language-item.tsx
      theme-item.tsx
    ui/
      icons/
        arrow-right.tsx
        caret-down.tsx
        feed.tsx
        github.tsx
        home.tsx
        index.tsx
        language.tsx
        rate.tsx
        settings.tsx
        share.tsx
        style.tsx
        support.tsx
        website.tsx
      button.test.tsx
      button.tsx
      checkbox.test.tsx
      checkbox.tsx
      colors.js
      focus-aware-status-bar.tsx
      image.tsx
      index.tsx
      input.test.tsx
      input.tsx
      list.tsx
      modal-keyboard-aware-scroll-view.tsx
      modal.tsx
      progress-bar.tsx
      select.test.tsx
      select.tsx
      text.tsx
      utils.tsx
    buttons.tsx
    card.tsx
    colors.tsx
    cover.tsx
    inputs.tsx
    login-form.test.tsx
    login-form.tsx
    title.tsx
    typography.tsx
  lib/
    auth/
      index.tsx
      utils.tsx
    hooks/
      index.tsx
      use-is-first-time.tsx
      use-selected-theme.tsx
    i18n/
      index.tsx
      react-i18next.d.ts
      resources.ts
      types.ts
      utils.tsx
    env.js
    index.tsx
    storage.tsx
    test-utils.tsx
    use-theme-config.tsx
    utils.ts
  translations/
    ar.json
    en.json
.cursorrules
.env.development
.env.production
.env.staging
.gitignore
.npmrc
.prettierrc.js
app.config.ts
babel.config.js
commitlint.config.js
eas.json
env.js
eslint.config.mjs
global.css
jest-setup.ts
jest.config.js
LICENSE
lint-staged.config.js
metro.config.js
nativewind-env.d.ts
package.json
README-project.md
README.md
tailwind.config.js
tsconfig.json
```

# Files

## File: __mocks__/@gorhom/bottom-sheet.ts
````typescript
module.exports = require('@gorhom/bottom-sheet/mock');
````

## File: __mocks__/expo-localization.ts
````typescript
export const locale = 'en-US';
export const locales = ['en-US'];
export const timezone = 'UTC';
export const isRTL = false;
````

## File: __mocks__/moti.ts
````typescript
import { View } from 'react-native';

const AnimatePresence = View;
const MotiView = View;

module.exports = {
  AnimatePresence,
  View,
  MotiView,
};
````

## File: __mocks__/react-native-gesture-handler.ts
````typescript
module.exports = require('react-native-gesture-handler/src/mocks.ts');
````

## File: __mocks__/react-native-keyboard-controller.ts
````typescript
module.exports = require('react-native-keyboard-controller/jest');
````

## File: .github/actions/eas-build/action.yml
````yaml
# 🔗 Links:
# Source file: https://github.com/obytes/react-native-template-obytes/blob/master/.github/actions/eas-build/action.yml
# EAS Build docs: https://docs.expo.dev/eas-update/github-actions/

# ✍️ Description:
# This is a composite action, which means it can be used in other actions.
# This action is used to trigger an EAS Build for a specific environment (development, staging, production).
# This action accepts those inputs:
#        `APP_ENV`, which is used to generate an APK for a specific environment (development, staging, production). We use staging by default.
#        `AUTO_SUBMIT`, false by default, set to true if you want to automatically submit your build to stores.
#        `EXPO_TOKEN`, required, access token for your Expo account. https://expo.dev/settings/access-tokens
#        `VERSION`, required, version of the app to build. used as the build message.
#        `ANDROID`, true by default, set to true if you don't want to trigger build for Android.
#        `IOS`, false by default, set to true if you  want to trigger build for IOS.

# Before triggering the build, we run a pre-build script to generate the necessary native folders based on the APP_ENV.
# Based on the ANDROID and IOS inputs, we trigger the build for the corresponding platform with the corresponding flags.

# 👀 Example usage:
#      - name: ⏱️ EAS Build
#        uses: ./.github/actions/eas-build
#        with:
#          APP_ENV: staging
#          EXPO_TOKEN: ${{ secrets.EXPO_TOKEN }}
#          VERSION: ${{ github.event.release.tag_name }}
#          IOS: false

name: 'Setup EAS Build + Trigger Build'
description: 'Setup EAS Build + Trigger Build'
inputs:
  APP_ENV:
    description: 'APP_ENV (one of): development, staging, production'
    required: true
    default: 'staging'
  AUTO_SUBMIT: ## TODO: we need to handle this too
    description: 'AUTO_SUBMIT (one of): true, false'
    required: true
    default: 'false'
  ANDROID:
    description: 'run for ANDROID (one of): true, false'
    required: true
    default: 'true'
  VERSION:
    description: 'VERSION'
    required: true
    default: '0.0.0'
  IOS:
    description: 'run for IOS (one of): true, false'
    required: true
    default: 'false'
  EXPO_TOKEN:
    description: 'EXPO_TOKEN'
    required: true
    default: 'false'

runs:
  using: 'composite'
  steps:
    - name: 💯 Check for EXPO_TOKEN
      run: |
        if [ -z "${{ inputs.EXPO_TOKEN }}" ]; then
          echo "You must provide an EXPO_TOKEN secret linked to this project's Expo account in this repo's secrets. Learn more: https://docs.expo.dev/eas-update/github-actions"
          exit 1
        fi
      shell: bash

    - name: 📦 Setup Expo and EAS
      uses: expo/expo-github-action@v8
      with:
        eas-version: latest
        token: ${{ inputs.EXPO_TOKEN }}

    - name: ⚙️ Run Prebuild
      run: pnpm prebuild:${{ inputs.APP_ENV }}
      shell: bash

    - name: 📱 Run Android Build
      if: ${{ inputs.ANDROID == 'true' }}
      run: pnpm build:${{ inputs.APP_ENV }}:android --non-interactive  --no-wait --message "Build  ${{ inputs.APP_ENV }} ${{ inputs.VERSION }}"
      shell: bash

    - name: 📱 Run IOS Build
      if: ${{ inputs.IOS == 'true' }}
      run: pnpm build:${{ inputs.APP_ENV }}:ios --non-interactive  --no-wait --message "Build ${{ inputs.APP_ENV }} ${{ inputs.VERSION }}"
      shell: bash
````

## File: .github/actions/setup-jdk-generate-apk/action.yml
````yaml
# 🔗 Links:
# Source file: https://github.com/obytes/react-native-template-obytes/blob/master/.github/actions/setup-jdk-generate-apk/action.yml
# Composite actions docs: https://docs.github.com/en/actions/creating-actions/creating-a-composite-action

# ✍️ Description:
# This is a composite action, which means it can be used in other actions.
# This action is used to set up the JDK environment and generate an Android APK for testing.
# This action accepts one input: `APP_ENV`, which is used to generate an APK for a specific environment (development, staging, production). We use staging by default.
# Before generating the APK, we run a pre-build script to generate the necessary native folders based on the APP_ENV.
# On success, the APK is generated at `./android/app/build/outputs/apk/release/app-release.apk`.

# 👀 Example usage:
#       - name : 📦 Set Up JDK + Generate Test APK
#         uses: ./.github/actions/setup-jdk-generate-apk
#         with:
#           APP_ENV: 'staging'

name: 'Setup  JDK + GRADLE + Generate APK'
description: 'Setup  JDK + GRADLE + Generate APK'
inputs:
  APP_ENV:
    description: 'APP_ENV (one of): development, staging, production'
    required: true
    default: 'staging'

runs:
  using: 'composite'
  steps:
    - name: Set Up JDK
      uses: actions/setup-java@v3
      with:
        distribution: 'zulu' # See 'Supported distributions' for available options
        java-version: '17'
    - name: Setup Gradle
      uses: gradle/gradle-build-action@v2

    - name: Generate Test APK
      run: |
        pnpm prebuild:${{ inputs.APP_ENV }}
        cd  android
        chmod +x ./gradlew
        ./gradlew assembleRelease --no-daemon
        cd ..
      shell: bash
      env:
        EXPO_NO_DOTENV: '1'
        APP_ENV: ${{ inputs.APP_ENV }}
        CI: 'true'
````

## File: .github/actions/setup-node-pnpm-install/action.yml
````yaml
# 🔗 Links:
# Source file: https://github.com/obytes/react-native-template-obytes/blob/master/.github/actions/setup-node-pnpm-install/action.yml
# Composite actions docs: https://docs.github.com/en/actions/creating-actions/creating-a-composite-action

# ✍️ Description:
# This is a composite action, which means it can be used in other actions.
# It is used in almost all workflows to set up the environment and install dependencies.
# Updating  the package manager or Node version here will be reflected in all workflows.

# 👀 Example usage:
#       - name : 📦 Setup Node + PNPM + install deps
#         uses: ./.github/actions/setup-node-pnpm-install

name: 'Setup  Node + PNPM + Install Dependencies'
description: 'Setup  Node + PNPM + Install Dependencies'
runs:
  using: 'composite'
  steps:
    - uses: pnpm/action-setup@v4
      with:
        run_install: false
    - uses: actions/setup-node@v4
      with:
        node-version: 20
        cache: 'pnpm'

    - name: 📦 Install Project Dependencies
      run: pnpm install --frozen-lockfile
      shell: bash
````

## File: .github/scripts/expo-doctor.sh
````bash
#!/bin/bash

# Run expo-doctor and capture output and exit code
output=$(npx expo-doctor@latest 2>&1)
exit_code=$?

# Output file location
output_file=".expo/expo-doctor.md"
{
  # Add summary based on exit code
  if [ $exit_code -eq 0 ]; then
    echo "✅ **Good news!** We ran Expo Doctor for this PR and everything looks good, Great job!" > "$output_file"
  else
    echo "❌ **Action Required:**  We ran Expo Doctor for this PR and found some issues that need to be addressed. Please review the complete report below 👇" > "$output_file"
    echo >> "$output_file"  # Add blank line
    echo "\`\`\`shell" >> "$output_file"
    echo "$output" >> "$output_file"
    echo "\`\`\`" >> "$output_file"
  fi
}

# Show original output in terminal
echo "$output"

# Return the original exit code
exit $exit_code
````

## File: .github/workflows/compress-images.yml
````yaml
# 🔗 Links:
# Source file: https://github.com/obytes/react-native-template-obytes/blob/master/.github/workflows/compress-images.yml

# ✍️ Description:
# This workflow is used to compress images in the repo.
# This workflow will trigger on a push to the "master" or "main" branch and only run when a new image is added or updated.
# If it's the case, it will compress those images and create a pull request with the compressed images.

# 🚨 GITHUB SECRETS REQUIRED: None

name: Compress images
on:
  push:
    branches:
      - master
      - main
    paths:
      - '**.jpg'
      - '**.jpeg'
      - '**.png'
      - '**.webp'
  workflow_dispatch:

jobs:
  build:
    name: calibreapp/image-actions
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Branch
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Compress Images
        id: calibre
        uses: calibreapp/image-actions@main
        with:
          githubToken: ${{ secrets.GITHUB_TOKEN }}
          compressOnly: true
          ignorePaths: 'node_modules/**,ios/**,android/**'

      - name: Create Pull Request
        if: steps.calibre.outputs.markdown != ''
        uses: peter-evans/create-pull-request@v3
        with:
          title: Auto Compress Images
          branch-suffix: timestamp
          commit-message: Compress Images
          body: ${{ steps.calibre.outputs.markdown }}
````

## File: .github/workflows/e2e-android-eas-build.yml
````yaml
# 🔗 Links:
# Source file: https://github.com/obytes/react-native-template-obytes/blob/master/.github/workflows/e2e-android-eas-build.yml
# End-to-end testing: https://starter.obytes.com/testing/end-to-end-testing/

# ✍️ Description:
# This workflow is used to run end-to-end tests for EAS build on Android.
# It uses Maestro Cloud to run tests on Android emulator.
# It downloads the APK from EAS build and triggers the tests on Maestro Cloud with the downloaded APK.

# 🚨 GITHUB SECRETS REQUIRED:
# MAESTRO_CLOUD_API_KEY: API key for Maestro Cloud. You can get it from https://cloud.mobile.dev/ci-integration/github-actions#add-your-api-key-secret

name: E2E Tests EAS Build Android (Maestro + Github Action)

on:
  workflow_dispatch:
    inputs:
      apk-url:
        type: string
        description: 'EAS APK URL'
        required: true
        default: ''

jobs:
  download-eas-apk:
    if: github.event_name != 'pull_request'  && github.event.inputs.apk-url != ''
    name: Download Test APK From EAS Url (wget)
    runs-on: ubuntu-latest

    steps:
      - name: 📦 Download EAS APK
        run: wget ${{ github.event.inputs.apk-url }} -O ./app-release.apk

      - name: Upload Test APK
        uses: actions/upload-artifact@v3
        with:
          name: test-apk
          path: ./app-release.apk

  test-android:
    name: E2E Tests EAS Build Android (Maestro + Github Action)
    needs: download-eas-apk
    runs-on: macOS-latest

    steps:
      - name: 📦 Checkout project repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: 📦 Install Maestro
        run: npm run install-maestro ## We use npm because we don't need to install deps again

      - name: Download Test APK
        uses: actions/download-artifact@v3
        with:
          name: test-apk
          path: ${{ github.workspace }}

      - name: Gradle cache
        uses: gradle/gradle-build-action@v2

      - name: AVD cache
        uses: actions/cache@v3
        id: avd-cache
        with:
          path: |
            ~/.android/avd/*
            ~/.android/adb*
          key: avd-cache

      - name: create AVD and generate snapshot for caching
        if: steps.avd-cache.outputs.cache-hit != 'true'
        uses: reactivecircus/android-emulator-runner@v2
        with:
          api-level: 29
          force-avd-creation: false
          emulator-options: -no-window -gpu swiftshader_indirect -noaudio -no-boot-anim -camera-back none
          disable-animations: false
          cores: 2
          ram-size: 4096M
          profile: Nexus 6
          script: echo "Generated AVD snapshot for caching."

      - name: Run tests with Maestro
        uses: reactivecircus/android-emulator-runner@v2
        with:
          api-level: 29
          force-avd-creation: false
          emulator-options: -no-snapshot-save -no-window -gpu swiftshader_indirect -noaudio -no-boot-anim -camera-back none
          disable-animations: false
          cores: 2
          ram-size: 4096M
          profile: Nexus 6
          script: |
            adb install "${{ github.workspace }}/app-release.apk"
            $HOME/.maestro/bin/maestro test .maestro/ --env=APP_ID=com.obytes.staging  --format junit

      - name: Upload artifacts
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: e2e-test-logs
          path: ~/.maestro/tests/**/*

      - name: Store tests result
        uses: actions/upload-artifact@v3
        with:
          name: e2e_android_report
          path: |
            report.xml
````

## File: .github/workflows/e2e-android-maestro.yml
````yaml
# 🔗 Links:
# Source file: https://github.com/obytes/react-native-template-obytes/blob/master/.github/workflows/e2e-android.yml
# End-to-end testing: https://starter.obytes.com/testing/end-to-end-testing/

# ✍️ Description:
# This workflow is used to run end-to-end tests on Android using Maestro Cloud.
# As a first step, it will generate a test APK using the Gradle build and  then trigger  Maestro Cloud to run the tests on the generated APK.
# This workflow will be triggered on pull requests (PRs) with the label "android-test-maestro-cloud" or can be manually triggered from the Actions tab.

# 🚨 GITHUB SECRETS REQUIRED:
# MAESTRO_CLOUD_API_KEY: API key for Maestro Cloud. You can get it from https://cloud.mobile.dev/ci-integration/github-actions#add-your-api-key-secret

name: E2E Tests Android (Maestro Cloud)

on:
  workflow_dispatch:
  pull_request:
    branches: [main, master]

jobs:
  generate-and-test-apk:
    if: github.event_name != 'pull_request' || ( github.event_name == 'pull_request' && contains(github.event.pull_request.labels.*.name, 'android-test-maestro-cloud'))
    name: Generate and Test Test APK (Maestro Cloud)
    runs-on: ubuntu-latest

    steps:
      - name: 📦 Checkout project repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: 📦 Setup Node + PNPM + install deps
        uses: ./.github/actions/setup-node-pnpm-install

      - name: 📦 Set Up JDK + Generate Test APK
        uses: ./.github/actions/setup-jdk-generate-apk
        with:
          APP_ENV: staging

      - name: Upload Test APK
        uses: actions/upload-artifact@v3
        with:
          name: test-apk
          path: ./android/app/build/outputs/apk/release/app-release.apk

      - name: 📱 Run E2E Tests with Maestro Cloud
        uses: mobile-dev-inc/action-maestro-cloud@v1.4.1
        with:
          api-key: ${{ secrets.MAESTRO_CLOUD_API_KEY }}
          app-file: ./android/app/build/outputs/apk/release/app-release.apk
          env: |
            APP_ID=com.obytes.staging
````

## File: .github/workflows/e2e-android.yml
````yaml
# 🔗 Links:
# Source file: https://github.com/obytes/react-native-template-obytes/blob/master/.github/workflows/e2e-android.yml
# End-to-end testing: https://starter.obytes.com/testing/end-to-end-testing/

# ✍️ Description:
# This workflow is used to run end-to-end tests on Android using Maestro.
# As a first step, it will generate a test APK using the Gradle build and then upload it as an artifact.
# A new job will be started to run the tests using the test APK generated in the previous job.
# To test the app, we set up an Android emulator using the `reactivecircus/android-emulator-runner` action. This runner requires macOS as the operating system for the runner.
# This workflow will be triggered on pull requests (PRs) with the label "android-test-github" or can be manually triggered from the Actions tab.
#

# 🚨 GITHUB SECRETS REQUIRED: None

name: E2E Tests Android (Maestro + Github Action)

on:
  workflow_dispatch:
  pull_request:
    branches: [main, master]

jobs:
  generate-test-apk:
    if: github.event_name != 'pull_request' || ( github.event_name == 'pull_request' && contains(github.event.pull_request.labels.*.name, 'android-test-github'))
    name: Generate Test APK (Gradle)
    runs-on: ubuntu-latest

    steps:
      - name: 📦 Checkout project repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: 📦 Setup Node + PNPM + install deps
        uses: ./.github/actions/setup-node-pnpm-install

      - name: 📦 Set Up JDK + Generate Test APK
        uses: ./.github/actions/setup-jdk-generate-apk
        with:
          APP_ENV: staging

      - name: Upload Test APK
        uses: actions/upload-artifact@v3
        with:
          name: test-apk
          path: ./android/app/build/outputs/apk/release/app-release.apk

  test-android:
    name: Run Android E2E Tests (Maestro + Github Action)
    needs: generate-test-apk
    runs-on: macOS-latest

    steps:
      - name: 📦 Checkout project repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: 📦 Install Maestro
        run: npm run install-maestro ## We use npm because we don't need to install deps again

      - name: Download Test APK
        uses: actions/download-artifact@v3
        with:
          name: test-apk
          path: ${{ github.workspace }}

      - name: Gradle cache
        uses: gradle/gradle-build-action@v2

      - name: AVD cache
        uses: actions/cache@v3
        id: avd-cache
        with:
          path: |
            ~/.android/avd/*
            ~/.android/adb*
          key: avd-cache

      - name: create AVD and generate snapshot for caching
        if: steps.avd-cache.outputs.cache-hit != 'true'
        uses: reactivecircus/android-emulator-runner@v2
        with:
          api-level: 29
          force-avd-creation: false
          emulator-options: -no-window -gpu swiftshader_indirect -noaudio -no-boot-anim -camera-back none
          disable-animations: false
          cores: 2
          ram-size: 4096M
          profile: Nexus 6
          script: echo "Generated AVD snapshot for caching."

      - name: Run tests with Maestro
        uses: reactivecircus/android-emulator-runner@v2
        with:
          api-level: 29
          force-avd-creation: false
          emulator-options: -no-snapshot-save -no-window -gpu swiftshader_indirect -noaudio -no-boot-anim -camera-back none
          disable-animations: false
          cores: 2
          ram-size: 4096M
          profile: Nexus 6
          script: |
            adb install "${{ github.workspace }}/app-release.apk"
            $HOME/.maestro/bin/maestro test .maestro/ --env=APP_ID=com.obytes.staging  --format junit

      - name: Upload artifacts
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: e2e-test-logs
          path: ~/.maestro/tests/**/*

      - name: Store tests result
        uses: actions/upload-artifact@v3
        with:
          name: e2e_android_report
          path: |
            report.xml
````

## File: .github/workflows/eas-build-prod.yml
````yaml
# 🔗 Links:
# Source file: https://github.com/obytes/react-native-template-obytes/blob/master/.github/workflows/eas-build-prod.yml
# Starter releasing process: https://starter.obytes.com/ci-cd/app-releasing-process/

# ✍️ Description:
# This workflow is used to trigger a build on EAS for Prod environment.
# Can be triggered manually from the actions tab.
# This workflow will use ./actions/eas-build action to trigger the build on EAS with production env.

# 🚨 GITHUB SECRETS REQUIRED:
#         - EXPO_TOKEN: Expo token to authenticate with EAS
#         - You can get it from https://expo.dev/settings/access-tokens

name: EAS Production Build (Android & IOS) (EAS)

on:
  workflow_dispatch:

jobs:
  Build:
    name: EAS Production Build (Android & IOS) (EAS)
    runs-on: ubuntu-latest
    steps:
      - name: Check for EXPO_TOKEN
        run: |
          if [ -z "${{ secrets.EXPO_TOKEN }}" ]; then
            echo "You must provide an EXPO_TOKEN secret linked to this project's Expo account in this repo's secrets. Learn more: https://docs.expo.dev/eas-update/github-actions"
            exit 1
          fi

      - name: 📦 Checkout project repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: 📦 Setup Node + PNPM + install deps
        uses: ./.github/actions/setup-node-pnpm-install

      - name: ⏱️ EAS Build
        uses: ./.github/actions/eas-build
        with:
          APP_ENV: production
          EXPO_TOKEN: ${{ secrets.EXPO_TOKEN }}
````

## File: .github/workflows/eas-build-qa.yml
````yaml
# 🔗 Links:
# Source file: https://github.com/obytes/react-native-template-obytes/blob/master/.github/workflows/eas-build-qa.yml
# Starter releasing process: https://starter.obytes.com/ci-cd/app-releasing-process/

# ✍️ Description:
# This workflow is used to trigger a build on EAS for the QA environment.
# It will run on every GitHub release published on the repo or can be triggered manually from the actions tab.
# This workflow will use ./actions/eas-build action to trigger the build on EAS with staging env.

# 🚨 GITHUB SECRETS REQUIRED:
#         - EXPO_TOKEN: Expo token to authenticate with EAS
#         - You can get it from https://expo.dev/settings/access-tokens

name: EAS QA Build (Android & IOS) (EAS)

on:
  workflow_dispatch:
  release:
    types: [published]

jobs:
  Build:
    name: EAS QA Build (Android & IOS) (EAS)
    runs-on: ubuntu-latest
    steps:
      - name: Check for EXPO_TOKEN
        run: |
          if [ -z "${{ secrets.EXPO_TOKEN }}" ]; then
            echo "You must provide an EXPO_TOKEN secret linked to this project's Expo account in this repo's secrets. Learn more: https://docs.expo.dev/eas-update/github-actions"
            exit 1
          fi
      - name: 📦 Checkout project repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: 📦 Setup Node + PNPM + install deps
        uses: ./.github/actions/setup-node-pnpm-install

      - name: ⏱️ EAS Build
        uses: ./.github/actions/eas-build
        with:
          APP_ENV: staging
          EXPO_TOKEN: ${{ secrets.EXPO_TOKEN }}
          VERSION: ${{ github.event.release.tag_name }}
          IOS: false # TODO: set as true when IOS account is ready
````

## File: .github/workflows/expo-doctor.yml
````yaml
# 🔗 Links:
# Source file: https://github.com/obytes/react-native-template-obytes/blob/master/.github/workflows/expo-doctor.yml

# ✍️ Description:
# This workflow runs the expo doctor command to check if your project dependencies are aligned with the expo sdk version you are using.
# Can be triggered manually from the Actions tab in your project.
# Runs Also on pull requests and pushes to the main/master branch, but only if the `package.json` or `pnpm-lock.yaml` files have been changed.

# 🚨 GITHUB SECRETS REQUIRED: NONE

name: Expo Doctor (expo)

on:
  push:
    branches:
      - main
      - master
    paths:
      - 'package.json'
      - 'pnpm-lock.yaml'
  pull_request:
    paths:
      - 'package.json'
      - 'pnpm-lock.yaml'

permissions:
  contents: read
  pull-requests: write
  
jobs:
  doctor:
    name: Expo Doctor (expo)
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write

    steps:
      - name: 📦 Checkout project repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: 📦 Setup Node + PNPM + install deps
        uses: ./.github/actions/setup-node-pnpm-install

      - name: Run prebuild
        run: pnpm run prebuild

      - name: 🚑 Run Doctor Checks
        run: |
          chmod +x .github/scripts/expo-doctor.sh
          rm -rf ios android
          .github/scripts/expo-doctor.sh

      - name: Add doctor report as comment on PR
        if: github.event_name == 'pull_request' && always()
        uses: marocchino/sticky-pull-request-comment@v2
        with:
          header: expo-doctor
          path: .expo/expo-doctor.md
````

## File: .github/workflows/lint-ts.yml
````yaml
# 🔗 Links:
# Source file: https://github.com/obytes/react-native-template-obytes/blob/master/.github/workflows/lint-ts.yml

# ✍️ Description:
# This action is used to run eslint checks
# Runs on pull requests and pushes to  the main/master branches
# Based on the event type:
#   - If it's a pull request, it will run eslint, then add the check to the PR as well as annotate the code with the errors and warnings.
#   - If it's a push to main/master, it will run the type checking and fail if there are any errors.

# 🚨 GITHUB SECRETS REQUIRED: NONE

name: Lint TS (eslint, prettier)

on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main, master]

permissions:
  contents: read
  pull-requests: write
  
jobs:
  lint:
    name: Lint TS (eslint, prettier)
    runs-on: ubuntu-latest

    steps:
      - name: 📦 Checkout project repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: 📦 Setup Node + PNPM + install deps
        uses: ./.github/actions/setup-node-pnpm-install

      - name: 🏃‍♂️ Run ESLint PR
        if: github.event_name == 'pull_request'
        uses: reviewdog/action-eslint@v1
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          reporter: github-pr-review
          eslint_flags: '. --ext .js,.jsx,.ts,.tsx'

      - name: 🏃‍♂️ Run ESLint PR
        if: github.event_name != 'pull_request'
        run: pnpm run lint
````

## File: .github/workflows/new-app-version.yml
````yaml
# 🔗 Links:
# Source file: https://github.com/obytes/react-native-template-obytes/blob/master/.github/workflows/lint-ts.yml
# Starter releasing process: https://starter.obytes.com/ci-cd/app-releasing-process/

# ✍️ Description:
# This workflow is used to create a new version of the app and push a new tag to the repo.
# As this workflow will push code to the repo, we set up GitHub Bot as a Git user.
# This Workflow need to be triggered manually from the Actions tab in the repo.
#         1. Choose your release type (patch, minor, major)
#         2. The workflow will run the np-release script which runs the following steps:
#             - Bump the version in package.json based on the release type using np
#             - Run the prebuild of the app to align the package.json version with the native code
#             - Create a new tag with the new version
#             - Push the new tag to the repo
#

# 🚨 GITHUB SECRETS REQUIRED:
#         - GH_TOKEN: A GitHub token with write repo access.
#           You can generate one from here: https://docs.github.com/en/enterprise-server@3.6/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
#           make sure to add it to the repo secrets with the name GH_TOKEN

name: New App Version

on:
  workflow_dispatch:
    inputs:
      release-type:
        type: choice
        description: 'Release type (one of): patch, minor, major'
        required: true
        default: 'patch'
        options:
          - patch
          - minor
          - major

jobs:
  release:
    name: Create New Version and push new tag
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - name: 🔍 GH_TOKEN
        if: env.GH_TOKEN == ''
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: echo "GH_TOKEN=${GITHUB_TOKEN}" >> $GITHUB_ENV
      - name: 📦 Checkout project repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          token: ${{ secrets.GH_TOKEN }}

      - name: 📝 Git User Setup
        run: |
          git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git config --global user.name "github-actions[bot]"

      - name: 📦 Setup Node + PNPM + install deps
        uses: ./.github/actions/setup-node-pnpm-install

      - name: 🏃‍♂️ Run App release
        run: |
          pnpm app-release ${{ github.event.inputs.release-type }}
````

## File: .github/workflows/new-github-release.yml
````yaml
# 🔗 Links:
# Source file: https://github.com/obytes/react-native-template-obytes/blob/master/.github/workflows/new-github-release.yml
# Starter releasing process: https://starter.obytes.com/ci-cd/app-releasing-process/

# ✍️ Description:
# This workflow will be triggered automatically after the new app version workflow has been executed successfully.
# It will create a new GitHub release with the new app version and the release notes.

# 🚨 GITHUB SECRETS REQUIRED: None

name: New GitHub Release

on:
  push:
    tags:
      - '*'

jobs:
  release:
    name: New GitHub Release
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - name: 📦 Checkout project repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: 🏃‍♂️Create A Draft Github Release
        uses: ncipollo/release-action@v1
        with:
          generateReleaseNotes: true
          draft: false
````

## File: .github/workflows/stale.yml
````yaml
name: Mark stale issues and pull requests

on:
  schedule:
    - cron: '0 0 * * *'

permissions:
  contents: read
  pull-requests: write
  
jobs:
  stale:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/stale@v1
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
          stale-issue-message: 'This issue is stale because it has been open 90 days with no activity. Remove stale label or comment or this will be closed in 14 days'
          stale-pr-message: 'This PR is stale because it has been open 90 days with no activity. Remove stale label or comment or this will be closed in 14 days'
          stale-issue-label: 'no-issue-activity'
          stale-pr-label: 'no-pr-activity'
          days-before-stale: 60
          days-before-close: 14
````

## File: .github/workflows/test.yml
````yaml
# 🔗 Links:
# Source file: https://github.com/obytes/react-native-template-obytes/blob/master/.github/workflows/test.yml

# ✍️ Description:
# This action is used to run unit tests
# Runs on pull requests and pushes to  the main/master branches
# Based on the event type:
#   - If it's a pull request, it will run the tests and post a comment with coverage details.
#   - If it's a push to main/master, it will run the tests and add the check to the commit.

# 🚨 GITHUB SECRETS REQUIRED: NONE

name: Tests (jest)

on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main, master]

jobs:
  test:
    name: Tests (jest)
    runs-on: ubuntu-latest

    steps:
      - name: 📦 Checkout project repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: 📦 Setup Node + PNPM + install deps
        uses: ./.github/actions/setup-node-pnpm-install

      - name: 🏃‍♂️ Run Tests
        run: pnpm run test:ci

      - name: Jest Coverage Comment
        uses: MishaKav/jest-coverage-comment@main
        if: (success() || failure()) && github.event_name == 'pull_request'
        with:
          coverage-summary-path: ./coverage/coverage-summary.json
          summary-title: '💯 Test Coverage'
          badge-title: Coverage
          create-new-comment: false
          junitxml-title: 😎 Tests Results
          junitxml-path: ./coverage/jest-junit.xml
          coverage-title: 👀 Tests Details
          coverage-path: ./coverage/coverage.txt
          report-only-changed-files: true
````

## File: .github/workflows/type-check.yml
````yaml
# 🔗 Links:
# Source file: https://github.com/obytes/react-native-template-obytes/blob/master/.github/workflows/type-check.yml

# ✍️ Description:
# This action is used to run the type-check on the project.
# Runs on pull requests and pushes to  the main/master branches
# Based on the event type:
#   - If it's a pull request, it will run type checking, then add the check to the PR as well as annotate the code with the errors using reviewdog.
#   - If it's a push to main/master, it will run the type checking and fail if there are any errors.

# 🚨 GITHUB SECRETS REQUIRED: NONE

name: Type Check (tsc)

on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main, master]

permissions:
  contents: read
  pull-requests: write

jobs:
  type-check:
    name: Type Check (tsc)
    runs-on: ubuntu-latest
    steps:
      - name: 📦 Checkout project repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: 📦 Setup Node + PNPM + install deps
        uses: ./.github/actions/setup-node-pnpm-install

      - name: 📦 Install Reviewdog
        if: github.event_name == 'pull_request'
        uses: reviewdog/action-setup@v1

      - name: 🏃‍♂️ Run TypeScript PR # Reviewdog tsc errorformat: %f:%l:%c - error TS%n: %m
        # We only need to add the reviewdog step if it's a pull request
        if: github.event_name == 'pull_request'
        run: |
          pnpm type-check | reviewdog -name="tsc" -efm="%f(%l,%c): error TS%n: %m" -reporter="github-pr-review" -filter-mode="nofilter" -fail-on-error -tee
        env:
          REVIEWDOG_GITHUB_API_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name:
          🏃‍♂️ Run TypeScript Commit
          # If it's not a Pull Request then we just need to run the type-check
        if: github.event_name != 'pull_request'
        run: pnpm type-check
````

## File: .github/ISSUE_TEMPLATE.md
````markdown
# Summary:

## Steps to reproduce:

## Expected behavior:

## Additional notes:

#### Tasks

- [ ] Task 1
- [ ] Task 2
- [ ] Task 3
````

## File: .github/PULL_REQUEST_TEMPLATE.md
````markdown
## What does this do?

<!---
_Describe what your changes **do**; did you add a $COOL_FEATURE? Write about it here._
-->

## Why did you do this?

<!---
_**Why** did you make these changes? This is your opportunity to provide the rationale that drove the design of your solution._
-->

## Who/what does this impact?

<!---
_Does your code affect something downstream? Are there side effects people should know about? Tag any developers that should be kept abreast of this change._
-->

## How did you test this?

<!---
_How did you test your change? Document it here._
-->
````

## File: .husky/.gitignore
````
_
````

## File: .husky/commit-msg
````
pnpm commitlint --edit $1
````

## File: .husky/common.sh
````bash
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Workaround for Windows 10, Git Bash and Yarn
if command_exists winpty && test -t 1; then
    exec </dev/tty
fi
````

## File: .husky/post-merge
````
function changed {
    git diff --name-only HEAD@{1} HEAD | grep "^$1" >/dev/null 2>&1
}

echo 'Checking for changes in pnpm-lock.yml...'

if changed 'pnpm-lock.yml'; then
    echo "📦 pnpm-lock.yml changed. Run pnpm install to bring your dependencies up to date."
    pnpm install
fi

echo 'You are up to date :)'

echo 'If necessary, you can run pnpm prebuild to generate native code.'

exit 0
````

## File: .husky/pre-commit
````
. "$(dirname "$0")/common.sh"


echo "===\n>> Checking branch name..."

# Check if branch protection is enabled
if [[ -z $SKIP_BRANCH_PROTECTION ]]; then
    BRANCH=$(git rev-parse --abbrev-ref HEAD)
    PROTECTED_BRANCHES="^(main|master)"

    if [[ $BRANCH =~ $PROTECTED_BRANCHES ]]; then
        echo ">> Direct commits to the $BRANCH branch are not allowed. Please choose a new branch name."
        exit 1
    fi
else
    echo ">> Skipping branch protection."
fi

echo ">> Finish checking branch name"
echo ">> Linting your files and fixing them if needed..."

pnpm type-check
pnpm lint-staged
````

## File: .maestro/app/create-post.yaml
````yaml
appId: ${APP_ID}
env:
  Title: 'Post title'
  CONTENT:
    "It is a long established fact that a reader will be distracted by the\
    \ readable content of a page when looking at its layout. The point of using Lorem\
    \ Ipsum is that it has a more-or-less normal distribution of letters, as opposed\
    \ to using"
---
- launchApp
- runFlow: ../utils/onboarding-and-login.yaml
- assertVisible: 'Feed'
- assertVisible: 'Create'
- tapOn: 'Create'
- assertVisible: 'Add Post'
- tapOn:
    id: 'title'
- inputText: ${Title}
- tapOn:
    id: 'body-input'
- inputText: 'short content'
- tapOn:
    id: 'add-post-button'
- assertVisible: 'String must contain at least 120 character(s)'
- inputText: ${CONTENT}
- runFlow: ../utils/hide-keyboard.yaml
- tapOn:
    id: 'add-post-button'
- assertVisible: 'Post added successfully'
````

## File: .maestro/app/tabs.yaml
````yaml
appId: ${APP_ID}
env:
  Name: 'User'
  EMAIL: 'user@test.com'
  PASSWORD: 'password'
---
- launchApp
- runFlow: ../utils/onboarding-and-login.yaml
- assertVisible: 'Feed'
- assertVisible:
    id: 'style-tab'
- tapOn:
    id: 'style-tab'
- assertVisible: 'Typography'
- tapOn:
    id: 'settings-tab'
- assertVisible: 'Settings'
- scroll
- assertVisible: 'Logout'
````

## File: .maestro/auth/login-with-validation.yaml
````yaml
appId: ${APP_ID}
env:
  Name: 'User'
  EMAIL: 'user@test.com'
  PASSWORD: 'password'
---
- launchApp
- runFlow:
    when:
      visible: 'Obytes Starter'
    file: ../utils/onboarding.yaml
- assertVisible: 'Sign In'
- assertVisible:
    id: 'login-button'
- tapOn:
    id: 'login-button'
- assertVisible: 'Email is required'
- assertVisible: 'Password is required'
- tapOn:
    id: 'name'
- inputText: ${Name}
- runFlow: ../utils/hide-keyboard.yaml
- tapOn:
    id: 'email-input'
- inputText: 'email'
- assertVisible: 'Invalid email format'
- inputText: ${EMAIL}
- runFlow: ../utils/hide-keyboard.yaml
- tapOn:
    id: 'password-input'
- inputText: ${PASSWORD}
- runFlow: ../utils/hide-keyboard.yaml
- tapOn:
    id: 'login-button'
- assertVisible: 'Feed'
````

## File: .maestro/auth/onboarding.yaml
````yaml
appId: ${APP_ID}
---
- clearState
- launchApp
- assertVisible: "Obytes Starter"
- assertVisible: "Let's Get Started "
- tapOn: "Let's Get Started "
- assertVisible: "Sign In"
````

## File: .maestro/utils/hide-keyboard-android.yaml
````yaml
appId: ${APP_ID}
tags:
  - util
---
- hideKeyboard
````

## File: .maestro/utils/hide-keyboard-ios.yaml
````yaml
appId: ${APP_ID}
tags:
  - util
---
- tapOn:
    id: "Return" # Keyboard Return
````

## File: .maestro/utils/hide-keyboard.yaml
````yaml
appId: ${APP_ID}
tags:
  - util
---
- runFlow:
    when:
      platform: iOS
    file: ./hide-keyboard-ios.yaml
- runFlow:
    when:
      platform: Android
    file: ./hide-keyboard-android.yaml
````

## File: .maestro/utils/login.yaml
````yaml
appId: ${APP_ID}
env:
  Name: "User"
  EMAIL: "user@test.com"
  PASSWORD: "password"
tags:
  - util
---
- tapOn:
    id: "name"
- inputText: ${Name}
- tapOn:
    id: "email-input"
- inputText: ${EMAIL}
- runFlow: ../utils/hide-keyboard.yaml
- tapOn:
    id: "password-input"
- inputText: ${PASSWORD}
- runFlow: ../utils/hide-keyboard.yaml
- tapOn:
    id: "login-button"
- assertVisible: "Typography"
````

## File: .maestro/utils/onboarding-and-login.yaml
````yaml
appId: ${APP_ID}
tags:
  - util
---
- runFlow:
    when:
      visible: "Obytes Starter"
    file: onboarding.yaml
- runFlow:
    when:
      visible: Sign In
    file: login.yaml
````

## File: .maestro/utils/onboarding.yaml
````yaml
appId: ${APP_ID}
tags:
  - util
---
- assertVisible: 'Obytes Starter'
- assertVisible: "Let's Get Started "
- tapOn: "Let's Get Started "
- assertVisible: 'Sign In'
````

## File: .maestro/config.yaml
````yaml
flows:
  - auth/*
  - app/*

excludeTags:
  - util

executionOrder:
    continueOnFailure: false # default is true
    flowsOrder:
        - onboarding
        - login-with-validation
````

## File: android/app/src/debug/AndroidManifest.xml
````xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>

    <application android:usesCleartextTraffic="true" tools:targetApi="28" tools:ignore="GoogleAppIndexingWarning" tools:replace="android:usesCleartextTraffic" />
</manifest>
````

## File: android/app/src/main/java/com/obytes/development/MainActivity.kt
````kotlin
package com.obytes.development
import expo.modules.splashscreen.SplashScreenManager

import android.os.Build
import android.os.Bundle

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

import expo.modules.ReactActivityDelegateWrapper

class MainActivity : ReactActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    // Set the theme to AppTheme BEFORE onCreate to support
    // coloring the background, status bar, and navigation bar.
    // This is required for expo-splash-screen.
    // setTheme(R.style.AppTheme);
    // @generated begin expo-splashscreen - expo prebuild (DO NOT MODIFY) sync-f3ff59a738c56c9a6119210cb55f0b613eb8b6af
    SplashScreenManager.registerOnActivity(this)
    // @generated end expo-splashscreen
    super.onCreate(null)
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "main"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate {
    return ReactActivityDelegateWrapper(
          this,
          BuildConfig.IS_NEW_ARCHITECTURE_ENABLED,
          object : DefaultReactActivityDelegate(
              this,
              mainComponentName,
              fabricEnabled
          ){})
  }

  /**
    * Align the back button behavior with Android S
    * where moving root activities to background instead of finishing activities.
    * @see <a href="https://developer.android.com/reference/android/app/Activity#onBackPressed()">onBackPressed</a>
    */
  override fun invokeDefaultOnBackPressed() {
      if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R) {
          if (!moveTaskToBack(false)) {
              // For non-root activities, use the default implementation to finish them.
              super.invokeDefaultOnBackPressed()
          }
          return
      }

      // Use the default back button implementation on Android S
      // because it's doing more than [Activity.moveTaskToBack] in fact.
      super.invokeDefaultOnBackPressed()
  }
}
````

## File: android/app/src/main/java/com/obytes/development/MainApplication.kt
````kotlin
package com.obytes.development
import com.facebook.react.common.assets.ReactFontManager

import android.app.Application
import android.content.res.Configuration

import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.ReactHost
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.soloader.OpenSourceMergedSoMapping
import com.facebook.soloader.SoLoader

import expo.modules.ApplicationLifecycleDispatcher
import expo.modules.ReactNativeHostWrapper

class MainApplication : Application(), ReactApplication {

  override val reactNativeHost: ReactNativeHost = ReactNativeHostWrapper(
        this,
        object : DefaultReactNativeHost(this) {
          override fun getPackages(): List<ReactPackage> {
            val packages = PackageList(this).packages
            // Packages that cannot be autolinked yet can be added manually here, for example:
            // packages.add(MyReactNativePackage())
            return packages
          }

          override fun getJSMainModuleName(): String = ".expo/.virtual-metro-entry"

          override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

          override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
          override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }
  )

  override val reactHost: ReactHost
    get() = ReactNativeHostWrapper.createReactHost(applicationContext, reactNativeHost)

  override fun onCreate() {
    super.onCreate()
    // @generated begin xml-fonts-init - expo prebuild (DO NOT MODIFY) sync-da39a3ee5e6b4b0d3255bfef95601890afd80709

    // @generated end xml-fonts-init
    SoLoader.init(this, OpenSourceMergedSoMapping)
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      load()
    }
    ApplicationLifecycleDispatcher.onApplicationCreate(this)
  }

  override fun onConfigurationChanged(newConfig: Configuration) {
    super.onConfigurationChanged(newConfig)
    ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig)
  }
}
````

## File: android/app/src/main/res/drawable/ic_launcher_background.xml
````xml
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
  <item android:drawable="@color/splashscreen_background"/>
  <item>
    <bitmap android:gravity="center" android:src="@drawable/splashscreen_logo"/>
  </item>
</layer-list>
````

## File: android/app/src/main/res/drawable/rn_edit_text_material.xml
````xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Copyright (C) 2014 The Android Open Source Project

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
-->
<inset xmlns:android="http://schemas.android.com/apk/res/android"
       android:insetLeft="@dimen/abc_edit_text_inset_horizontal_material"
       android:insetRight="@dimen/abc_edit_text_inset_horizontal_material"
       android:insetTop="@dimen/abc_edit_text_inset_top_material"
       android:insetBottom="@dimen/abc_edit_text_inset_bottom_material"
       >

    <selector>
        <!--
          This file is a copy of abc_edit_text_material (https://bit.ly/3k8fX7I).
          The item below with state_pressed="false" and state_focused="false" causes a NullPointerException.
          NullPointerException:tempt to invoke virtual method 'android.graphics.drawable.Drawable android.graphics.drawable.Drawable$ConstantState.newDrawable(android.content.res.Resources)'

          <item android:state_pressed="false" android:state_focused="false" android:drawable="@drawable/abc_textfield_default_mtrl_alpha"/>

          For more info, see https://bit.ly/3CdLStv (react-native/pull/29452) and https://bit.ly/3nxOMoR.
        -->
        <item android:state_enabled="false" android:drawable="@drawable/abc_textfield_default_mtrl_alpha"/>
        <item android:drawable="@drawable/abc_textfield_activated_mtrl_alpha"/>
    </selector>

</inset>
````

## File: android/app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml
````xml
<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/iconBackground"/>
    <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
</adaptive-icon>
````

## File: android/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml
````xml
<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/iconBackground"/>
    <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
</adaptive-icon>
````

## File: android/app/src/main/res/values/colors.xml
````xml
<resources>
  <color name="splashscreen_background">#2E3C4B</color>
  <color name="iconBackground">#2E3C4B</color>
  <color name="colorPrimary">#023c69</color>
  <color name="colorPrimaryDark">#2E3C4B</color>
</resources>
````

## File: android/app/src/main/res/values/strings.xml
````xml
<resources>
  <string name="app_name">ObytesApp</string>
  <string name="expo_system_ui_user_interface_style" translatable="false">automatic</string>
  <string name="expo_splash_screen_resize_mode" translatable="false">contain</string>
  <string name="expo_splash_screen_status_bar_translucent" translatable="false">false</string>
</resources>
````

## File: android/app/src/main/res/values/styles.xml
````xml
<resources xmlns:tools="http://schemas.android.com/tools">
  <style name="AppTheme" parent="Theme.EdgeToEdge">
    <item name="android:editTextBackground">@drawable/rn_edit_text_material</item>
    <item name="colorPrimary">@color/colorPrimary</item>
  </style>
  <style name="Theme.App.SplashScreen" parent="Theme.SplashScreen">
    <item name="windowSplashScreenBackground">@color/splashscreen_background</item>
    <item name="windowSplashScreenAnimatedIcon">@drawable/splashscreen_logo</item>
    <item name="postSplashScreenTheme">@style/AppTheme</item>
  </style>
</resources>
````

## File: android/app/src/main/res/values-night/colors.xml
````xml
<resources/>
````

## File: android/app/src/main/AndroidManifest.xml
````xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  <uses-permission android:name="android.permission.INTERNET"/>
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
  <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
  <uses-permission android:name="android.permission.VIBRATE"/>
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
  <queries>
    <intent>
      <action android:name="android.intent.action.VIEW"/>
      <category android:name="android.intent.category.BROWSABLE"/>
      <data android:scheme="https"/>
    </intent>
  </queries>
  <application android:name=".MainApplication" android:label="@string/app_name" android:icon="@mipmap/ic_launcher" android:roundIcon="@mipmap/ic_launcher_round" android:allowBackup="true" android:theme="@style/AppTheme" android:supportsRtl="true">
    <meta-data android:name="expo.modules.updates.ENABLED" android:value="false"/>
    <meta-data android:name="expo.modules.updates.EXPO_UPDATES_CHECK_ON_LAUNCH" android:value="ALWAYS"/>
    <meta-data android:name="expo.modules.updates.EXPO_UPDATES_LAUNCH_WAIT_MS" android:value="0"/>
    <activity android:name=".MainActivity" android:configChanges="keyboard|keyboardHidden|orientation|screenSize|screenLayout|uiMode|locale|layoutDirection" android:launchMode="singleTask" android:windowSoftInputMode="adjustResize" android:theme="@style/Theme.App.SplashScreen" android:exported="true" android:screenOrientation="portrait">
      <intent-filter>
        <action android:name="android.intent.action.MAIN"/>
        <category android:name="android.intent.category.LAUNCHER"/>
      </intent-filter>
      <intent-filter>
        <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:scheme="obytesApp"/>
        <data android:scheme="exp+obytesapp"/>
      </intent-filter>
    </activity>
  </application>
</manifest>
````

## File: android/app/build.gradle
````
apply plugin: "com.android.application"
apply plugin: "org.jetbrains.kotlin.android"
apply plugin: "com.facebook.react"

def projectRoot = rootDir.getAbsoluteFile().getParentFile().getAbsolutePath()

/**
 * This is the configuration block to customize your React Native Android app.
 * By default you don't need to apply any configuration, just uncomment the lines you need.
 */
react {
    entryFile = file(["node", "-e", "require('expo/scripts/resolveAppEntry')", projectRoot, "android", "absolute"].execute(null, rootDir).text.trim())
    reactNativeDir = new File(["node", "--print", "require.resolve('react-native/package.json')"].execute(null, rootDir).text.trim()).getParentFile().getAbsoluteFile()
    hermesCommand = new File(["node", "--print", "require.resolve('react-native/package.json')"].execute(null, rootDir).text.trim()).getParentFile().getAbsolutePath() + "/sdks/hermesc/%OS-BIN%/hermesc"
    codegenDir = new File(["node", "--print", "require.resolve('@react-native/codegen/package.json', { paths: [require.resolve('react-native/package.json')] })"].execute(null, rootDir).text.trim()).getParentFile().getAbsoluteFile()

    enableBundleCompression = (findProperty('android.enableBundleCompression') ?: false).toBoolean()
    // Use Expo CLI to bundle the app, this ensures the Metro config
    // works correctly with Expo projects.
    cliFile = new File(["node", "--print", "require.resolve('@expo/cli', { paths: [require.resolve('expo/package.json')] })"].execute(null, rootDir).text.trim())
    bundleCommand = "export:embed"

    /* Folders */
     //   The root of your project, i.e. where "package.json" lives. Default is '../..'
    // root = file("../../")
    //   The folder where the react-native NPM package is. Default is ../../node_modules/react-native
    // reactNativeDir = file("../../node_modules/react-native")
    //   The folder where the react-native Codegen package is. Default is ../../node_modules/@react-native/codegen
    // codegenDir = file("../../node_modules/@react-native/codegen")

    /* Variants */
    //   The list of variants to that are debuggable. For those we're going to
    //   skip the bundling of the JS bundle and the assets. By default is just 'debug'.
    //   If you add flavors like lite, prod, etc. you'll have to list your debuggableVariants.
    // debuggableVariants = ["liteDebug", "prodDebug"]

    /* Bundling */
    //   A list containing the node command and its flags. Default is just 'node'.
    // nodeExecutableAndArgs = ["node"]

    //
    //   The path to the CLI configuration file. Default is empty.
    // bundleConfig = file(../rn-cli.config.js)
    //
    //   The name of the generated asset file containing your JS bundle
    // bundleAssetName = "MyApplication.android.bundle"
    //
    //   The entry file for bundle generation. Default is 'index.android.js' or 'index.js'
    // entryFile = file("../js/MyApplication.android.js")
    //
    //   A list of extra flags to pass to the 'bundle' commands.
    //   See https://github.com/react-native-community/cli/blob/main/docs/commands.md#bundle
    // extraPackagerArgs = []

    /* Hermes Commands */
    //   The hermes compiler command to run. By default it is 'hermesc'
    // hermesCommand = "$rootDir/my-custom-hermesc/bin/hermesc"
    //
    //   The list of flags to pass to the Hermes compiler. By default is "-O", "-output-source-map"
    // hermesFlags = ["-O", "-output-source-map"]

    /* Autolinking */
    autolinkLibrariesWithApp()
}

/**
 * Set this to true to Run Proguard on Release builds to minify the Java bytecode.
 */
def enableProguardInReleaseBuilds = (findProperty('android.enableProguardInReleaseBuilds') ?: false).toBoolean()

/**
 * The preferred build flavor of JavaScriptCore (JSC)
 *
 * For example, to use the international variant, you can use:
 * `def jscFlavor = 'org.webkit:android-jsc-intl:+'`
 *
 * The international variant includes ICU i18n library and necessary data
 * allowing to use e.g. `Date.toLocaleString` and `String.localeCompare` that
 * give correct results when using with locales other than en-US. Note that
 * this variant is about 6MiB larger per architecture than default.
 */
def jscFlavor = 'io.github.react-native-community:jsc-android:2026004.+'

android {
    ndkVersion rootProject.ext.ndkVersion

    buildToolsVersion rootProject.ext.buildToolsVersion
    compileSdk rootProject.ext.compileSdkVersion

    namespace 'com.obytes.development'
    defaultConfig {
        applicationId 'com.obytes.development'
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 1
        versionName "8.0.0"
    }
    signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
    }
    buildTypes {
        debug {
            signingConfig signingConfigs.debug
        }
        release {
            // Caution! In production, you need to generate your own keystore file.
            // see https://reactnative.dev/docs/signed-apk-android.
            signingConfig signingConfigs.debug
            shrinkResources (findProperty('android.enableShrinkResourcesInReleaseBuilds')?.toBoolean() ?: false)
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
            crunchPngs (findProperty('android.enablePngCrunchInReleaseBuilds')?.toBoolean() ?: true)
        }
    }
    packagingOptions {
        jniLibs {
            useLegacyPackaging (findProperty('expo.useLegacyPackaging')?.toBoolean() ?: false)
        }
    }
    androidResources {
        ignoreAssetsPattern '!.svn:!.git:!.ds_store:!*.scc:!CVS:!thumbs.db:!picasa.ini:!*~'
    }
}

// Apply static values from `gradle.properties` to the `android.packagingOptions`
// Accepts values in comma delimited lists, example:
// android.packagingOptions.pickFirsts=/LICENSE,**/picasa.ini
["pickFirsts", "excludes", "merges", "doNotStrip"].each { prop ->
    // Split option: 'foo,bar' -> ['foo', 'bar']
    def options = (findProperty("android.packagingOptions.$prop") ?: "").split(",");
    // Trim all elements in place.
    for (i in 0..<options.size()) options[i] = options[i].trim();
    // `[] - ""` is essentially `[""].filter(Boolean)` removing all empty strings.
    options -= ""

    if (options.length > 0) {
        println "android.packagingOptions.$prop += $options ($options.length)"
        // Ex: android.packagingOptions.pickFirsts += '**/SCCS/**'
        options.each {
            android.packagingOptions[prop] += it
        }
    }
}

dependencies {
    // The version of react-native is set by the React Native Gradle Plugin
    implementation("com.facebook.react:react-android")

    def isGifEnabled = (findProperty('expo.gif.enabled') ?: "") == "true";
    def isWebpEnabled = (findProperty('expo.webp.enabled') ?: "") == "true";
    def isWebpAnimatedEnabled = (findProperty('expo.webp.animated') ?: "") == "true";

    if (isGifEnabled) {
        // For animated gif support
        implementation("com.facebook.fresco:animated-gif:${expoLibs.versions.fresco.get()}")
    }

    if (isWebpEnabled) {
        // For webp support
        implementation("com.facebook.fresco:webpsupport:${expoLibs.versions.fresco.get()}")
        if (isWebpAnimatedEnabled) {
            // Animated webp support
            implementation("com.facebook.fresco:animated-webp:${expoLibs.versions.fresco.get()}")
        }
    }

    if (hermesEnabled.toBoolean()) {
        implementation("com.facebook.react:hermes-android")
    } else {
        implementation jscFlavor
    }
}
````

## File: android/app/proguard-rules.pro
````
# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# react-native-reanimated
-keep class com.swmansion.reanimated.** { *; }
-keep class com.facebook.react.turbomodule.** { *; }

# Add any project specific keep options here:
````

## File: android/gradle/wrapper/gradle-wrapper.properties
````
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-8.13-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
````

## File: android/.gitignore
````
# OSX
#
.DS_Store

# Android/IntelliJ
#
build/
.idea
.gradle
local.properties
*.iml
*.hprof
.cxx/

# Bundle artifacts
*.jsbundle
````

## File: android/build.gradle
````
// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
  repositories {
    google()
    mavenCentral()
  }
  dependencies {
    classpath('com.android.tools.build:gradle')
    classpath('com.facebook.react:react-native-gradle-plugin')
    classpath('org.jetbrains.kotlin:kotlin-gradle-plugin')
  }
}

def reactNativeAndroidDir = new File(
  providers.exec {
    workingDir(rootDir)
    commandLine("node", "--print", "require.resolve('react-native/package.json')")
  }.standardOutput.asText.get().trim(),
  "../android"
)

allprojects {
  repositories {
    maven {
      // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
      url(reactNativeAndroidDir)
    }

    google()
    mavenCentral()
    maven { url 'https://www.jitpack.io' }
  }
}

apply plugin: "expo-root-project"
apply plugin: "com.facebook.react.rootproject"
````

## File: android/gradle.properties
````
# Project-wide Gradle settings.

# IDE (e.g. Android Studio) users:
# Gradle settings configured through the IDE *will override*
# any settings specified in this file.

# For more details on how to configure your build environment visit
# http://www.gradle.org/docs/current/userguide/build_environment.html

# Specifies the JVM arguments used for the daemon process.
# The setting is particularly useful for tweaking memory settings.
# Default value: -Xmx512m -XX:MaxMetaspaceSize=256m
org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m

# When configured, Gradle will run in incubating parallel mode.
# This option should only be used with decoupled projects. More details, visit
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects
# org.gradle.parallel=true

# AndroidX package structure to make it clearer which packages are bundled with the
# Android operating system, and which are packaged with your app's APK
# https://developer.android.com/topic/libraries/support-library/androidx-rn
android.useAndroidX=true

# Enable AAPT2 PNG crunching
android.enablePngCrunchInReleaseBuilds=true

# Use this property to specify which architecture you want to build.
# You can also override it from the CLI using
# ./gradlew <task> -PreactNativeArchitectures=x86_64
reactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64

# Use this property to enable support to the new architecture.
# This will allow you to use TurboModules and the Fabric render in
# your application. You should enable this flag either if you want
# to write custom TurboModules/Fabric components OR use libraries that
# are providing them.
newArchEnabled=true

# Use this property to enable or disable the Hermes JS engine.
# If set to false, you will be using JSC instead.
hermesEnabled=true

# Enable GIF support in React Native images (~200 B increase)
expo.gif.enabled=true
# Enable webp support in React Native images (~85 KB increase)
expo.webp.enabled=true
# Enable animated webp support (~3.4 MB increase)
# Disabled by default because iOS doesn't support animated webp
expo.webp.animated=false

# Enable network inspector
EX_DEV_CLIENT_NETWORK_INSPECTOR=true

# Use legacy packaging to compress native libraries in the resulting APK.
expo.useLegacyPackaging=false

# Whether the app is configured to use edge-to-edge via the app config or `react-native-edge-to-edge` plugin
expo.edgeToEdgeEnabled=true
````

## File: android/gradlew
````
#!/bin/sh

#
# Copyright © 2015-2021 the original authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# SPDX-License-Identifier: Apache-2.0
#

##############################################################################
#
#   Gradle start up script for POSIX generated by Gradle.
#
#   Important for running:
#
#   (1) You need a POSIX-compliant shell to run this script. If your /bin/sh is
#       noncompliant, but you have some other compliant shell such as ksh or
#       bash, then to run this script, type that shell name before the whole
#       command line, like:
#
#           ksh Gradle
#
#       Busybox and similar reduced shells will NOT work, because this script
#       requires all of these POSIX shell features:
#         * functions;
#         * expansions «$var», «${var}», «${var:-default}», «${var+SET}»,
#           «${var#prefix}», «${var%suffix}», and «$( cmd )»;
#         * compound commands having a testable exit status, especially «case»;
#         * various built-in commands including «command», «set», and «ulimit».
#
#   Important for patching:
#
#   (2) This script targets any POSIX shell, so it avoids extensions provided
#       by Bash, Ksh, etc; in particular arrays are avoided.
#
#       The "traditional" practice of packing multiple parameters into a
#       space-separated string is a well documented source of bugs and security
#       problems, so this is (mostly) avoided, by progressively accumulating
#       options in "$@", and eventually passing that to Java.
#
#       Where the inherited environment variables (DEFAULT_JVM_OPTS, JAVA_OPTS,
#       and GRADLE_OPTS) rely on word-splitting, this is performed explicitly;
#       see the in-line comments for details.
#
#       There are tweaks for specific operating systems such as AIX, CygWin,
#       Darwin, MinGW, and NonStop.
#
#   (3) This script is generated from the Groovy template
#       https://github.com/gradle/gradle/blob/HEAD/platforms/jvm/plugins-application/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt
#       within the Gradle project.
#
#       You can find Gradle at https://github.com/gradle/gradle/.
#
##############################################################################

# Attempt to set APP_HOME

# Resolve links: $0 may be a link
app_path=$0

# Need this for daisy-chained symlinks.
while
    APP_HOME=${app_path%"${app_path##*/}"}  # leaves a trailing /; empty if no leading path
    [ -h "$app_path" ]
do
    ls=$( ls -ld "$app_path" )
    link=${ls#*' -> '}
    case $link in             #(
      /*)   app_path=$link ;; #(
      *)    app_path=$APP_HOME$link ;;
    esac
done

# This is normally unused
# shellcheck disable=SC2034
APP_BASE_NAME=${0##*/}
# Discard cd standard output in case $CDPATH is set (https://github.com/gradle/gradle/issues/25036)
APP_HOME=$( cd -P "${APP_HOME:-./}" > /dev/null && printf '%s\n' "$PWD" ) || exit

# Use the maximum available, or set MAX_FD != -1 to use that value.
MAX_FD=maximum

warn () {
    echo "$*"
} >&2

die () {
    echo
    echo "$*"
    echo
    exit 1
} >&2

# OS specific support (must be 'true' or 'false').
cygwin=false
msys=false
darwin=false
nonstop=false
case "$( uname )" in                #(
  CYGWIN* )         cygwin=true  ;; #(
  Darwin* )         darwin=true  ;; #(
  MSYS* | MINGW* )  msys=true    ;; #(
  NONSTOP* )        nonstop=true ;;
esac

CLASSPATH=$APP_HOME/gradle/wrapper/gradle-wrapper.jar


# Determine the Java command to use to start the JVM.
if [ -n "$JAVA_HOME" ] ; then
    if [ -x "$JAVA_HOME/jre/sh/java" ] ; then
        # IBM's JDK on AIX uses strange locations for the executables
        JAVACMD=$JAVA_HOME/jre/sh/java
    else
        JAVACMD=$JAVA_HOME/bin/java
    fi
    if [ ! -x "$JAVACMD" ] ; then
        die "ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
    fi
else
    JAVACMD=java
    if ! command -v java >/dev/null 2>&1
    then
        die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
    fi
fi

# Increase the maximum file descriptors if we can.
if ! "$cygwin" && ! "$darwin" && ! "$nonstop" ; then
    case $MAX_FD in #(
      max*)
        # In POSIX sh, ulimit -H is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC2039,SC3045
        MAX_FD=$( ulimit -H -n ) ||
            warn "Could not query maximum file descriptor limit"
    esac
    case $MAX_FD in  #(
      '' | soft) :;; #(
      *)
        # In POSIX sh, ulimit -n is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC2039,SC3045
        ulimit -n "$MAX_FD" ||
            warn "Could not set maximum file descriptor limit to $MAX_FD"
    esac
fi

# Collect all arguments for the java command, stacking in reverse order:
#   * args from the command line
#   * the main class name
#   * -classpath
#   * -D...appname settings
#   * --module-path (only if needed)
#   * DEFAULT_JVM_OPTS, JAVA_OPTS, and GRADLE_OPTS environment variables.

# For Cygwin or MSYS, switch paths to Windows format before running java
if "$cygwin" || "$msys" ; then
    APP_HOME=$( cygpath --path --mixed "$APP_HOME" )
    CLASSPATH=$( cygpath --path --mixed "$CLASSPATH" )

    JAVACMD=$( cygpath --unix "$JAVACMD" )

    # Now convert the arguments - kludge to limit ourselves to /bin/sh
    for arg do
        if
            case $arg in                                #(
              -*)   false ;;                            # don't mess with options #(
              /?*)  t=${arg#/} t=/${t%%/*}              # looks like a POSIX filepath
                    [ -e "$t" ] ;;                      #(
              *)    false ;;
            esac
        then
            arg=$( cygpath --path --ignore --mixed "$arg" )
        fi
        # Roll the args list around exactly as many times as the number of
        # args, so each arg winds up back in the position where it started, but
        # possibly modified.
        #
        # NB: a `for` loop captures its iteration list before it begins, so
        # changing the positional parameters here affects neither the number of
        # iterations, nor the values presented in `arg`.
        shift                   # remove old arg
        set -- "$@" "$arg"      # push replacement arg
    done
fi


# Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
DEFAULT_JVM_OPTS='"-Xmx64m" "-Xms64m"'

# Collect all arguments for the java command:
#   * DEFAULT_JVM_OPTS, JAVA_OPTS, JAVA_OPTS, and optsEnvironmentVar are not allowed to contain shell fragments,
#     and any embedded shellness will be escaped.
#   * For example: A user cannot expect ${Hostname} to be expanded, as it is an environment variable and will be
#     treated as '${Hostname}' itself on the command line.

set -- \
        "-Dorg.gradle.appname=$APP_BASE_NAME" \
        -classpath "$CLASSPATH" \
        org.gradle.wrapper.GradleWrapperMain \
        "$@"

# Stop when "xargs" is not available.
if ! command -v xargs >/dev/null 2>&1
then
    die "xargs is not available"
fi

# Use "xargs" to parse quoted args.
#
# With -n1 it outputs one arg per line, with the quotes and backslashes removed.
#
# In Bash we could simply go:
#
#   readarray ARGS < <( xargs -n1 <<<"$var" ) &&
#   set -- "${ARGS[@]}" "$@"
#
# but POSIX shell has neither arrays nor command substitution, so instead we
# post-process each arg (as a line of input to sed) to backslash-escape any
# character that might be a shell metacharacter, then use eval to reverse
# that process (while maintaining the separation between arguments), and wrap
# the whole thing up as a single "set" statement.
#
# This will of course break if any of these variables contains a newline or
# an unmatched quote.
#

eval "set -- $(
        printf '%s\n' "$DEFAULT_JVM_OPTS $JAVA_OPTS $GRADLE_OPTS" |
        xargs -n1 |
        sed ' s~[^-[:alnum:]+,./:=@_]~\\&~g; ' |
        tr '\n' ' '
    )" '"$@"'

exec "$JAVACMD" "$@"
````

## File: android/gradlew.bat
````
@rem
@rem Copyright 2015 the original author or authors.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem      https://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.
@rem
@rem SPDX-License-Identifier: Apache-2.0
@rem

@if "%DEBUG%"=="" @echo off
@rem ##########################################################################
@rem
@rem  Gradle startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%"=="" set DIRNAME=.
@rem This is normally unused
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%

@rem Resolve any "." and ".." in APP_HOME to make it shorter.
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi

@rem Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS="-Xmx64m" "-Xms64m"

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if %ERRORLEVEL% equ 0 goto execute

echo. 1>&2
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH. 1>&2
echo. 1>&2
echo Please set the JAVA_HOME variable in your environment to match the 1>&2
echo location of your Java installation. 1>&2

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto execute

echo. 1>&2
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME% 1>&2
echo. 1>&2
echo Please set the JAVA_HOME variable in your environment to match the 1>&2
echo location of your Java installation. 1>&2

goto fail

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\gradle\wrapper\gradle-wrapper.jar


@rem Execute Gradle
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" org.gradle.wrapper.GradleWrapperMain %*

:end
@rem End local scope for the variables with windows NT shell
if %ERRORLEVEL% equ 0 goto mainEnd

:fail
rem Set variable GRADLE_EXIT_CONSOLE if you need the _script_ return code instead of
rem the _cmd.exe /c_ return code!
set EXIT_CODE=%ERRORLEVEL%
if %EXIT_CODE% equ 0 set EXIT_CODE=1
if not ""=="%GRADLE_EXIT_CONSOLE%" exit %EXIT_CODE%
exit /b %EXIT_CODE%

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega
````

## File: android/settings.gradle
````
pluginManagement {
  def reactNativeGradlePlugin = new File(
    providers.exec {
      workingDir(rootDir)
      commandLine("node", "--print", "require.resolve('@react-native/gradle-plugin/package.json', { paths: [require.resolve('react-native/package.json')] })")
    }.standardOutput.asText.get().trim()
  ).getParentFile().absolutePath
  includeBuild(reactNativeGradlePlugin)
  
  def expoPluginsPath = new File(
    providers.exec {
      workingDir(rootDir)
      commandLine("node", "--print", "require.resolve('expo-modules-autolinking/package.json', { paths: [require.resolve('expo/package.json')] })")
    }.standardOutput.asText.get().trim(),
    "../android/expo-gradle-plugin"
  ).absolutePath
  includeBuild(expoPluginsPath)
}

plugins {
  id("com.facebook.react.settings")
  id("expo-autolinking-settings")
}

extensions.configure(com.facebook.react.ReactSettingsExtension) { ex ->
  if (System.getenv('EXPO_USE_COMMUNITY_AUTOLINKING') == '1') {
    ex.autolinkLibrariesFromCommand()
  } else {
    ex.autolinkLibrariesFromCommand(expoAutolinking.rnConfigCommand)
  }
}
expoAutolinking.useExpoModules()

rootProject.name = 'ObytesApp'

expoAutolinking.useExpoVersionCatalog()

include ':app'
includeBuild(expoAutolinking.reactNativeGradlePlugin)
````

## File: cli/clone-repo.js
````javascript
const { runCommand } = require('./utils.js');
const { consola } = require('consola');

const getLatestRelease = async () => {
  try {
    const repoData = await fetch(
      'https://api.github.com/repos/obytes/react-native-template-obytes/releases/latest'
    );
    const releaseData = await repoData.json();
    return releaseData.tag_name || 'master';
  } catch (error) {
    console.warn(
      'Failed to retrieve the latest release; will use the master branch instead'
    );
    return 'master';
  }
};

const cloneLastTemplateRelease = async (projectName) => {
  consola.start('Extracting last release number 👀');
  const latest_release = await getLatestRelease();
  consola.info(`Using Obytes starter ${latest_release}`);

  // create a new project based on obytes template
  const cloneStarter = `git clone -b ${latest_release} --depth=1   https://github.com/obytes/react-native-template-obytes.git ${projectName}`;
  await runCommand(cloneStarter, {
    loading: 'Extracting the starter template...',
    success: 'Starter extracted successfully',
    error: 'Failed to download and extract template',
  });
};

module.exports = {
  cloneLastTemplateRelease,
};
````

## File: cli/index.js
````javascript
#!/usr/bin/env node

const { consola } = require('consola');
const { showMoreDetails } = require('./utils.js');
const { cloneLastTemplateRelease } = require('./clone-repo.js');
const { setupProject, installDeps } = require('./setup-project.js');

const createObytesApp = async () => {
  consola.box('Obytes Starter\nPerfect React Native App Kickstart 🚀!');
  // get project name from command line
  const projectName = process.argv[2];
  // check if project name is provided
  if (!projectName) {
    consola.error(
      'Please provide a name for your project: `npx create-obytes-app@latest <project-name>`'
    );
    process.exit(1);
  }
  // clone the last release of the template from github
  await cloneLastTemplateRelease(projectName);

  // setup the project: remove unnecessary files, update package.json infos, name and  set version to 0.0.1 + add initial version to osMetadata
  await setupProject(projectName);

  // install project dependencies using pnpm
  await installDeps(projectName);

  // show instructions to run the project + link to the documentation
  showMoreDetails(projectName);
};

createObytesApp();
````

## File: cli/package.json
````json
{
  "name": "create-obytes-app",
  "version": "1.7.1",
  "description": "Obytes expo starter cli",
  "homepage": "https://github.com/obytes/react-native-template-obytes",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/obytes/react-native-template-obytes.git"
  },
  "main": "index.js",
  "scripts": {
    "start": "node ."
  },
  "bin": {
    "create-obytes-app": "index.js"
  },
  "files": [
    "index.js",
    "utils.js",
    "clone-repo.js",
    "setup-project.js"
  ],
  "dependencies": {
    "consola": "^3.2.3",
    "fs-extra": "^10.1.0"
  },
  "keywords": [
    "react-native",
    "expo",
    "template",
    "react-native-starter",
    "expo-starter",
    "react-native-boilerplate",
    "expo-boilerplate",
    "cli",
    "obytes"
  ]
}
````

## File: cli/README.md
````markdown
<p align="center">
    <img alt="React Native Template Obytes" src="https://user-images.githubusercontent.com/11137944/93101697-808bc580-f6a2-11ea-8ce3-482be6ca456a.png" width="200" />

</p>
<h1 align="center">
  React Native Template Obytes
</h1>

![expo](https://img.shields.io/github/package-json/dependency-version/obytes/react-native-template-obytes/expo?label=expo) ![GitHub Repo stars](https://img.shields.io/github/stars/obytes/react-native-template-obytes) ![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/obytes/react-native-template-obytes) ![GitHub issues](https://img.shields.io/github/issues/obytes/react-native-template-obytes) ![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/obytes/react-native-template-obytes)

📱 A template for your next React Native project 🚀, Made with developer experience and performance first: Expo,TypeScript,tailwindcss, Husky, Lint-Staged, expo-router, react-query, react-hook-form, I18n.

# 🚀 Quick start

```sh
npx create-obytes-app@latest MyApp

```

# Overview

As a team of experienced developers at Obytes Mobile Tribe, we have spent years refining our approach to building high-quality React Native applications. Our starter kit is based on the best practices and tools that we have found to be most effective in our own projects.

This starter kit has been thoroughly tested and proven successful in multiple projects over the past four years. It is regularly used by our team on a daily basis and has helped us deliver great results for our clients.

While our starter kit is heavily influenced by our own opinions and experiences, we have carefully selected the included solutions to address common challenges and meet the needs of the majority of use cases. We believe it offers a streamlined and efficient approach to building React Native apps, and we are confident that it can help others achieve their project goals as well.

## 🚀 Motivation

Our goal with this starter kit was to streamline the process of building React Native apps, both for our own team and for our clients. We wanted to create a resource that would allow us to create high-quality apps faster and with less effort, while ensuring that all of our projects adhere to the same code standards and architectural principles.

The benefits of using this starter kit are numerous. It helps our team easily switch between projects, as we can rely on a consistent foundation of code. It also allows us to focus on the business logic of each project rather than getting bogged down in boilerplate code. And, because it promotes consistency across projects, it makes it easier to maintain and scale our apps, as well as share code between teams.

Overall, our starter kit is designed to facilitate efficient and effective app development, helping us to bring the best possible products to our clients

## ✍️ Philosophy

When creating this starter kit, we had several guiding principles in mind::

- **🚀 Production-ready**: We wanted to ensure that this starter was ready for real-world use, providing a solid foundation for building production-grade apps.
- **🥷 Developer experience and productivity**: Our focus was on creating a starter that would enhance the developer experience and increase productivity.
- **🧩 Minimal code and dependencies**: We aimed to keep the codebase and dependencies as small as possible.
- **💪 Well-maintained third-party libraries**: We included only well-maintained and reliable third-party libraries, to provide stability and support for our projects.

## ⭐ key Features

- ✅ The latest version of Expo SDK, along with the Custom Dev client, to give you access to a range of powerful features and tools.
- 🎉 [TypeScript](https://www.typescriptlang.org/) for type checking, to help you catch bugs and improve code quality.
- 💅 A minimal UI kit built with [tailwindcss](https://www.nativewind.dev/), which provides a range of pre-defined classes for styling your app.
- ⚙️ Support for multiple environment builds, including Production, Staging, and Development, using Expo configuration.
- 🦊 Husky for Git Hooks, to automate your git hooks and enforce code standards.
- 💡 A clean project structure with Absolute Imports, to make it easier to navigate and manage your code.
- 🚫 Lint-staged for running linters and TypeScript checks on Git staged files, to ensure that your code is always up to standards.
- 🗂 VSCode recommended extensions, settings, and snippets to enhance the developer experience.
- ☂️ Pre-installed [Expo Router](https://docs.expo.dev/router/introduction/) with examples, to provide a comprehensive navigation solution for your app.
- 💫 An auth flow with [zustand](https://github.com/pmndrs/zustand) and [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) as a storage solution to save sensitive data.
- 🛠 A simple workflow for building, releasing, and distributing your app using [Github action](https://github.com/features/actions).
- 🔥 [React Query](https://react-query.tanstack.com/) & [axios](https://github.com/axios/axios) and [axios](https://github.com/axios/axios) for fetching data, to help you build efficient and performant apps.
- 🧵 A good approach for handling forms with [react-hook-form](https://react-hook-form.com/) and [zod](https://github.com/colinhacks/zod) for validation + keyboard handling.
- 🎯 Localization with [i18next](https://www.i18next.com/) , along with Eslint for validation.

## ✍️ Documentation

- [Create new project ](https://starter.obytes.com/docs/getting-started/create-new-app)
- [Rules and Conventions](https://starter.obytes.com/docs/getting-started/rules-and-convetions)
- [Project structure](https://starter.obytes.com/docs/getting-started/project-structure)
- [Environment vars and config](https://starter.obytes.com/docs/getting-started/environment-vars-config)
- [UI and Theming](https://starter.obytes.com/docs/ui-and-theme/ui-theming)
- [Components](https://starter.obytes.com/docs/ui-and-theme/components)
- [Forms](https://starter.obytes.com/docs/ui-and-theme/Forms)
- [Data fetching](https://starter.obytes.com/docs/guides/data-fetching)
- [Contribute to starter](https://starter.obytes.com/docs/contribute)

## 😉 Why Expo?

Expo is a powerful tool for building React Native apps, offering a range of features and benefits that can help developers create high-quality apps more efficiently. One question we often receive from the community is why we choose to use Expo instead of the React Native CLI.

In the past, our team used the React Native CLI for our starter kit. However, we found that using Expo presented several advantages. In particular, the introduction of the Custom dev client feature allowed us to take advantage of the Expo ecosystem and utilize native libraries without the need for ejecting the app. This has greatly simplified our development process and enabled us to focus on the business logic of our projects.

Additionally, we have found that using Expo has made it easier to upgrade our apps to new versions, eliminating the issues we previously encountered when using the React Native CLI.

Overall, we believe that Expo offers numerous benefits for building React Native apps and is a valuable tool for any developer. The real question may be, **why not use Expo?**

## 🤔 Is this starter for you?

If you are planning to build a React Native app and are looking for a strong foundation, well-designed architecture, and a positive developer experience, then this starter kit is an excellent resource to consider. It offers a comprehensive set of best practices and tools that have been tested and proven effective in multiple projects.

Even if you are not sure that using a starter kit is the right choice for your project, you can still benefit from this resource. You can explore the starter kit and draw inspiration from the solutions it provides for common challenges faced by React Native developers. This can be a helpful way to discover good practices and find effective solutions for your own app development process.

Overall, whether you choose to use this starter kit as is or simply take some ideas from it, we believe it offers valuable insights and resources for anyone looking to build a high-quality React Native app.

## 🧑‍💻 Stay up to date

We are committed to continually improving our starter kit and providing the best possible resources for building React Native apps. To that end, we regularly add new features and fix any bugs that are discovered.

If you want to stay up to date with the latest developments in our starter kit, you can either watch the repository or hit the "star" button. This will allow you to receive notifications whenever new updates are available.

We value the feedback and contributions of our users, and we encourage you to let us know if you have any suggestions for improving our starter kit. We are always looking for ways to make it even more effective and useful for our community. So, please do not hesitate to reach out and share your thoughts with us.

<!-- add a gif image here  -->

## 💎 Libraries used

- [Expo](https://docs.expo.io/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Nativewind](https://www.nativewind.dev/)
- [Flash list](https://github.com/Shopify/flash-list)
- [React Query](https://tanstack.com/query/v4)
- [Axios](https://axios-http.com/docs/intro)
- [React Hook Form](https://react-hook-form.com/)
- [i18next](https://www.i18next.com/)
- [zustand](https://github.com/pmndrs/zustand)
- [React Native MMKV](https://github.com/mrousavy/react-native-mmkv)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/)
- [React Native Svg](https://github.com/software-mansion/react-native-svg)
- [ React Error Boundaries](https://github.com/bvaughn/react-error-boundary)
- [Expo Image](https://docs.expo.dev/versions/unversioned/sdk/image/)

## Contributors

This starter is maintained by [Obytes mobile tribe team](https://www.obytes.com/team) and we welcome new contributors to join us in improving it. If you are interested in getting involved in the project, please don't hesitate to open an issue or submit a pull request.

In addition to maintaining this starter kit, we are also available to work on custom projects and help you build your dream app. If you are looking for experienced and reliable developers to bring your app vision to life, please visit our website at [obytes.com/contact](https://www.obytes.com/contact) to get in touch with us. We would be happy to discuss your project in more detail and explore how we can help you achieve your goals.

## 🔥 How to contribute?

Thank you for your interest in contributing to our project. Your involvement is greatly appreciated and we welcome your contributions. Here are some ways you can help us improve this project:

1. Show your support for the project by giving it a 🌟 on Github. This helps us increase visibility and attract more contributors.
2. Share your thoughts and ideas with us by opening an issue. If you have any suggestions or feedback about any aspect of the project, we are always eager to hear from you and have a discussion.
3. If you have any questions about the project, please don't hesitate to ask. Simply open an issue and our team will do our best to provide a helpful and informative response.
4. If you encounter a bug or typo while using the starter kit or reading the documentation, we would be grateful if you could bring it to our attention. You can open an issue to report the issue, or even better, submit a pull request with a fix.

We value the input and contributions of our community and look forward to working with you to improve this project.

## ❓ FAQ

If you have any questions about the starter and want answers, please check out the [Discussions](https://github.com/obytes/react-native-template-obytes/discussions) page.

## 🔖 License

This project is MIT licensed.
````

## File: cli/setup-project.js
````javascript
const { execShellCommand, runCommand } = require('./utils.js');
const { consola } = require('consola');
const fs = require('fs-extra');
const path = require('path');

const initGit = async (projectName) => {
  await execShellCommand(`cd ${projectName} && git init && cd ..`);
};

const installDeps = async (projectName) => {
  await runCommand(`cd ${projectName} && pnpm install`, {
    loading: 'Installing  project dependencies',
    success: 'Dependencies installed',
    error: 'Failed to install dependencies, Make sure you have pnpm installed',
  });
};

// remove unnecessary files, such us .git, ios, android, docs, cli, LICENSE
const removeFiles = async (projectName) => {
  const FILES_TO_REMOVE = [
    '.git',
    'README.md',
    'ios',
    'android',
    'docs',
    'cli',
    'LICENSE',
  ];

  FILES_TO_REMOVE.forEach((file) => {
    fs.removeSync(path.join(process.cwd(), `${projectName}/${file}`));
  });
};

// Update package.json infos, name and  set version to 0.0.1 + add initial version to osMetadata
const updatePackageInfos = async (projectName) => {
  const packageJsonPath = path.join(
    process.cwd(),
    `${projectName}/package.json`
  );
  const packageJson = fs.readJsonSync(packageJsonPath);
  packageJson.osMetadata = { initVersion: packageJson.version };
  packageJson.version = '0.0.1';
  packageJson.name = projectName?.toLowerCase();
  packageJson.repository = {
    type: 'git',
    url: 'git+https://github.com/user/repo-name.git',
  };
  fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
};

const updateProjectConfig = async (projectName) => {
  const configPath = path.join(process.cwd(), `${projectName}/env.js`);
  const contents = fs.readFileSync(configPath, {
    encoding: 'utf-8',
  });
  const replaced = contents
    .replace(/ObytesApp/gi, projectName)
    .replace(/com.obytes/gi, `com.${projectName.toLowerCase()}`)
    .replace(/obytes/gi, 'expo-owner');

  fs.writeFileSync(configPath, replaced, { spaces: 2 });
  const readmeFilePath = path.join(
    process.cwd(),
    `${projectName}/README-project.md`
  );
  fs.renameSync(
    readmeFilePath,
    path.join(process.cwd(), `${projectName}/README.md`)
  );
};

const setupProject = async (projectName) => {
  consola.start(`Clean up and setup your project 🧹`);
  try {
    removeFiles(projectName);
    await initGit(projectName);
    updatePackageInfos(projectName);
    updateProjectConfig(projectName);
    consola.success(`Clean up and setup your project 🧹`);
  } catch (error) {
    consola.error(`Failed to clean up project folder`, error);
    process.exit(1);
  }
};

module.exports = {
  setupProject,
  installDeps,
};
````

## File: cli/utils.js
````javascript
#!/usr/bin/env node
const { exec } = require('child_process');
const { consola } = require('consola');

const execShellCommand = (cmd) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
};

const runCommand = async (
  command,
  { loading = 'loading ....', success = 'success', error = 'error' }
) => {
  consola.start(loading);
  try {
    await execShellCommand(command);
    consola.success(success);
  } catch (err) {
    consola.error(`Failed to execute ${command}`, err);
    process.exit(1);
  }
};
// show more details message using chalk
const showMoreDetails = (projectName) => {
  consola.box(
    'Your project is ready to go! \n\n\n',
    '🚀 To get started, run the following commands: \n\n',
    `   \`cd ${projectName}\` \n`,
    '   IOS     :  `pnpm ios` \n',
    '   Android :  `pnpm android` \n\n',
    '📚 Starter Documentation: https://starter.obytes.com'
  );
};

module.exports = {
  runCommand,
  showMoreDetails,
  execShellCommand,
};
````

## File: docs/public/_redirects
````
# redirect all /docs requests to the root domain

/docs/\* /:splat 301
````

## File: docs/public/favicon.svg
````
<svg width="344" height="306" viewBox="0 0 344 306" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M334.461 136.661C331.608 133.111 328.323 129.993 324.75 127.17C310.498 115.937 294.187 108.792 277.051 103.403C273.758 102.366 273.478 100.958 274.129 98.0667C276.861 86.0018 278.201 73.7551 278.473 60.8803C278.133 49.6176 277.156 37.9613 271.684 27.236C265.962 16.0491 257 10.0544 244.163 10.1301C236.443 10.1755 229.222 12.2267 222.243 15.1711C206.137 21.968 192.391 32.3375 179.577 44.0241C177.601 45.8255 176.398 45.9769 174.362 44.0241C167.156 37.1363 159.284 31.0357 150.906 25.639C139.613 18.3727 127.79 12.4008 114.226 10.5464C101.488 8.80553 90.3082 13.8541 83.655 24.8215C78.1448 33.9119 76.3812 44.0544 75.7833 54.4315C74.9204 69.3727 76.7521 84.1095 79.9462 98.6723C80.5214 101.291 80.0673 102.479 77.4182 103.267C69.6978 105.56 62.1893 108.489 54.9004 111.926C41.7152 118.132 29.2112 125.361 19.7045 136.79C8.55541 150.194 8.44944 164.81 19.2882 178.427C23.648 183.907 28.9084 188.388 34.623 192.339C47.8915 201.52 62.5754 207.719 77.8799 212.533C80.3019 213.297 80.915 214.183 80.3247 216.741C77.9253 227.058 76.5174 237.541 76.033 248.122C75.4578 260.664 76.2828 273.062 80.9605 284.9C86.6221 299.243 96.9008 305.919 112.266 305.427C118.26 305.238 123.945 303.664 129.493 301.521C146.818 294.83 161.343 283.863 174.922 271.503C176.792 269.8 177.934 269.603 179.842 271.374C183.528 274.795 187.35 278.095 191.324 281.176C204.547 291.409 218.459 300.386 235.08 304.163C253.291 308.296 267.014 301.559 273.743 285.074C276.566 278.148 277.929 270.867 278.496 263.412C279.707 247.562 277.709 231.985 274.379 216.559C273.773 213.759 274.734 213.131 276.945 212.397C282.076 210.693 287.208 208.953 292.204 206.894C307.205 200.718 321.367 193.179 332.668 181.152C345.8 167.179 346.443 151.549 334.477 136.631L334.461 136.661ZM189.182 55.4684C201.83 44.2057 215.076 33.8589 231.122 27.7886C234.755 26.411 238.539 25.4422 242.49 25.2832C251.308 24.9351 256.039 27.8718 259.347 36.2053C262.647 44.5236 263.426 53.2734 263.343 62.1367C263.298 73.3767 261.61 84.4274 259.475 95.4252C259.067 97.5142 258.348 97.9532 256.198 97.4461C243.838 94.5396 231.349 92.2992 218.701 91.0654C216.703 90.8686 215.31 89.9376 214.092 88.28C206.492 77.9256 198.318 68.033 189.515 58.6777C188.523 57.6256 187.532 56.9368 189.19 55.4608L189.182 55.4684ZM99.6559 201.406C102.086 193.133 104.909 185.012 108.338 176.36C114.082 187.51 120.168 197.637 126.715 208.165C117.61 206.992 109.284 205.342 101.011 203.352C99.8905 203.079 99.2244 202.882 99.6559 201.399V201.406ZM99.4439 114.348C99.0049 112.993 99.5651 112.607 100.769 112.327C109.064 110.412 117.398 108.716 126.715 107.498C120.092 118.125 114.173 128.244 108.383 139.492C104.644 130.788 102.07 122.56 99.4364 114.355L99.4439 114.348ZM117.504 160.783C116.626 158.959 116.406 157.4 117.36 155.462C125.406 139.068 134.36 123.203 144.548 108.028C146.046 105.795 147.749 104.985 150.398 104.811C168.276 103.645 186.132 103.675 204.01 104.796C206.545 104.955 208.067 105.78 209.49 107.876C219.541 122.689 228.473 138.129 236.367 154.191C237.593 156.674 237.684 158.649 236.428 161.215C228.511 177.397 219.624 193.012 209.58 207.969C208.271 209.921 206.825 210.701 204.418 210.928C195.373 211.768 186.298 211.473 176.216 212.169C167.686 211.746 158.134 211.223 148.574 210.837C146.902 210.769 146.145 209.884 145.335 208.71C134.829 193.444 125.557 177.473 117.504 160.783ZM227.534 107.619C236.791 108.618 245.2 110.48 253.609 112.387C254.502 112.592 254.919 112.955 254.631 113.924C252.149 122.31 249.431 130.606 245.798 139.272C240.152 128.184 234.081 118.14 227.542 107.619H227.534ZM245.632 176.474C247.713 179.608 248.531 182.9 249.651 186.034C251.384 190.885 252.883 195.82 254.555 200.695C255.055 202.148 255.078 202.92 253.246 203.344C244.935 205.289 236.594 206.977 227.489 208.188C234.066 197.607 240.076 187.373 245.624 176.474H245.632ZM182.673 73.7476C186.374 77.8575 189.886 82.1416 193.474 86.3575C194.026 87.0084 194.503 87.7351 195.502 89.0899C182.953 88.7266 171.16 88.7417 158.649 89.0521C162.524 83.2996 166.884 78.6901 171.024 73.9141C176.761 67.3063 176.867 67.2988 182.673 73.7476ZM94.5317 36.6822C98.1648 27.3874 104.371 23.9284 114.203 25.7752C127.691 28.3108 139 35.35 149.808 43.2823C154.667 46.8549 159.141 50.9573 163.849 54.7342C165.627 56.1648 166.172 57.1336 164.25 59.1394C155.538 68.2449 147.522 77.9559 140.173 88.1968C138.871 90.0058 137.357 90.8762 135.215 91.0881C122.673 92.3219 110.283 94.5245 98.0437 97.4764C95.6367 98.0592 94.9934 97.3401 94.5771 95.2359C92.4199 84.3517 90.6412 73.4297 90.732 63.325C90.6563 53.5535 91.3073 44.9248 94.5317 36.6746V36.6822ZM85.2748 196.721C84.9039 197.978 84.5406 199.045 82.7013 198.424C65.444 192.626 48.6938 185.829 35.0091 173.318C30.5206 169.215 26.615 164.568 26.2593 157.938C26.4864 151.216 30.5509 146.561 35.0847 142.308C45.4618 132.597 58.0188 126.549 71.0753 121.432C74.7009 120.009 78.44 118.904 82.0731 117.511C83.6929 116.891 84.4195 116.951 84.9947 118.874C88.8019 131.65 93.4871 144.117 98.8611 156.318C99.338 157.4 99.4061 158.467 98.9065 159.595C93.6007 171.69 88.9609 184.028 85.2596 196.714L85.2748 196.721ZM164.727 260.581C152.889 271.034 140.528 280.692 125.822 286.868C121.296 288.768 116.626 290.198 111.638 290.418C103.054 290.796 98.6492 288.026 95.1902 280.056C93.9337 277.157 92.9952 274.152 92.4199 271.071C91.3754 265.501 90.7926 259.869 90.8456 254.185C90.9742 242.695 92.5486 231.38 94.8344 220.147C95.1675 218.512 95.5838 217.657 97.7788 218.179C110.26 221.131 122.87 223.402 135.646 224.643C137.675 224.84 139.015 225.816 140.218 227.466C147.711 237.745 155.833 247.517 164.552 256.781C165.832 258.136 166.543 258.969 164.711 260.581H164.727ZM179.206 246.154C177.829 247.653 176.943 247.978 175.399 246.283C169.798 240.137 164.265 233.938 158.626 226.611C171.168 226.876 182.968 226.997 194.647 226.611C195.32 227.406 194.798 227.913 194.442 228.367C189.621 234.513 184.497 240.394 179.206 246.147V246.154ZM259.854 278.762C256.168 288.374 250.097 291.682 239.993 289.835C227.405 287.542 216.794 281.093 206.568 273.902C200.808 269.845 195.396 265.334 190.113 260.656C188.289 259.037 188.493 258.106 190.022 256.509C198.84 247.327 206.863 237.48 214.311 227.171C215.552 225.453 217.028 224.742 219.004 224.545C231.659 223.296 244.148 221.018 256.516 218.119C258.378 217.68 259.165 217.755 259.589 219.86C261.822 230.978 263.653 242.135 263.51 253.526C263.616 262.125 262.987 270.64 259.869 278.762H259.854ZM321.571 170.956C315.917 177.178 308.946 181.719 301.65 185.746C292.378 190.863 282.568 194.723 272.532 198.084C270.11 198.893 269.534 198.174 268.929 196.1C265.364 183.899 260.891 172.031 255.744 160.42C254.919 158.558 254.851 156.961 255.698 155.046C260.83 143.42 265.273 131.529 268.793 119.313C269.247 117.731 269.656 116.656 271.866 117.398C288.548 122.961 304.609 129.675 318.15 141.293C324.372 146.629 327.861 152.564 327.922 157.695C327.997 163.16 324.97 167.21 321.564 170.964L321.571 170.956Z" fill="url(#paint0_linear_2_6302)"/>
<path d="M204.318 146.471C201.392 141.168 197.035 136.779 191.735 133.795C189.336 132.457 186.696 131.599 183.966 131.269C182.85 125.633 177.313 118.873 175.208 115.815L167.452 117.998C169.337 120.499 174.692 126.777 175.806 131.684L175.208 131.832C169.19 133.432 164.021 137.256 160.759 142.519C158.907 145.429 157.95 148.811 158.005 152.253C158.038 153.676 158.258 155.088 158.658 156.455C159.783 160.239 162.22 163.244 165.404 164.74C170.535 167.121 174.673 166.214 177.236 165.022C178.611 164.374 179.87 163.51 180.967 162.463C183.527 159.971 185.334 156.818 186.184 153.36C187.314 148.863 187.435 144.174 186.538 139.624C187.042 139.83 187.532 140.067 188.006 140.333C192.076 142.627 195.421 146 197.666 150.075C199.974 154.263 201.016 159.023 200.667 163.781C200.502 166.106 200.01 168.396 199.203 170.584C197.731 174.561 195.254 178.094 192.008 180.846C189.505 182.99 186.596 184.617 183.451 185.633C180.306 186.649 176.988 187.032 173.69 186.762C167.098 186.217 160.984 183.117 156.674 178.135C152.363 173.152 150.204 166.688 150.662 160.143C150.9 156.685 151.852 153.313 153.46 150.237L146.516 147.147C144.552 151.029 143.386 155.261 143.084 159.595C142.486 168.124 145.3 176.546 150.918 183.037C156.535 189.527 164.502 193.563 173.092 194.27L173.334 194.287C177.593 194.607 181.872 194.088 185.926 192.762C189.981 191.436 193.73 189.328 196.959 186.559C201.059 183.086 204.219 178.652 206.153 173.658C207.312 170.662 208.018 167.511 208.247 164.309C208.691 158.114 207.327 151.921 204.318 146.471ZM168.624 157.959C167.835 157.556 167.177 156.938 166.727 156.179C166.375 155.614 166.102 155.005 165.916 154.367C165.559 153.05 165.487 151.673 165.704 150.327C165.92 148.98 166.421 147.695 167.174 146.555C168.4 144.543 170.047 142.816 172.004 141.49C173.961 140.164 176.182 139.27 178.518 138.869C179.681 143.319 179.787 147.597 178.774 151.518C177.97 154.655 176.128 157.23 173.974 158.23C173.473 158.469 172.937 158.625 172.385 158.693C171.086 158.804 169.781 158.543 168.626 157.939L168.624 157.959Z" fill="url(#paint1_linear_2_6302)" stroke="url(#paint2_linear_2_6302)" stroke-width="2.5"/>
<defs>
<linearGradient id="paint0_linear_2_6302" x1="67.0033" y1="138.952" x2="337.003" y2="180.952" gradientUnits="userSpaceOnUse">
<stop stop-color="#FEFDBD"/>
<stop offset="1" stop-color="#F4C15B"/>
</linearGradient>
<linearGradient id="paint1_linear_2_6302" x1="179.459" y1="109.439" x2="173.329" y2="194.287" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBE99C"/>
<stop offset="1" stop-color="#F69037"/>
</linearGradient>
<linearGradient id="paint2_linear_2_6302" x1="179.459" y1="109.439" x2="173.329" y2="194.287" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBE699"/>
<stop offset="1" stop-color="#F69037"/>
<stop offset="1" stop-color="#F66537"/>
</linearGradient>
</defs>
</svg>
````

## File: docs/src/assets/logo-titled.svg
````
<svg width="1207" height="191" viewBox="0 0 1207 191" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M682.68 149.44C675.64 149.44 669.52 148.28 664.32 145.96C659.12 143.64 654.92 140.48 651.72 136.48L662.16 124.96C665.2 128.32 668.52 130.8 672.12 132.4C675.8 134 679.52 134.8 683.28 134.8C687.6 134.8 690.88 133.84 693.12 131.92C695.36 130 696.48 127.24 696.48 123.64C696.48 120.68 695.6 118.44 693.84 116.92C692.16 115.4 689.28 114.32 685.2 113.68L676.44 112.24C668.92 110.96 663.48 108.2 660.12 103.96C656.76 99.64 655.08 94.4 655.08 88.24C655.08 80.16 657.72 73.92 663 69.52C668.28 65.04 675.68 62.8 685.2 62.8C691.68 62.8 697.32 63.8 702.12 65.8C706.92 67.8 710.8 70.52 713.76 73.96L703.56 85.36C701.32 82.88 698.68 80.96 695.64 79.6C692.6 78.16 689.16 77.44 685.32 77.44C677.24 77.44 673.2 80.76 673.2 87.4C673.2 90.28 674.08 92.44 675.84 93.88C677.68 95.32 680.64 96.4 684.72 97.12L693.48 98.68C700.28 99.88 705.52 102.44 709.2 106.36C712.88 110.28 714.72 115.56 714.72 122.2C714.72 126.12 714.04 129.76 712.68 133.12C711.32 136.4 709.28 139.28 706.56 141.76C703.84 144.16 700.48 146.04 696.48 147.4C692.56 148.76 687.96 149.44 682.68 149.44ZM760.753 148C754.353 148 749.593 146.32 746.473 142.96C743.353 139.6 741.793 135.32 741.793 130.12V99.88H724.993V86.08H735.913C738.553 86.08 740.433 85.56 741.553 84.52C742.673 83.48 743.233 81.56 743.233 78.76V64.24H759.553V86.08H783.673V99.88H759.553V134.2H783.673V148H760.753ZM850.346 148C846.666 148 843.706 147.08 841.466 145.24C839.226 143.32 837.906 140.6 837.506 137.08H836.906C835.786 141.16 833.546 144.24 830.186 146.32C826.906 148.4 822.866 149.44 818.066 149.44C812.066 149.44 807.226 147.84 803.546 144.64C799.946 141.36 798.146 136.8 798.146 130.96C798.146 124.48 800.506 119.68 805.226 116.56C809.946 113.44 816.866 111.88 825.986 111.88H835.946V108.76C835.946 105.08 835.066 102.32 833.306 100.48C831.626 98.56 828.746 97.6 824.666 97.6C820.906 97.6 817.866 98.32 815.546 99.76C813.226 101.2 811.226 103.08 809.546 105.4L799.826 96.76C801.906 93.24 805.146 90.36 809.546 88.12C814.026 85.8 819.746 84.64 826.706 84.64C835.186 84.64 841.786 86.6 846.506 90.52C851.306 94.36 853.706 100.2 853.706 108.04V135.16H860.546V148H850.346ZM824.786 137.8C827.906 137.8 830.546 137.04 832.706 135.52C834.866 134 835.946 131.8 835.946 128.92V121.48H826.466C819.186 121.48 815.546 123.92 815.546 128.8V131.2C815.546 133.36 816.386 135 818.066 136.12C819.746 137.24 821.986 137.8 824.786 137.8ZM872.739 134.2H887.019V99.88H872.739V86.08H904.779V103.6H905.619C906.179 101.36 906.939 99.2 907.899 97.12C908.939 94.96 910.219 93.08 911.739 91.48C913.339 89.8 915.259 88.48 917.499 87.52C919.739 86.56 922.379 86.08 925.419 86.08H931.299V102.4H918.099C913.699 102.4 910.379 103.72 908.139 106.36C905.899 108.92 904.779 112.08 904.779 115.84V134.2H925.179V148H872.739V134.2ZM976.613 148C970.213 148 965.453 146.32 962.333 142.96C959.213 139.6 957.653 135.32 957.653 130.12V99.88H940.853V86.08H951.773C954.413 86.08 956.293 85.56 957.413 84.52C958.533 83.48 959.093 81.56 959.093 78.76V64.24H975.413V86.08H999.533V99.88H975.413V134.2H999.533V148H976.613ZM1045.45 149.44C1035.05 149.44 1027.17 146.56 1021.81 140.8C1016.45 135.04 1013.77 127.2 1013.77 117.28C1013.77 112.24 1014.45 107.72 1015.81 103.72C1017.25 99.64 1019.25 96.2 1021.81 93.4C1024.45 90.52 1027.61 88.36 1031.29 86.92C1035.05 85.4 1039.25 84.64 1043.89 84.64C1048.53 84.64 1052.69 85.4 1056.37 86.92C1060.05 88.36 1063.17 90.44 1065.73 93.16C1068.29 95.88 1070.25 99.2 1071.61 103.12C1073.05 106.96 1073.77 111.28 1073.77 116.08V121.36H1031.41V122.44C1031.41 126.44 1032.65 129.68 1035.13 132.16C1037.61 134.56 1041.25 135.76 1046.05 135.76C1049.73 135.76 1052.89 135.08 1055.53 133.72C1058.17 132.28 1060.45 130.4 1062.37 128.08L1071.97 138.52C1069.57 141.48 1066.21 144.04 1061.89 146.2C1057.57 148.36 1052.09 149.44 1045.45 149.44ZM1044.01 97.36C1040.17 97.36 1037.09 98.56 1034.77 100.96C1032.53 103.28 1031.41 106.44 1031.41 110.44V111.4H1056.37V110.44C1056.37 106.36 1055.25 103.16 1053.01 100.84C1050.85 98.52 1047.85 97.36 1044.01 97.36ZM1088.6 134.2H1102.88V99.88H1088.6V86.08H1120.64V103.6H1121.48C1122.04 101.36 1122.8 99.2 1123.76 97.12C1124.8 94.96 1126.08 93.08 1127.6 91.48C1129.2 89.8 1131.12 88.48 1133.36 87.52C1135.6 86.56 1138.24 86.08 1141.28 86.08H1147.16V102.4H1133.96C1129.56 102.4 1126.24 103.72 1124 106.36C1121.76 108.92 1120.64 112.08 1120.64 115.84V134.2H1141.04V148H1088.6V134.2Z" fill="#F5C25D"/>
<path d="M230 149.44C218.8 149.44 210.52 145.64 205.16 138.04C199.88 130.44 197.24 119.8 197.24 106.12C197.24 92.44 199.88 81.8 205.16 74.2C210.52 66.6 218.8 62.8 230 62.8C241.2 62.8 249.44 66.6 254.72 74.2C260.08 81.8 262.76 92.44 262.76 106.12C262.76 119.8 260.08 130.44 254.72 138.04C249.44 145.64 241.2 149.44 230 149.44ZM230 134.92C235.12 134.92 238.64 133.04 240.56 129.28C242.56 125.44 243.56 120.12 243.56 113.32V98.8C243.56 92.08 242.56 86.84 240.56 83.08C238.64 79.24 235.12 77.32 230 77.32C224.88 77.32 221.32 79.24 219.32 83.08C217.4 86.84 216.44 92.08 216.44 98.8V113.44C216.44 120.16 217.4 125.44 219.32 129.28C221.32 133.04 224.88 134.92 230 134.92ZM273.033 59.2H290.793V97.36H291.633C293.153 93.68 295.353 90.64 298.233 88.24C301.113 85.84 305.033 84.64 309.993 84.64C313.433 84.64 316.553 85.28 319.353 86.56C322.233 87.84 324.673 89.8 326.673 92.44C328.753 95.08 330.353 98.44 331.473 102.52C332.673 106.6 333.273 111.44 333.273 117.04C333.273 122.64 332.673 127.48 331.473 131.56C330.353 135.64 328.753 139 326.673 141.64C324.673 144.28 322.233 146.24 319.353 147.52C316.553 148.8 313.433 149.44 309.993 149.44C305.033 149.44 301.113 148.28 298.233 145.96C295.353 143.56 293.153 140.48 291.633 136.72H290.793V148H273.033V59.2ZM302.313 135.64C306.313 135.64 309.393 134.44 311.553 132.04C313.713 129.56 314.793 126.16 314.793 121.84V112.24C314.793 107.92 313.713 104.56 311.553 102.16C309.393 99.68 306.313 98.44 302.313 98.44C299.193 98.44 296.473 99.2 294.153 100.72C291.913 102.24 290.793 104.64 290.793 107.92V126.16C290.793 129.44 291.913 131.84 294.153 133.36C296.473 134.88 299.193 135.64 302.313 135.64ZM389.506 86.08H407.626L378.466 157.96C376.626 162.52 374.186 166 371.146 168.4C368.106 170.8 363.946 172 358.666 172H346.426V158.2H361.306L365.146 147.64L340.186 86.08H359.266L368.266 112.12L373.906 130.12H374.866L380.266 112.12L389.506 86.08ZM450.659 148C444.259 148 439.499 146.32 436.379 142.96C433.259 139.6 431.699 135.32 431.699 130.12V99.88H414.899V86.08H425.819C428.459 86.08 430.339 85.56 431.459 84.52C432.579 83.48 433.139 81.56 433.139 78.76V64.24H449.459V86.08H473.579V99.88H449.459V134.2H473.579V148H450.659ZM519.493 149.44C509.093 149.44 501.213 146.56 495.853 140.8C490.493 135.04 487.813 127.2 487.813 117.28C487.813 112.24 488.493 107.72 489.853 103.72C491.293 99.64 493.293 96.2 495.853 93.4C498.493 90.52 501.653 88.36 505.333 86.92C509.093 85.4 513.293 84.64 517.933 84.64C522.573 84.64 526.733 85.4 530.413 86.92C534.093 88.36 537.213 90.44 539.773 93.16C542.333 95.88 544.293 99.2 545.653 103.12C547.093 106.96 547.813 111.28 547.813 116.08V121.36H505.453V122.44C505.453 126.44 506.693 129.68 509.173 132.16C511.653 134.56 515.293 135.76 520.093 135.76C523.773 135.76 526.933 135.08 529.573 133.72C532.213 132.28 534.493 130.4 536.413 128.08L546.013 138.52C543.613 141.48 540.253 144.04 535.933 146.2C531.613 148.36 526.133 149.44 519.493 149.44ZM518.053 97.36C514.213 97.36 511.133 98.56 508.813 100.96C506.573 103.28 505.453 106.44 505.453 110.44V111.4H530.413V110.44C530.413 106.36 529.293 103.16 527.053 100.84C524.893 98.52 521.893 97.36 518.053 97.36ZM589.046 149.44C582.166 149.44 576.166 148.4 571.046 146.32C566.006 144.24 562.206 141.4 559.646 137.8L569.606 128.56C572.006 131.2 574.806 133.28 578.006 134.8C581.286 136.24 585.006 136.96 589.166 136.96C592.686 136.96 595.446 136.44 597.446 135.4C599.446 134.28 600.446 132.6 600.446 130.36C600.446 128.6 599.766 127.4 598.406 126.76C597.046 126.04 595.166 125.48 592.766 125.08L582.806 123.52C580.006 123.12 577.406 122.52 575.006 121.72C572.606 120.84 570.526 119.68 568.766 118.24C567.006 116.8 565.606 115.04 564.566 112.96C563.526 110.88 563.006 108.36 563.006 105.4C563.006 98.92 565.486 93.84 570.446 90.16C575.406 86.48 582.366 84.64 591.326 84.64C597.406 84.64 602.566 85.48 606.806 87.16C611.126 88.76 614.566 91.08 617.126 94.12L608.246 104.2C606.406 102.2 604.046 100.52 601.166 99.16C598.286 97.8 594.806 97.12 590.726 97.12C583.846 97.12 580.406 99.2 580.406 103.36C580.406 105.2 581.086 106.48 582.446 107.2C583.806 107.84 585.686 108.36 588.086 108.76L597.926 110.32C600.726 110.72 603.326 111.36 605.726 112.24C608.126 113.04 610.206 114.16 611.966 115.6C613.806 117.04 615.246 118.8 616.286 120.88C617.326 122.96 617.846 125.48 617.846 128.44C617.846 134.92 615.326 140.04 610.286 143.8C605.326 147.56 598.246 149.44 589.046 149.44Z" fill="#F5C25D"/>
<path d="M162.85 88.5331C161.461 86.8048 159.862 85.2866 158.122 83.9121C151.183 78.4435 143.242 74.9648 134.899 72.3411C133.296 71.8363 133.16 71.1508 133.477 69.7432C134.807 63.8692 135.459 57.9069 135.592 51.6386C135.426 46.1553 134.951 40.4804 132.287 35.2587C129.501 29.8122 125.138 26.8937 118.888 26.9305C115.129 26.9526 111.614 27.9513 108.216 29.3847C100.374 32.6939 93.6822 37.7424 87.4435 43.4321C86.4817 44.3091 85.8958 44.3828 84.9045 43.4321C81.3964 40.0787 77.5639 37.1086 73.4846 34.4811C67.9866 30.9435 62.2306 28.036 55.627 27.1332C49.4251 26.2856 43.9823 28.7436 40.7432 34.0832C38.0605 38.5089 37.2019 43.4468 36.9108 48.499C36.4907 55.7732 37.3825 62.948 38.9375 70.038C39.2176 71.313 38.9965 71.8915 37.7068 72.2748C33.948 73.3913 30.2925 74.8174 26.7438 76.4904C20.3245 79.5122 14.2368 83.0314 9.60846 88.5958C4.18043 95.1219 4.12884 102.238 9.40579 108.867C11.5284 111.535 14.0894 113.717 16.8716 115.64C23.3315 120.11 30.4804 123.128 37.9315 125.472C39.1107 125.844 39.4092 126.275 39.1218 127.521C37.9536 132.543 37.2682 137.647 37.0324 142.799C36.7523 148.905 37.154 154.941 39.4313 160.704C42.1877 167.687 47.192 170.938 54.6726 170.698C57.5911 170.606 60.3586 169.84 63.0597 168.797C71.4947 165.539 78.5663 160.2 85.1772 154.182C86.0874 153.353 86.6438 153.257 87.5725 154.119C89.3671 155.785 91.228 157.392 93.1626 158.891C99.6004 163.873 106.373 168.244 114.466 170.083C123.332 172.095 130.013 168.815 133.289 160.789C134.663 157.417 135.327 153.872 135.603 150.243C136.193 142.526 135.22 134.942 133.598 127.432C133.304 126.069 133.772 125.763 134.848 125.405C137.346 124.576 139.844 123.729 142.277 122.726C149.58 119.719 156.475 116.049 161.977 110.194C168.37 103.391 168.683 95.7816 162.857 88.5184L162.85 88.5331ZM92.1198 49.0038C98.2774 43.5205 104.726 38.4831 112.538 35.5277C114.307 34.857 116.15 34.3853 118.073 34.3079C122.366 34.1384 124.67 35.5682 126.28 39.6254C127.887 43.6753 128.266 47.9352 128.226 52.2503C128.204 57.7226 127.382 63.1027 126.343 68.4571C126.144 69.4742 125.794 69.6879 124.747 69.441C118.729 68.0259 112.649 66.9352 106.491 66.3345C105.519 66.2387 104.84 65.7854 104.247 64.9784C100.547 59.9373 96.5676 55.121 92.2819 50.5663C91.7992 50.0541 91.3164 49.7187 92.1235 49.0001L92.1198 49.0038ZM48.5333 120.055C49.7162 116.027 51.0907 112.073 52.7601 107.861C55.557 113.289 58.5198 118.22 61.7073 123.346C57.2742 122.774 53.2207 121.971 49.193 121.002C48.6476 120.869 48.3233 120.773 48.5333 120.051V120.055ZM48.4302 77.6697C48.2164 77.01 48.4891 76.8221 49.075 76.6858C53.1138 75.7534 57.171 74.928 61.7073 74.3347C58.4829 79.5085 55.6012 84.4354 52.7822 89.9113C50.9618 85.6735 49.7089 81.6679 48.4265 77.6733L48.4302 77.6697ZM57.2226 100.277C56.7952 99.3892 56.6883 98.6301 57.1526 97.6867C61.0698 89.7049 65.4292 81.9811 70.3892 74.5927C71.1188 73.5056 71.948 73.1113 73.2377 73.0265C81.9417 72.459 90.6347 72.4738 99.3387 73.0192C100.573 73.0965 101.314 73.4982 102.007 74.519C106.9 81.7306 111.249 89.248 115.092 97.0676C115.689 98.2763 115.733 99.2381 115.122 100.487C111.267 108.366 106.941 115.968 102.051 123.25C101.413 124.2 100.71 124.58 99.5377 124.691C95.1341 125.1 90.7158 124.956 85.8073 125.295C81.6543 125.089 77.0038 124.834 72.3496 124.646C71.5352 124.613 71.1667 124.182 70.7724 123.611C65.6576 116.178 61.1435 108.403 57.2226 100.277ZM110.792 74.3937C115.299 74.8801 119.393 75.7866 123.487 76.7152C123.922 76.8147 124.124 76.9916 123.984 77.4633C122.775 81.5463 121.453 85.5851 119.684 89.8044C116.935 84.4059 113.979 79.5159 110.795 74.3937H110.792ZM119.603 107.916C120.616 109.442 121.014 111.045 121.559 112.571C122.403 114.933 123.133 117.335 123.947 119.708C124.191 120.416 124.202 120.792 123.31 120.998C119.264 121.945 115.203 122.767 110.77 123.357C113.972 118.205 116.898 113.223 119.599 107.916H119.603ZM88.9507 57.9032C90.7526 59.9041 92.4625 61.9899 94.2092 64.0424C94.4782 64.3593 94.7103 64.7131 95.1968 65.3727C89.087 65.1958 83.3457 65.2032 77.2544 65.3543C79.1411 62.5537 81.2637 60.3095 83.2794 57.9842C86.0727 54.7672 86.1242 54.7635 88.9507 57.9032ZM46.0386 39.8576C47.8074 35.3324 50.8291 33.6483 55.616 34.5475C62.1827 35.782 67.6881 39.209 72.9503 43.0709C75.3161 44.8103 77.4939 46.8076 79.786 48.6464C80.652 49.3429 80.9173 49.8145 79.9813 50.7911C75.7399 55.2242 71.8374 59.952 68.2593 64.9379C67.6254 65.8186 66.8884 66.2424 65.8456 66.3456C59.7395 66.9462 53.7071 68.0186 47.7484 69.4557C46.5766 69.7395 46.2634 69.3894 46.0607 68.365C45.0105 63.0659 44.1445 57.7484 44.1887 52.8289C44.1519 48.0715 44.4688 43.8706 46.0386 39.8539V39.8576ZM41.5318 117.774C41.3512 118.386 41.1744 118.905 40.2789 118.603C31.877 115.78 23.7221 112.471 17.0596 106.38C14.8744 104.382 12.9729 102.12 12.7997 98.8917C12.9102 95.6194 14.8891 93.3531 17.0964 91.2821C22.1486 86.5543 28.262 83.6099 34.6187 81.1188C36.3838 80.4261 38.2042 79.888 39.973 79.21C40.7616 78.9078 41.1154 78.9373 41.3955 79.8733C43.249 86.0936 45.53 92.1629 48.1464 98.1031C48.3786 98.6301 48.4117 99.1497 48.1685 99.6987C45.5853 105.587 43.3264 111.594 41.5244 117.77L41.5318 117.774ZM80.2135 148.864C74.4501 153.953 68.4325 158.655 61.2725 161.662C59.0688 162.587 56.7952 163.284 54.3667 163.391C50.1879 163.575 48.0432 162.226 46.3592 158.346C45.7475 156.935 45.2905 155.472 45.0105 153.972C44.5019 151.26 44.2182 148.518 44.244 145.751C44.3066 140.157 45.0731 134.648 46.186 129.179C46.3481 128.383 46.5508 127.967 47.6195 128.221C53.6961 129.658 59.8353 130.764 66.0556 131.368C67.0432 131.464 67.6955 131.939 68.2814 132.742C71.9295 137.747 75.8836 142.504 80.1287 147.014C80.7515 147.674 81.0979 148.079 80.2061 148.864H80.2135ZM87.2629 141.841C86.5922 142.57 86.1611 142.729 85.4094 141.903C82.6824 138.911 79.9887 135.893 77.2433 132.326C83.3494 132.455 89.0944 132.514 94.7804 132.326C95.1083 132.713 94.8541 132.96 94.6809 133.181C92.3335 136.173 89.8387 139.036 87.2629 141.837V141.841ZM126.527 157.716C124.732 162.396 121.777 164.006 116.857 163.107C110.729 161.99 105.563 158.851 100.584 155.35C97.78 153.375 95.1452 151.179 92.573 148.901C91.6849 148.113 91.7844 147.659 92.5288 146.882C96.8219 142.412 100.728 137.618 104.354 132.599C104.958 131.762 105.677 131.416 106.639 131.32C112.8 130.712 118.88 129.603 124.902 128.191C125.808 127.978 126.191 128.014 126.398 129.039C127.485 134.452 128.377 139.884 128.307 145.43C128.358 149.616 128.052 153.762 126.534 157.716H126.527ZM156.574 105.23C153.822 108.259 150.428 110.47 146.876 112.431C142.361 114.922 137.586 116.801 132.699 118.437C131.52 118.831 131.24 118.481 130.945 117.472C129.21 111.531 127.032 105.753 124.526 100.1C124.124 99.1939 124.091 98.4164 124.504 97.484C127.002 91.8238 129.165 86.0347 130.879 80.087C131.1 79.3169 131.299 78.7936 132.375 79.1547C140.497 81.8632 148.316 85.1318 154.909 90.7883C157.938 93.3863 159.637 96.2754 159.666 98.7738C159.703 101.434 158.229 103.406 156.571 105.234L156.574 105.23Z" fill="url(#paint0_linear_107_185)"/>
<path d="M99.4883 93.3144C98.0638 90.7329 95.9423 88.5958 93.3622 87.1431C92.1941 86.492 90.9089 86.0742 89.5794 85.9134C89.0361 83.1695 86.3406 79.8782 85.3156 78.3897L81.5397 79.4524C82.4574 80.67 85.0643 83.7265 85.6068 86.1155L85.3155 86.1875C82.3859 86.9664 79.8691 88.8281 78.2813 91.3907C77.3796 92.8071 76.9136 94.4538 76.9401 96.1296C76.9563 96.8223 77.0633 97.51 77.2583 98.1755C77.8058 100.018 78.9923 101.481 80.5426 102.209C83.0408 103.368 85.0555 102.927 86.3033 102.346C86.9723 102.031 87.5856 101.61 88.1195 101.101C89.366 99.8871 90.2456 98.3521 90.6592 96.6684C91.2096 94.4793 91.2685 92.1964 90.8317 89.9811C91.0769 90.0814 91.3157 90.1967 91.5465 90.3263C93.5279 91.4429 95.1566 93.0854 96.2494 95.069C97.3732 97.1084 97.8805 99.4254 97.7104 101.742C97.6304 102.874 97.3905 103.989 96.9976 105.054C96.2814 106.99 95.0752 108.711 93.4949 110.05C92.2764 111.094 90.8602 111.886 89.329 112.381C87.7978 112.875 86.1823 113.062 84.5767 112.93C81.3671 112.665 78.3906 111.156 76.2921 108.73C74.1936 106.305 73.1421 103.158 73.3654 99.9709C73.481 98.2872 73.9446 96.6455 74.7275 95.1479L71.3467 93.6439C70.3907 95.5339 69.8227 97.5939 69.6758 99.7043C69.3847 103.856 70.755 107.957 73.4898 111.117C76.2245 114.277 80.1034 116.242 84.2855 116.586L84.4033 116.594C86.4767 116.75 88.5601 116.497 90.534 115.852C92.5079 115.206 94.3333 114.18 95.9055 112.832C97.9016 111.141 99.4401 108.982 100.381 106.551C100.946 105.092 101.289 103.558 101.401 101.999C101.617 98.983 100.953 95.968 99.4883 93.3144ZM82.1104 98.9077C81.7261 98.7113 81.4057 98.4108 81.1866 98.0411C81.0154 97.766 80.8825 97.4692 80.7916 97.1589C80.6179 96.5175 80.5828 95.8472 80.6884 95.1918C80.7939 94.5364 81.0379 93.9106 81.4043 93.3555C82.0012 92.3759 82.803 91.535 83.7558 90.8895C84.7086 90.2439 85.7901 89.8088 86.9274 89.6134C87.4934 91.7799 87.5451 93.8628 87.052 95.7718C86.6605 97.2992 85.7636 98.5528 84.7148 99.0396C84.4711 99.1559 84.21 99.232 83.9415 99.265C83.3087 99.3192 82.6733 99.1918 82.1111 98.8979L82.1104 98.9077Z" fill="url(#paint1_linear_107_185)" stroke="url(#paint2_linear_107_185)" stroke-width="2.5"/>
<defs>
<linearGradient id="paint0_linear_107_185" x1="32.6362" y1="89.6487" x2="164.088" y2="110.097" gradientUnits="userSpaceOnUse">
<stop stop-color="#FEFDBD"/>
<stop offset="1" stop-color="#F4C15B"/>
</linearGradient>
<linearGradient id="paint1_linear_107_185" x1="87.3855" y1="75.2855" x2="84.4008" y2="116.594" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBE99C"/>
<stop offset="1" stop-color="#F69037"/>
</linearGradient>
<linearGradient id="paint2_linear_107_185" x1="87.3855" y1="75.2855" x2="84.4008" y2="116.594" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBE699"/>
<stop offset="1" stop-color="#F69037"/>
<stop offset="1" stop-color="#F66537"/>
</linearGradient>
</defs>
</svg>
````

## File: docs/src/components/about.astro
````
---
interface Props {
  title: string;
}

const { title } = Astro.props;
---

<article class="sl-flex not-content" aria-labelledby="about-obytes-heading">
  <small id="about-obytes-heading">
    {title}
    <span class="sr-only">Obytes</span>
  </small>
  <svg
    viewBox="0 0 563 174"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="var(--sl-color-white)"
  >
    <path
      d="M121.367 46.2857C114.706 36.0744 105.295 27.9012 94.1918 22.6843C89.1671 20.3496 83.728 19.0109 78.1822 18.744C74.7758 12.1073 70.7001 5.82744 66.017 0L50.7212 5.50224C54.8796 10.2452 58.5929 15.352 61.8156 20.7595L60.6328 21.1424C48.7516 25.2238 38.9007 33.6429 33.1003 44.6732C29.7952 50.777 28.3601 57.6999 28.9704 64.5963C29.2446 67.4452 29.8924 70.2467 30.8976 72.9304C33.712 80.3575 39.0554 86.0311 45.6836 88.5706C56.36 92.6016 64.5587 90.183 69.5452 87.4218C72.2174 85.9217 74.6276 84.0059 76.6832 81.7482C81.4749 76.3779 84.6535 69.7918 85.8607 62.732C87.4825 53.5493 87.0439 44.1267 84.5759 35.1299C85.62 35.47 86.6417 35.8739 87.635 36.3393C96.1617 40.3498 103.387 46.6318 108.498 54.4787C113.755 62.5463 116.545 71.9411 116.534 81.5366C116.541 86.2232 115.882 90.8877 114.576 95.393C112.193 103.583 107.719 111.03 101.585 117.019C96.8581 121.682 91.2387 125.368 85.0549 127.861C78.871 130.355 72.2465 131.605 65.5681 131.541C52.2168 131.403 39.458 126.072 30.0559 116.703C20.6537 107.334 15.3654 94.6813 15.3366 81.4861C15.3114 74.515 16.7381 67.6132 19.5278 61.2103L5.09883 56.0204C1.71036 64.0918 -0.0226808 72.7477 0.000224109 81.4861C0.0369129 98.6786 6.92834 115.164 19.181 127.369C31.4337 139.574 48.0601 146.515 65.4561 146.687H65.9455C74.5657 146.71 83.1054 145.05 91.0746 141.802C99.0438 138.554 106.286 133.783 112.384 127.762C120.133 120.201 125.849 110.849 129.015 100.553C130.913 94.3745 131.875 87.9528 131.87 81.4962C131.864 69.0061 128.217 56.7822 121.367 46.2857ZM51.18 74.5025C49.5321 73.8078 48.1177 72.6651 47.1011 71.2072C46.311 70.1249 45.6729 68.9418 45.2043 67.6902C44.2945 65.0997 43.9488 62.3485 44.1896 59.6168C44.4303 56.8851 45.2522 54.2343 46.6014 51.8383C48.7768 47.625 51.8414 43.9218 55.5882 40.9786C59.3351 38.0354 63.6772 35.9208 68.3216 34.7772C71.3093 43.5345 72.1453 52.1004 70.6769 60.1119C69.5145 66.5212 66.1799 71.9528 61.9889 74.2707C61.016 74.8224 59.9588 75.2138 58.8585 75.4296C56.2581 75.8412 53.5927 75.5055 51.18 74.4622V74.5025Z"
      fill="currentColor"></path>
    <path
      d="M438.98 124.406C429.16 140.893 416.199 146.858 398.548 146.858C376.685 146.858 356.24 130.735 356.24 103.294C356.24 101.48 356.321 99.7263 356.484 98.0132C358.758 73.8273 376.716 59.7189 398.548 59.7189H399.639H400.373H400.863L402.066 59.7894H402.668C403.096 59.7894 403.524 59.8599 403.942 59.9103L404.86 60.0213L405.452 60.1019L406.196 60.2127L407.073 60.3639C407.44 60.4243 407.807 60.4948 408.164 60.5755L409.041 60.767L410.142 61.029C410.805 61.1903 411.458 61.3816 412.11 61.5731L412.987 61.8553H413.15C413.772 62.0569 414.384 62.2786 414.986 62.5104L415.904 62.8731L416.842 63.2763L417.749 63.6894C418.259 63.9312 418.769 64.1831 419.269 64.4452C419.768 64.7072 420.187 64.9289 420.646 65.201C427.688 69.2483 433.264 75.3828 436.584 82.7357L423.694 86.9985C419.259 78.6745 410.061 74.0087 400.598 73.4242H399.966C399.751 73.4242 399.527 73.4242 399.303 73.4242H398.558C384.772 73.4242 373.381 82.9575 371.413 98.4969C371.234 99.9853 371.139 101.482 371.128 102.981C371.128 103.102 371.128 103.223 371.128 103.344C371.113 106.253 371.455 109.153 372.148 111.98C375.4 124.92 385.985 133.254 398.568 133.254C412.11 133.254 419.84 129.223 426.448 119.952L438.98 124.406Z"
      fill="currentColor"></path>
    <path
      d="M436.584 82.7457C433.024 74.978 426.955 68.598 419.33 64.6063C418.83 64.3544 418.31 64.1025 417.811 63.8606L416.903 63.4474L415.965 63.0444L415.047 62.6815C414.445 62.4497 413.834 62.2281 413.212 62.0266L413.048 61.966L412.172 61.6939C411.519 61.5024 410.866 61.3111 410.203 61.1498C409.836 61.049 409.469 60.9684 409.102 60.8878L408.225 60.6963C407.868 60.6156 407.501 60.5451 407.134 60.4847L406.257 60.3335L405.513 60.2227L404.921 60.1421L404.004 60.0311C403.585 60.0311 403.157 59.9404 402.729 59.9102H402.127L400.924 59.8397H400.435H399.7H398.609V73.4846H399.354H400.016C413.15 74.1195 423.837 83.562 425.724 98.5169C425.922 100.129 426.021 101.751 426.019 103.374H440.897C440.996 96.2697 439.524 89.2295 436.584 82.7457Z"
      fill="currentColor"></path>
    <path
      d="M440.836 103.284L440.571 111.92H362.338V98.4363H436.492L440.836 103.284Z"
      fill="currentColor"></path>
    <path
      d="M306.059 63.5079L278.445 125.887L272.521 139.28L270.838 143.059L261.977 163.083L257.419 173.372H240.889L254.308 143.059L255.981 139.28L256.389 138.363L261.916 125.887L263.17 123.045L289.53 63.5079H306.059Z"
      fill="currentColor"></path>
    <path
      d="M270.838 143.1L261.977 163.123L254.308 143.1L255.991 139.31L256.389 138.393C255.864 138.191 255.353 137.955 254.859 137.688L246.701 125.918L219.087 63.5383H236.82L263.17 123.076L264.424 125.918L269.156 139.31L270.838 143.1Z"
      fill="currentColor"></path>
    <path
      d="M278.445 125.887L272.521 139.28H261.192C259.536 139.279 257.896 138.968 256.358 138.363C255.833 138.161 255.322 137.925 254.829 137.658C252.305 136.277 250.313 134.113 249.159 131.5L246.671 125.887H278.445Z"
      fill="currentColor"></path>
    <path
      d="M350.346 63.5079H294.557V76.9915H350.346V63.5079Z"
      fill="currentColor"></path>
    <path
      d="M333.235 118.611L317.898 120.758V36.9942H333.235V118.611Z"
      fill="currentColor"></path>
    <path
      d="M333.235 77.0017H299.584V63.4878H308.996C311.357 63.4878 313.621 62.5609 315.291 60.911C316.96 59.2612 317.898 57.0235 317.898 54.6903V36.9741H333.194L333.235 77.0017Z"
      fill="currentColor"></path>
    <path
      d="M317.898 120.758C317.898 134.614 325.587 150.648 352.416 143.069V129.596C347.654 131.813 333.235 134.262 333.235 118.611"
      fill="currentColor"></path>
    <path
      d="M497.696 81.859C493.535 75.3187 487.192 73.1823 479.045 73.1823C470.642 73.1823 463.688 77.294 463.688 84.0459C463.688 92.783 473.1 93.8512 482.512 95.131C502.356 97.852 513.522 106.216 513.522 121.332C513.522 130.694 506.047 146.869 481.819 146.869C459.15 146.869 447.495 132.861 445.333 121.453L457.692 117.009C460.149 125.847 466.767 133.466 479.963 133.466C492.311 133.466 497.767 128.356 497.767 122.179C497.767 116.284 493.759 112.797 479.952 110.842C464.086 108.584 447.321 103.304 447.321 84.4591C447.321 71.1568 461.159 59.7592 479.004 59.7592C495.473 59.7592 506.863 68.0026 511.166 77.0118L497.696 81.859Z"
      fill="currentColor"></path>
    <path
      d="M156.038 21.8377H140.701V143.059H156.038V21.8377Z"
      fill="currentColor"></path>
    <path
      d="M184.998 59.729C161.626 59.729 144.536 77.7877 144.536 105.188C144.536 132.589 161.626 146.858 184.998 146.858C204.169 146.858 225.787 130.735 225.787 103.294C225.787 75.8529 204.169 59.729 184.998 59.729ZM183.489 133.204C168.326 133.204 156.038 121.524 156.038 103.294C156.038 84.9125 168.275 73.3739 183.489 73.3739C198.703 73.3739 210.94 84.9024 210.94 103.294C210.94 121.685 198.642 133.204 183.489 133.204Z"
      fill="currentColor"></path>
    <path
      d="M543.685 65.0799C545.489 66.1164 546.971 67.6223 547.968 69.4335C549.022 71.342 549.559 73.4872 549.528 75.6612C549.562 77.826 549.024 79.9621 547.968 81.8589C546.964 83.6571 545.483 85.1515 543.685 86.1822C541.796 87.2492 539.651 87.7922 537.475 87.7542C535.29 87.7902 533.135 87.2475 531.235 86.1822C529.424 85.1583 527.932 83.6629 526.921 81.8589C525.865 79.9621 525.327 77.826 525.361 75.6612C525.33 73.4872 525.867 71.342 526.921 69.4335C527.925 67.6165 529.418 66.1095 531.235 65.0799C533.135 64.0146 535.29 63.4718 537.475 63.5079C539.651 63.4698 541.796 64.0129 543.685 65.0799ZM544.603 82.9171C546.447 80.95 547.426 78.3406 547.326 75.6612C547.426 72.9818 546.447 70.3726 544.603 68.4055C543.685 67.459 542.574 66.7161 541.343 66.2262C540.113 65.7363 538.791 65.5105 537.465 65.5638C536.131 65.5085 534.801 65.733 533.562 66.2229C532.323 66.7127 531.203 67.4567 530.276 68.4055C528.432 70.3726 527.453 72.9818 527.553 75.6612C527.453 78.3406 528.432 80.95 530.276 82.9171C531.203 83.8659 532.323 84.6098 533.562 85.0996C534.801 85.5895 536.131 85.8142 537.465 85.7589C538.791 85.8121 540.113 85.5864 541.343 85.0964C542.574 84.6065 543.685 83.8636 544.603 82.9171ZM541.942 75.5102C541.321 76.201 540.478 76.6599 539.555 76.8101L543.226 82.0101L540.106 82.0705L536.741 76.931H535.334V82.0705H532.703V69.0707H538.393C539.554 68.9959 540.7 69.3556 541.605 70.0784C542.004 70.4418 542.318 70.8873 542.524 71.3835C542.73 71.8797 542.824 72.4147 542.798 72.9505C542.845 73.8793 542.539 74.7919 541.942 75.5102ZM535.334 74.7544H538.21C538.714 74.7752 539.21 74.6259 539.617 74.3311C539.804 74.1779 539.952 73.9828 540.047 73.762C540.143 73.5412 540.184 73.301 540.167 73.0613C540.187 72.8257 540.147 72.589 540.051 72.3725C539.955 72.1561 539.806 71.9668 539.617 71.8218C539.202 71.5459 538.709 71.4082 538.21 71.4288H535.334V74.7544Z"
      fill="currentColor"></path>
  </svg>
  <slot />
</article>

<style>
  article {
    max-width: 50rem;
    margin-inline: auto;
    padding-block: 5rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }
  article > :global(*) {
    max-width: 54ch;
  }
  small {
    color: var(--sl-color-gray-3);
  }
  svg {
    width: 15rem;
  }
</style>
````

## File: docs/src/components/code.astro
````
---
import { Code as SCode } from '@astrojs/starlight/components'

import fs from 'node:fs/promises';

interface Props {
  file: string;
  language?: string;
  meta?: string;
}

const { file, language, meta } = Astro.props;
const fileNamePath = '../' + file;
const fileEtension = file.split('.').pop() ?? 'js';
const code = await fs.readFile(fileNamePath, 'utf-8');
const lang  = language ?? fileEtension;
const metaa =  `title="${file}"` + (meta ? ` ${meta}` : '')


---

<SCode code={code} lang={lang} meta={metaa} />

<!-- <SCode code="console.log('Hello world!')" lang="js" /> -->
````

## File: docs/src/components/Comments.astro
````
---
---

<section class="giscus comments"></section>

<style>
	.comments {
     padding-top: 2rem;
     width: 100%;
  }
</style>


<script src="https://giscus.app/client.js"
        data-repo="obytes/react-native-template-obytes"
        data-repo-id="MDEwOlJlcG9zaXRvcnkyOTQ0MTk0OTg="
        data-category="Docs Comments"
        data-category-id="DIC_kwDOEYx8Ks4CaVTU"
        data-mapping="url"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="transparent_dark"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
````

## File: docs/src/components/GithubStar.astro
````
---
import { Icon } from '@astrojs/starlight/components';

---

<style>
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes slide-down {
    0% {
      transform: translate(-50%, -140%);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, 0%);
      opacity: 1;
    }
  }
  .spinner:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    margin-top: -6px;
    margin-left: -7px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-top-color: #333;
    animation: spinner 0.6s linear infinite;
  }
  .container{
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: transparent;
    drop-shadow: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08));
    border-radius: 20px;
    border: 1px solid var(--sl-color-accent-high);
    animation: slide-down 0.5s ease-in-out;
  }
  @media screen and (max-width: 768px) {
    .container{
      display: none;
    }
  }
  .link {
    display: flex;
    padding: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    gap: 0.5rem;
    align-items: center;
    border-radius: 9999px;
    border-width: 1px;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 100;
    background-image: background-image: linear-gradient(to right, var(--tw-gradient-stops));
    transition-duration: 300ms;
    text-decoration: none;
  }
  .link:hover {
    text-decoration: none;
    color: var(--sl-color-accent-high);
  }
  .star-count{
    font-weight: 700;
    min-width: 20px;
    color: transparent;
    background-clip: text;
    background-image: background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    background-color: #F59E0B;
    filter: drop-shadow(0 0 3rem var(--overlay-blurple));
    drop-shadow: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08));
  }

</style>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const starCountElement = document.getElementById("star-count");
    if (starCountElement) {
      starCountElement.classList.add("spinner");

      fetch("https://api.github.com/repos/obytes/react-native-template-obytes")
        .then((response) => response.json())
        .then((data) => {
          starCountElement.classList.remove("spinner");
          const starCount = data.stargazers_count;
          starCountElement.textContent = starCount;
        })
        .catch((error) => {
          starCountElement.classList.remove("spinner");
          console.error("Error:", error);
        });
    }
  });
</script>
<div class="container">
<a
  target="_blank"
  rel="noreferrer noopener"
  href="https://github.com/obytes/react-native-template-obytes"
  class="link">
  <span
    id="star-count"
    class="star-count"
  ></span>
  <Icon name="star" color="goldenrod" size="1rem" />
  <span class="opacity-50">|</span>
  <span class="">Give us a star on Github</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="m9 18 6-6-6-6"></path>
  </svg>
</a>
</div>
````

## File: docs/src/components/LastUpdated.astro
````
---
import type { Props } from '@astrojs/starlight/props';
import Default from '@astrojs/starlight/components/LastUpdated.astro';
import Comments from './Comments.astro';

const { lastUpdated } = Astro.props;

---

{
	lastUpdated && (
  <div class="container">
    <div class="last-updated">
      <Default {...Astro.props}><slot /></Default>
    </div>
    <Comments />
  </div>
	)
}


<style>
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
	.last-updated {
    width: 100%;
    text-align: right;
	}
</style>
````

## File: docs/src/components/reviews.astro
````
---
interface Review {
  name: string;
  role: string;
  content: string;
  image: string;
}

const reviews: Review[] = [
  {
    name: 'Aman Mittal',
    role: 'Docs Maintainer @Expo',
    content: `One of the <strong>best starter apps</strong> that feel complete to get started creating your Expo and React Native app. It's rare to see a project keeping up with the latest developments in the React Native world in a fast-changing environment, <strong>production-ready</strong> at the same time, and with such clear documentation around it.<br/><strong>Hats off to the Obytes team</strong> for creating it and actively maintaining it!`,
    image: '/aman.jpg',
  },
  {
    name: 'Yuri P. Baumgartner',
    role: 'React Native Developer',
    content: `The <strong>best React Native starter project ever!</strong> 🔥 <br/>I'm a React Native developer with more than 5 years of experience and I've seen a lot of React Native projects, templates and boilerplates but this is the <strong>best one</strong>. Here we have all of the steps to build an app from scratch to production.<br/>The section that I really <strong>love</strong> is the Environment Variables, you make the really great way to handling this, guys!<br/>Thank u all 🩶`,
    image: '/yuri.jpeg',
  },

  {
    name: 'Simon',
    role: 'Founder @Galaxies_dev',
    content:
      'This template combines all the latest React and React Native <strong>best practices</strong> in one powerful starter. Combined with additional GitHub actions to build your app, this is one of the most future-proof React Native templates - and it’s even <strong>free!</strong>',
    image: 'simon.jpg',
  },
  {
    name: 'Kawtar CHOUBARI',
    role: 'React/React Native Developer',
    content:
      'This boilerplate has everything needed to build a robust mobile app. It <strong>saves a lot of time</strong> and I highly recommend 👌',
    image: '/kawtar.jpg',
  },
  {
    name: 'Brandon Eichhorn',
    role: 'Developer',
    content: '<strong>You guys are life savers!</strong>',
    image: '/brandon.png',
  },
];
---

<section class="reviews not-content">
  <h3 class="reviews-title">Trusted by React Native Developers Worldwide</h3>
  <p class="reviews-subtitle">
    Developers love our starter! Check out what they're saying:
  </p>
  <div class="review-grid">
    {
      reviews.map((review) => (
        <article class="review-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="130"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="quote-icon"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
          <div class="review-text">
            <Fragment set:html={review.content} />
          </div>
          <div class="review-footer">
            <img
              src={`/reviews/${review.image}`}
              alt={review.name}
              class="review-image"
            />
            <p class="review-author">
              <strong>{review.name}</strong>
              <span class="review-role">{review.role}</span>
            </p>
          </div>
        </article>
      ))
    }
  </div>
  <a
    href="https://github.com/obytes/react-native-template-obytes/discussions/357"
    class="add-review-link"
    target="_blank"
  >
    Love the template? Let us know ⭐️
  </a>
</section>

<style>
  .reviews {
    margin: 4rem 0;
    padding-top: 6rem;
  }
  .reviews-title {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    margin: 0 auto;
    color: var(--sl-color-white);
  }
  .reviews-subtitle {
    font-weight: 400;
    max-width: 650px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 2rem;
  }
  .review-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
  }

  .review-footer {
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    padding-top: 2rem;
  }
  .review-author {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    opacity: 0.8;
  }
  .review-role {
    font-size: 0.8rem;
    opacity: 0.8;
  }

  .review-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
  }
  .review-content {
    border-radius: 1rem;
    border: 1px solid var(--sl-color-gray-5);
    background-color: var(--sl-color-black);
    padding: clamp(1rem, calc(0.125rem + 3vw), 2.5rem);
    flex-direction: column;
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
  }

  .review-text {
    font-style: italic;
    margin: 0;
    font-size: clamp(
      var(--sl-text-sm),
      calc(0.5rem + 1vw),
      var(--sl-text-body)
    );
    strong {
      color: var(--sl-color-white);
    }
  }

  .quote-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 68px;
    height: 68px;
    opacity: 0.2;
  }

  .add-review-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    margin: 2rem auto 0;
    color: var(--sl-color-text-accent);
    font-size: 0.9rem;
  }

  .add-review-link:hover {
    text-decoration: underline;
  }
</style>
````

## File: docs/src/content/docs/ci-cd/app-releasing-process.mdx
````
---
title: App releasing process
description: How to release your app to the App Store and Google Play
head:
  - tag: title
    content: App releasing process | React Native / Expo Starter
---

import CodeBlock from '../../../components/code.astro';

Releasing your app to the App Store and Google Play or even to your QA team for real testing is a very important step in the app development process. Internally, we tend to release a new version of the app to our QA team by the end of each sprint(every week or two weeks). This way, we can get feedback from our team and test the app on real devices.

Doing this in a weekly basis requires automating the process as much as possible to gain time and avoid a lot of manual work.

To make this process as easy as possible, we use Github action and expo eas to build and release our app to the App Store and Google Play.

## The Philosophy

The philosophy behind this process is to have a single task that you should trigger to build and distribute the app. This task should be triggered manually by any developer on the team.

The main idea is that we focus on the QA release process and push a new release to the QA team whenever our team pushes a new release to GitHub (at the end of the sprint). Whenever we feel that we are ready to push a new release to the App Store and Google Play, we can trigger a production release manually from the master branch or from the last GitHub release tag that has already been pushed to the QA team.

In conclusion, we have two types of releases:

- **QA release**: This release is triggered automatically whenever a new github release is created. This release is used to distribute the app to the QA team for testing.

- **Production release**: This release is triggered manually whenever we want to push a new release to the App Store and Google Play and can be build it based on the last GitHub release tag or from the master branch.

:::note
We aim to simplify the process as much as possible. Depending on your requirements, you can take inspiration from this process and modify it to meet your needs.
:::

## The Process

The starter comes with a set of tools and tricks that help make the process as easy as possible.

### `app-release` npm script

A simple npm script that run np package that helps us to manage the version of the app and push a new tag to GitHub.

```json
{
  "scripts": {
    "app-release": "cross-env SKIP_BRANCH_PROTECTION=true np --no-publish --no-cleanup --no-release-draft",
    "version": "pnpm run prebuild && git add ."
  }
}
```

If you run `pnpm run app-release`, it will ask you to choose the type of release (major, minor, patch). based on the type of release, it will update the version inside `package.json`.

As we use the version from package.json as app version inside `app-config.ts`, we just need to run the prebuild script to update App version inside the `ios` and `android` folders. The prebuild script will be executed automatically using a `version` script inside `package.json` that will handle the task for us. It will also add the changes to the commit that will be pushed to GitHub and create a new tag with the version number.

So technically, we just need to run `pnpm run app-release` and it will handle the rest for us. from updating native app version to pushing a new tag to GitHub.

### GitHub actions and Expo EAS workflows

The starter comes with a set of GitHub workflows that use EXPO EAS to build and distribute the app to the App Store and Google Play.

- `new-app-version.yml` : A workflow that run `app-release` script in order to update the app version and push a new tag to GitHub.

- `new-github-release.yml` : A workflow that is triggered whenever a new tag is pushed to GitHub. It will create a new GitHub release based on the tag name with the correct changelog.

- `eas-build-qa.yml` : A workflow that is triggered whenever a new release is created on GitHub. It will build the app using EXPO EAS and based on the config it will distribute.

- `eas-build-prod.yml` : A workflow that is triggered manually whenever we want to push a new release to the App Store and Google Play. It will build the app using EXPO EAS and based on the config it will distribute.

In conclusion, when you want to release a new QA version, manually execute `new-app-version.yml` with the correct release type. After successful execution, `new-github-release.yml` will be triggered automatically, followed by the automatic execution of `eas-build-qa.yml`. This will distribute the app to the QA team.

## Setup Release Process to your app

To setup the release process to your app, you need to follow these steps:

### Run Build Locally

First, make sure to create an [Expo](expo.dev) account then create a new organization for your project.

When then name of your organization is ready, you need to update the `EXPO_ACCOUNT_OWNER` variable in `env.js` file with the name of your organization.

**For QA release:**

```bash
pnpm run prebuild:staging
```

The above command will regenerate the iOS and Android folders based on the `staging` configuration.

Then run the following command to build the app using EAS:

:::caution
You need to be logged in to EAS using `eas login` command before running this command. check [step 1 and 2 from EAS docs](https://docs.expo.dev/build/setup/) for more details.
:::

```bash
pnpm run build:staging:ios
pnpm run build:staging:android
```

The above commands will generate the required credentials for the build and store them in EAS servers so that we can use them later to trigger the build from GitHub actions.

**For production release:**

```bash
pnpm run prebuild:production
pnpm run build:production:ios
pnpm run build:production:android
```

In case you want to submit the app to the App Store and Google Play, you need to check eas submit configuration and follow the steps from [EAS docs](https://docs.expo.dev/submit/introduction/).

### Setup GitHub Actions

All github workflows are already ready to be used in the starter. You just need to add the required secrets to your GitHub repo:

- GH_TOKEN: A [Github token](https://github.com/settings/tokens) with access to your repo.

- EXPO_TOKEN: Expo token to authenticate with EAS. You can get generate yours [here](https://expo.dev/settings/access-tokens)

### Github action and env variables

For simplicity, we assume that all your environment variables are already added to your env files and have been pushed to your repository.

If you prefer not to push env files (recommended), you need to add all your environment variables to GitHub secrets. Then, use `create-envfile` action to create the env file on the fly before the prebuild script.

```yaml
## .github/workflows/eas-build-prod.yml

- name: Create envfile
  uses: SpicyPizza/create-envfile@v2.0
  with:
    envkey_DEBUG: false
    envkey_SECRET_KEY: ${{ secrets.PRODUCTION_SECRET_KEY }}
    file_name: .env.production

- name: ⏱️ EAS Build
  uses: ./.github/actions/eas-build
  with:
    APP_ENV: production
    EXPO_TOKEN: ${{ secrets.EXPO_TOKEN }}
```

This action will create a new env file `.env.production` with the `DEBUG` and `SECRET_KEY` variables you added to the action. so make sure to include all your env variables to the action.

## Create new release

For QA release, Go to your GitHub repo actions tab and run `new-app-version` workflow with the your desired release type.

![new-app-version](https://github.com/obytes/react-native-template-obytes/assets/11137944/efc62eda-a465-44ab-a185-860cfd2e9099)

After successful execution, a new tag will be pushed to master and then `new-github-release` workflow will be triggered automatically and create a github release based on the tag name with the correct changelog.

![new-github-release](https://github.com/obytes/react-native-template-obytes/assets/11137944/d3b9d8ff-37f8-4551-97c1-4c9fbc8860d3)

After that, `eas-build-qa` workflow will be triggered automatically and build the app using EAS and distribute it to the QA team.

For production release, Go to your GitHub repo actions tab and run `eas-build-prod` workflow manually.

```

```
````

## File: docs/src/content/docs/ci-cd/overview.mdx
````
---
title: Overview
description: All you need to know about the CI/CD of the starter.
head:
  - tag: title
    content: CI/CD | React Native / Expo Starter
---

CI/CD stands for Continuous Integration and Continuous Delivery/Deployment. It is a set of practices that help developers automate the process of building, testing, and distributing applications to end-users (such as app stores for mobile apps).

Having a good CI/CD process in place is crucial for any project, as it helps you save time and effort, as well as ensuring that you are delivering a high-quality product to your users. It helps avoid common mistakes and bugs, reduces your time to market, and allows for faster updates to your users.

As most of our projects are hosted on GitHub, we use [GitHub Actions](https://github.com/features/actions) and [Expo EAS](https://expo.dev/eas) as our CI/CD solution. The starter kit comes with over 10 GitHub Actions workflows:

- `.github/workflows/lint-ts.yml`: On PR and new commits on the master branch, run linting and formatting checks.
- `.github/workflows/test.yml`: On PR and new commits on the master branch, run unit tests.
- `.github/workflows/type-check.yml`: On PR and new commits on the master branch, run type checking.
- `.github/workflows/compress-images.yml`: On new commits to the master branch, when adding images, open a pull request (PR) with the compressed images.
- `.github/workflows/expo-doctor.yml`: On PR and new commits to the master branch, check whether dependencies are aligned with the Expo SDK version.
- `.github/workflows/new-app-version.yml`: A workflow to manually trigger and update the app version, and publish a tag.

You can check the full list of workflows [here](/ci-cd/workflows-references/)

Pushing the new release to the stores is a weekly process for our team. To make it easier, we have created a simple process using GitHub Actions and Expo EAS. You can check the full guide [here](/ci-cd/app-releasing-process/).
````

## File: docs/src/content/docs/ci-cd/workflows-references.mdx
````
---
title: Github Action workflows
description: A list of all the Github Action workflows that come with the starter and how to use them.
head:
  - tag: title
    content: Github Action workflows | A list of all the Github Action workflows that come with the starter and how to use them.
---

import CodeBlock from '../../../components/code.astro';

The starter comes with over 10 GitHub Actions workflows that help you automate the process of checking, testing, releasing, and much more.

All those workflows are self-documented and contain all details directly inside the workflow file as comments. This approach makes it easier to understand what each workflow does and how to use it without having to go back and forth between the documentation and the workflow file.

This page lists all workflows and actions we use and adds more details on the approach we are using to make those workflows as simple as possible.

All files related to GitHub Actions are located in the `.github/workflows` and `.github/actions` folders.

## Actions

You can think of actions as functions that are used by workflows to perform a specific task and allow you to reuse the same task in multiple workflows without duplicating the code which made them easier to maintain.

All actions are located in the `.github/actions` folder, and here is the complete list:

### ⚙️ Node setup and PNM install

<CodeBlock file=".github/actions/setup-node-pnpm-install/action.yml" />

### ⚙️ Setup JDK && Generate APK

<CodeBlock file=".github/actions/setup-jdk-generate-apk/action.yml" />

### ⚙️ EAS Build

<CodeBlock file=".github/actions/eas-build/action.yml" />

## Workflows

### ⚙️ Linting and formatting

<CodeBlock file=".github/workflows/lint-ts.yml" />

### ⚙️ Type checking

<CodeBlock file=".github/workflows/type-check.yml" />

### ⚙️ Expo Doctor

<CodeBlock file=".github/workflows/expo-doctor.yml" />

### ⚙️ Compress Images

<CodeBlock file=".github/workflows/compress-images.yml" />

### ⚙️ Running Tests + Coverage Reports

<CodeBlock file=".github/workflows/test.yml" />

### ⚙️ New App Version

<CodeBlock file=".github/workflows/new-app-version.yml" />

### ⚙️ New Github Release

<CodeBlock file=".github/workflows/new-github-release.yml" />

### ⚙️ EAS Build QA

<CodeBlock file=".github/workflows/eas-build-qa.yml" />

### ⚙️ EAS Build Prod

<CodeBlock file=".github/workflows/eas-build-prod.yml" />

### ⚙️ E2E Test for Android

<CodeBlock file=".github/workflows/e2e-android.yml" />

### ⚙️ E2E Test for Android using Maestro Cloud

<CodeBlock file=".github/workflows/e2e-android-maestro.yml" />

### ⚙️ E2E Test for Android using EAS Build

<CodeBlock file=".github/workflows/e2e-android-eas-build.yml" />
````

## File: docs/src/content/docs/getting-started/create-new-app.md
````markdown
---
title: Create a new App
description: Let's create a new React native project with obytes starter.
head:
  - tag: title
    content: Create a new App | React Native / Expo Starter
---

Let's create a new React Native project with Obytes starter.

## Requirements

First make sure you have the following tools installed on your machine:

- [React Native dev environment ](https://reactnative.dev/docs/environment-setup)
- [Node.js LTS release](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall), required only for macOS or Linux users
- [Pnpm](https://pnpm.io/installation)
- [Cursor](https://www.cursor.com/) is recommended but you can use [VS Code Editor](https://code.visualstudio.com/download).

## Initializing a new project

First make sure you have `pnpm` installed on your machine, if not you can install it using the following command:

```bash
npm install -g pnpm
```

Start your project using `create-obytes-app` command:

```bash
npx create-obytes-app@latest MyApp
```

The command will create an expo app named `MyApp` and install all the dependencies added by the starter.

:::note
Because we're using the Expo custom dev client to support native dependencies with the starter, The Expo Go app is not an option to consider here. Instead, you need to create the app and install it on your simulator or device to start using it.
:::

:::note
Adhere to Android's specific naming conventions as described in [the Android documentation](https://developer.android.com/build/configure-app-module).
The name must satisfy the following rules:

- It must have at least two segments (one or more dots).
- Each segment must start with a letter.
- All characters must be alphanumeric or an underscore [a-zA-Z0-9_].
  :::

## Open Project on Cursor or VS Code

Cursor is the recommended editor for this starter, The starter comes with a list of recommended extensions, settings and project snippets that we think will improve your coding experience.

Open the project on Cursor using the following command:

```bash
cursor .
```

When you open the project on Cursor you will see a popup asking you to install the recommended extensions, The easy way is to install all recommended extensions by clicking on `Install All` button.

To ensure that your code is properly validated and formatted, we highly recommend installing all of the recommended extensions. However, if you're hesitant to install them all, we suggest at least installing the following extensions, as they are essential to our code validation and formatting on file save:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwindcss IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

Here is the complete list of recommended extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [tailwindcss IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Auto close tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Code spell checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [Cobalt 2 theme](https://marketplace.visualstudio.com/items?itemName=ahmadawais.theme-cobalt2)
- [Turbo console log](https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log)
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokallise.i18n-ally)
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

## Running the app

If the installation was successful, the created app should be ready to use, and because we are using the expo custom dev client, you may launch the app on your simulator or device by running the following command:

```bash
# Run the app on iOS simulator
pnpm ios

# Run the app on Android simulator
pnpm android
```
````

## File: docs/src/content/docs/getting-started/customize-app.mdx
````
---
title: Customize your App
description: Customize your app by updating Expo configuration and app icon and splash screen.
head:
  - tag: title
    content: Customize your App | React Native / Expo Starter
---

import Code from '../../../components/code.astro';

The starter is a simple expo app. You just need to edit `app.config.ts` file to update expo attributes and configuration.

Here is the complete config file :

<Code file="app.config.ts" />

You can read more about expo configuration [here](https://docs.expo.io/workflow/configuration/).
If you have any configurations that depend on environment variables, such as API URLs or keys, you can create it in `config` file following [the environment variables guide](/getting-started/environment-vars-config) and import your config to `app.config.ts` file.

:::note
We included TODO comments in the project to guide you to the areas requiring updates.
:::

## Splash screen and app icon

As we are using expo to create the starter, updating the app icon and splash screen is straightforward. You only need to update the app icon and splash screen images inside the `assets` folder and run `expo prebuild` to update the app icon and splash screen.

As we are supporting multiple variants for development, staging and production environments you need 3 different icons but the right solution is to use the same icon with badges for each environment.

For more details about the app icon and splash screen, please refer to the expo documentation.

👉 [Create a splash screen](https://docs.expo.dev/guides/splash-screens/)
````

## File: docs/src/content/docs/getting-started/environment-vars-config.mdx
````
---
title: Environment Variables and Configuration
description: Environment variables and configuration with validation and type-checking.
head:
  - tag: title
    content: Environment Variables and Configuration | React Native / Expo Starter
---

import Code from '../../../components/code.astro';

Managing environment variables in your project is an essential task, but it can also be challenging. That's why we have included a complete setup for environment variables in this project. This setup comes with validation and type-checking using the `zod` library.

All the code related to environment variables is located in the `env.js` and `src/lib/env.js` files. The `env.js` read the `APP_ENV` variable and loads the correct `.env` file, then defines the `zod` schema for the environment variables for client and build-time, parses the `_env` object, and returns the parsed object, or throws errors in case of invalid or missing variables.

To increase security, we are splitting environment variables into two parts:

- **Client Variables**: Variables that are safe to be exposed to the client and used in your `src` folder. These variables are passed to the client side using the `extra` configuration in the `app.config.ts` file.
- **Build Time Variables**: Variables that we don't need on the client-side and are only used in the `app.config.ts`, for example `SENTRY_AUTH` to upload the source maps to Sentry.

By using this pre-configured setup for environment variables, you can focus on building your project without worrying about managing and validating your environment variables.

This setup is highly inspired by [T3 Stack](https://create.t3.gg/) 👌

## Adding a new environment variable to the project.

To add a new environment variable to the project, follow these steps:

1. Add the new environment variable to the correct `zod` schema inside the `env.js` file based on this simple rule :
   If the variable is used in the `src` folder, add it to the `client` schema, otherwise add it to the `buildTime` schema.

This will ensure that the new variable is validated correctly. and make sure we are only sending the correct vars to the client side
Here's an example:

```js title="env.js"
const client = z.object({
  // ...
  // add the new environment variable here/ accessible on the client side and build time(app.config.ts)
  NEW_ENV_VAR: z.string(),
});

const buildTime = z.object({
  // ...
  // add the new environment variable here / accessible only on build time(app.config.ts)
  NEW_SECRET_ENV: z.string(),
});
```

2. Add the new environment variable to the correct env object inside the `env.js`, `_clientEnv` for client variables and `_buildTimeEnv` for build time variables. Here's an example:

```js title="env.js"
const _clientEnv = {
  // ...
  // add the new environment variable here
  NEW_ENV_VAR: process.env.NEW_ENV_VAR,
};

const _buildTimeEnv = {
  // ...
  // add the new environment variable here
  NEW_SECRET_ENV: process.env.NEW_SECRET_ENV,
};
```

3. Add the new environment variable to your `.env` files. Make sure to include it in all relevant files (`development`, `staging`, and `production`). Here's an example:

```bash title=".env.{APP_ENV}"
# ...
# add the new environment variable here
NEW_ENV_VAR=my-new-var
```

:::note
if you are not pushing env files to your repo(recomended), please make sure to check the [App releasing process](/ci-cd/app-releasing-process/#github-action-and-env-variables) to see how to create the env file on the fly before the prebuild script in the github actions.
:::

4. Make sure to run `pnpm prebuild` to load the new values.

```bash
pnpm prebuild
```

5. The new environment variable is now ready to use in your project. You can access it in your code using the `Env` object, like this:

```ts title="client.ts"
import { Env } from '@env';
import axios from 'axios';
export const client = axios.create({
  baseURL: Env.API_URL,
});
```

:::note[Important]
Using `import { Env } from '@env';` will import the env from the `src/lib/env.js` file, which export client only env vars.
:::

6. Use `APP_ENV` to load the correct `.env` file :

```bash
APP_ENV=production pnpm start -cc
```

As mentioned earlier, `zod` is used to validate environment variables at runtime and build time. If there are any missing or invalid variables, you'll see an error message with information on what needs to be fixed. Here's an example error message:

```bash
❌ Invalid environment variables: { TEST: [ 'Required' ] }
❌ Missing variables in .env.development file, Make sure all required variables are defined in the .env.development file.
💡 Tip: If you recently updated the .env.development file and the error still persists, try restarting the server with the -c flag to clear the cache.
```

:::note[Important]
As `dotenv` handles variables as strings, you need to convert them to the correct type while reading them from the `process.env` object. check the example below for more details on how to use numbers and boolean values.
:::

## How it works

#### ✅ Validate and parse environment variables

If you take a look at the `env.js` file, you will notice that the file is split into three main parts as shown below:

<Code file="env.js" />

**In the first part** We load the correct `.env` file based on the `APP_ENV` variable using `dotenv` package. If the `APP_ENV` variable is not defined, we default to `development`.

we define some static variables for the app such as the app name, bundle Id and package. While these variables can be added to the `.env` files, we recommend keeping them in the `env.js` file as they are not meant to change. To handle different app variants, you can add suffixes to these variables using the `withEnvSuffix` function.

**In the second part**, we define the `zod` schema for the environment variables.

We split the environment variables into two parts:

- **Client Variables**: Variables that are safe to be exposed to the client and used in the `src` folder.

- **Build Time Variables**: Variables that we don't need on the client-side and are only used in the `app.config.ts`, for example, `SENTRY_AUTH` to upload the source maps to Sentry.

These schemas are used to validate the environment variables. All the environment variables should be added to the correct schema.

We use the `z.infer` utility to infer the environment variables' types from the schema and use it to define the `_clientEnv` and `_buildTimeEnv` objects' type. This means that if you add a new environment variable to the schema, you will get a type error if you don't add it to the correct `_clientEnv` and `_buildTimeEnv` object as well, and vice versa.

**Finally**, in the third part, we merge variables to `_env`, pare it using the zod schema, and return the parsed object as well as the client environment variable, or throw errors in case of invalid or missing variables.

#### ✅ Use and send environment variables to the client

Now it's as easy as importing `Env` , `ClientEnv` and `withEnvSuffix` from the `./env.js` file and use inside our `app.config.ts`, and finally sending client env vars to the client side using `extra` property.

<Code file="app.config.ts" meta="{4,8-10}" />

#### ✅ Type checking for client environment variables

Here, we added a separate file to export all variables that have already been passed in the `extra` property to the client side. We added a little bit of magic to make it type-safe and easy to use.

<Code file="src/lib/env.js" />

Now the environment variables are ready to use in your project. You can access them in your code by importing `Env` from `@env` and using it like this:

```ts title="client.ts"
import { Env } from '@env';
import axios from 'axios';
export const client = axios.create({
  baseURL: Env.API_URL,
});
```
````

## File: docs/src/content/docs/getting-started/project-structure.mdx
````
---
title: Project Structure
description: Project structure files and folders.
head:
  - tag: title
    content: Project Structure | React Native / Expo Starter
---

import { FileTree } from '@astrojs/starlight/components';
import Code from '../../../components/code.astro';

If you open the new project in VSCode you will see the following structure:

<FileTree>

- api ## any thing related to api calls and data fetching
  - common/
  - index.tsx
  - posts
  - types.ts
- app ## app routes and layouts
  - (app)/
  - \_layout.tsx
  - feed/
  - login.tsx
  - onboarding.tsx
- components ## any reusable components
  - ui ## core ui and theme configuration
    - button.tsx
    - checkbox.tsx
    - colors.js
    - focus-aware-status-bar.tsx
    - icons
    - image.tsx
    - index.tsx
    - input.tsx
    - list.tsx
    - modal.tsx
    - progress-bar.tsx
    - select.tsx
    - text.tsx
    - utils.tsx
  - buttons.tsx
  - card.tsx
  - colors.tsx
  - cover.tsx
  - inputs.tsx
  - login-form.test.tsx
  - login-form.tsx
  - settings/
  - title.tsx
  - typography.tsx
- lib ## core files such as auth, localization, storage and more
  - auth
  - env.js
  - hooks
  - i18n
  - index.tsx
  - keyboard.ts
  - storage.tsx
  - test-utils.tsx
  - use-theme-config.tsx
  - utils.ts
- translations ## translation resources files
  - ar.json
  - en.json
- types ## global types
  - index.ts

</FileTree>

- `components/ui`: This folder contains all the UI components and the theme configuration. We provide minimal components with a basic `obytes` theme. You can add your own components and theme configuration here.

- `components`: This folder contains the components of the app. mainly components used inside the app folder.

- `lib`: This folder contains the core files, such as authentication, localization, storage, and more. It can be shared with other projects. That's why we are only including modules that have nothing to do with project logic. This approach helps us share code between projects and also update the starter with new features.

- `app`: This folder contains the routes of the app, along with its layout routes such as stack and tab navigation structures. We provide a basic navigation structure for the demo app that you can modify to fit your needs.

- `api`: This folder contains the API files. We provide a basic API client and provider and you just need to create query and mutation for your modules. Check `posts` folder for inspiration on how to create a query and mutation.

- `translations`: This folder contains the translation resources files. We recommend using translation files even if you are not supporting multiple languages as it will help you to support multiple languages in the future and also help you to find all the strings in one place.

- `types`: This folder contains the global types.

:::note
The structure is very opinionated but we think it's
the best way to structure a react native project. For sure you can change it as you like based on your needs.
:::

## Importing files

We use absolute imports to import files using the Babel module resolver plugin and TypeScript path mapping. This approach helps us avoid long relative paths and makes the code cleaner and more readable.

Here is a simple example of how the Feed screen looks with absolute imports.

<Code file="src/app/(app)/index.tsx" meta="{4-7}" />

This approach is very useful when you are working on a large project with a lot of files and folders and it can be done by updating the `babel.config.js` file and `tsconfig.json` file to the following:

<details>
  <summary>⚙️ Babel configuration</summary>
  <Code file="babel.config.js" meta="ins={8-27}" />
</details>

<details>
  <summary>⚙️ Typescript Config</summary>
  <Code file="tsconfig.json" meta="ins={5-9}" />
</details>
````

## File: docs/src/content/docs/getting-started/rules-and-conventions.mdx
````
---
title: Rules and Conventions
description: Rules and conventions that we follow in the starter.
head:
  - tag: title
    content: Rules and Conventions | React Native / Expo Starter
---

import Code from '../../../components/code.astro';

In order to enforce a consistent code style and avoid common issues in the codebase, we have a set of rules and conventions that we follow and enforce through the starter.

## Typescript

This starter uses TypeScript to provide type safety and avoid common bugs in the codebase. The project configuration is based on Expo config with some updates to support absolute imports.

If you are not familiar with Typescript, you can check this article to learn more about it : [Typescript for React Developers](https://elazizi.com/posts/how-to-learn-typescript-for-react-developers/)

You can find more information about it [here](https://docs.expo.io/guides/typescript/).

## Naming

We follow kabab-case for naming files and folders as we think it's the most readable and consistent way to name files and folders in large projects and it's the most common way to name files and folders in the react native community.

Example of kabab-case naming: `my-component.tsx`

For naming variables, functions, classes, interfaces, and enums, we follow camelCase as it's the most common way to name variables in the React community. It is enforced by the linter, as you cannot create a function component without using camelCase.

## Linting

Using a linter is a must in any JavaScript project. For starters, we are using ESLint with the React Native community config and some custom rules to ensure that we are following the rules and conventions related to file naming, Tailwind CSS classes, TypeScript types, import order, internationalization files, and more.

Here is the complete ESLint configuration file:

<Code file=".eslintrc.js" />

## Git Hooks with Husky

The starter comes with a set of git hooks that help us to enforce rules and conventions. Those hooks are configured using [Husky](https://typicode.github.io/husky/#/). and here is the complete list of the hooks:

### pre-commit

As the name suggest, this hook will run before each commit and it will make sure you are not committing directly on the main branch and it will run the linter and typescript checking on the staged files.

<Code file=".husky/pre-commit" language="bash" />

### post-merge

As the name suggest, this hook will run after each merge and it will check if there is any changed in pnpm-lock.yaml and if there is any, it will run `pnpm install` to make sure the dependencies are up to date.

<Code file=".husky/post-merge" language="bash" />

### commit-msg

This hook will check if the commit message is following the conventional commit format. If it's not, the commit will be aborted and will show you what going wrong with your commit message.

<Code file=".husky/commit-msg" language="bash" />

We are using [commitlint](https://commitlint.js.org/#/) to check if the commit message is following the conventional commit format.

In general, your commit message should follow this format:

```bash
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

Real world examples can look like this:

```txt
fix(ui): fix input width
feat(ui): add button variants
feat(api): add usePost query hook
```

`type` should be one of the following: build, chore, ci ,docs,feat,fix, perf, refactor, revert, style or test.

## 🔗 Resources

- [Typescript for React Developers](https://elazizi.com/how-to-learn-type-script-for-react-developers)
- [Typescript](https://docs.expo.io/guides/typescript/)
- [Husky](https://typicode.github.io/husky/#/)
- [commitlint](https://commitlint.js.org/#/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Eslint](https://eslint.org/)
````

## File: docs/src/content/docs/guides/authentication.mdx
````
---
title: Authentication
description: How to manage authentication in your app.
head:
  - tag: title
    content: Authentication | React Native / Expo Starter
---

import CodeBlock from '../../../components/code.astro';

Most of the applications we had the chance to work on required some sort of authentication and having a bad approach to do it can lead to a lot of problems. The starter kit comes with the basics and mostly what you need to start with authentication in your application.

As Authentication is global to the application, we end up using Zustand to manage the authentication state of the application.

[Zustand](https://github.com/pmndrs/zustand) is a state management library that is very simple to use and highly performant. It is also easy to integrate with React and works better than a simple context API, as it offers additional features such as selectors to prevent unnecessary re-renders.

Zustand works very well with TypeScript and can be easily used outside the React tree, which means more flexibility.

## Authentication Store

As mentioned earlier, we use Zustand to manage the authentication state of the application. The authentication store is located in `src/store/auth` and is utilized for managing the authentication state of the application.

<CodeBlock file="src/lib/auth/index.tsx" />

The store is composed of 2 states and 3 actions:

- `status`: The status of the authentication. It can be `idle`, `signOut` or `signIn`.

  - `idle`: Still not sure if the user is authenticated or not (when we are fetching tokens from the storage)
  - `signOut`: The user is not authenticated
  - `signIn`: The user is authenticated

- `useToken`: The token of the user. It is used to authenticate the user to the API. It is stored in the storage of the device and we use it to hydrate the authentication status state when the application is started.

  For the Demo app `useToken` is a simple object that contains the `accessToken` and the `refreshToken`. You can add more fields if you update the `TokenType` type in `src/lib/auth/utils.ts`.

- `signIn`: The function performs user sign-in. It accepts a token as a parameter, sets the token state, stores it locally, and updates the status to `signIn`.

- `signOut`: The action to sign out the user. It sets the token state to `null` and removes it from the storage as well as setting the status to `signOut`.

- `hydrate`: The action to hydrate the authentication status state. We call this action when the application is started to check if the user is authenticated or not. It fetches the token from the storage and sets the status to `signIn` if the token is not `null` or `signOut` if the token is `null`.

## Use Authentication store

You guessed it, you only need to import the store from `@/lib` and use it in your component or even call store actions from outside React.

```tsx
import { useAuth, hydrate } from '@/lib';

hydrate(); // call this when the application is started to check if the user is authenticated or not

const App = () => {
  const status = useAuth.use.status();
  const signOut = useAuth.use.signOut();

  return (
    <View>
      <Text>{status}</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};
```

## Use Case

Let's imagine we have a simple application that has a login navigator and a home navigator. The home navigator is only accessible if the user is authenticated, while the login navigator is accessible if the user is not authenticated.

In this case, you only need to retrieve the status from the authentication store and display the appropriate navigation based on the status.

<CodeBlock file="src/app/(app)/_layout.tsx" />
````

## File: docs/src/content/docs/guides/data-fetching.mdx
````
---
title: Data Fetching
description: Learn how to fetch data from a server using react-query and axios.
head:
  - tag: title
    content: Data Fetching | React Native / Expo Starter
---

import CodeBlock from '../../../components/code.astro';

From the beginning of React, the community has been building a rich ecosystem of tools and libraries that help you build your applications. One of the most important parts of this ecosystem is the ability to fetch data from a server and display it in your application.

While there are numerous options available for fetching data in React and React Native, the community has recently been gravitating towards adopting React Query as the go-to solution. The reason for this trend is due to React Query's simplicity, flexibility, and tone of features that it provides out of the box.

## What is react-query?

[React-query](https://tanstack.com/query/v4/docs/overview) It is a very powerful library that helps you manage your data fetching, caching, invalidating, and even implementing optimistic UI in a very simple way.

`react-query` offers hooks that simplify the process of fetching and updating data in your app. You can use pre-built hooks like `useQuery` and `useMutation`, or create your own custom hooks based on them. This makes it easier for developers to manage data and build more efficient applications.

## Using react-query-kit & axios

As the starter is designed to save you time and effort, we already have installed react-query and Axios and configured them for you.

The `src/api` folder contains all the fetching logic, with a `common` sub-folder that holds a `client`, `queryClient`, and several utility functions specifically designed to work with `react-query`.

Because we're using Axios as the client, we can leverage all its advanced features, including interceptors, request cancellation, and more. For additional information on Axios, you can check out their website [here](https://axios-http.com/).

To make writing queries and mutation even easier we are using [react-query-kit](https://github.com/liaoliao666/react-query-kit), a simple toolkit that makes ReactQuery reusable and type-safe with less boilerplate.

:::tip

You recommend reading Those guides and checking those resources to learn more about react-query:

- [React-query](https://tanstack.com/query/v4/docs/overview)
- [react-query-kit](https://github.com/liaoliao666/react-query-kit)
- [Practical React Query](https://tkdodo.eu/blog/practical-react-query)

:::

## Data Fetching Use Cases

Suppose you're building a blog app and need to add the following features:

- A Feed Screen that displays all posts
- A Post Screen that shows the details of a single post
- A Screen to create a new post

To get started, create a new folder named `posts` within `src/api`. This folder will hold all the post-related logic. You can apply this same concept to any other entities, such as users, within your application.

### Feed Screen

The feed screen will show all the posts available in the app. To achieve this, we need to create a hook called `usePosts` that will fetch the posts and display them as a list.

Here are the steps to create the `usePosts` hook:

1. Inside the `src/api/posts` folder, create a new file called `use-posts.ts`.
2. Define the type for your `Response` and `Variables` if required, to ensure that you receive the correct data from the server. For instance, you could create a `Post` type for the posts.
3. Use the `createQuery` function from `react-query-kit` library to create a query hook that will fetch the data from the server. We'll name it `usePosts` hook.

Below is the complete code for the use-posts.ts file:

<CodeBlock file="src/api/posts/use-posts.ts" />

the `createQuery` function accept an object with the following: `queryKey`, `fetcher` and `options`. Since we migrated to the latest version of `react-query-kit`, the `queryFn` property is replaced with `fetcher` and the `queryKey` structure is simplified. Read more about (createQuery)[https://github.com/liaoliao666/react-query-kit#createQuery]

:::tip
Use `useq` snippet to generate a query in no time using VSCode
![use-query](https://github.com/obytes/react-native-template-obytes/assets/114411010/c052a0ee-8fba-436a-950f-a0c7e44cf3ae)

:::

Now that we have created our custom hook, we can use it in our app to display a list of posts. Follow the steps below to achieve this:

1. Create a new screen in your app and name it Posts.
2. Import and use the usePosts hook we created earlier to fetch the list of posts.
3. Use the fetched data to display a list of posts.

<CodeBlock file="src/app/(app)/index.tsx" />

As you can see in the code above, we use the `usePosts` hook to fetch data and handle the loading state. This allows us to display a loading indicator while the data is being fetched, and then display the list of posts once the data is ready.

In the same example above we also show an error message if the request fails.

### Post Screen

The post screen will display the details of a single post. To fetch and display the post, we will create a new hook called `usePost`.

We can use the same steps we used earlier to create the `usePosts` hook. The only difference is that we will use the `id` of the post as a variable to fetch the specific post.

Below is the complete code for the `use-post.ts` file:

<CodeBlock file="src/api/posts/use-post.ts" />

Now our hook is ready to be used in our post details screen:

<CodeBlock file="src/app/feed/[id].tsx" />

### Add new post

To add a new post, we can use the `createMutation` function from the `react-query-kit` library.

Here are the steps to create the useAddPost hook:

1. Create a new file called `use-add-post.ts` inside the `src/api/posts` folder.
2. Define a type for your `Variables` and `Response` to ensure that you are sending the correct data to the server.
3. Use the `createMutation` function from `react-query-kit` library to create a mutation hook that will send the data to the server. We'll name this hook `useAddPost`.

Here is the complete code for the `use-add-post.ts` file:

<CodeBlock file="src/api/posts/use-add-post.ts" />

:::tip
Use `usem` snippet to generate mutation in no time using VSCode

:::

Now that we have our mutation hook ready. Let's create a new screen called `AddPost` and use data from `useAddPost` hook to create a new post:

Exactly the same way we did in [form section](/ui-and-theme/forms) while creating a login form, we will follow the same approach to create a from to create a new post.

1. Create the schema for the new form using Zod
2. Create the form using react-hook-form
3. Get `mutate` function from `useAddPost` hook and call it when the form is submitted
4. You can use the `isPending` state to display a loading indicator while the data is being sent to the server and then redirect the user to the feed screen on success.

<CodeBlock file="src/app/feed/add-post.tsx" />

## Create API Hooks with Vs Code Snippets

Maybe you mentioned that creating a new query or mutation hook looks the same every time and you are right. That is why we created a set of vscode snippets to help you create your hooks in no time.

- `useq` : Create a new query hook

![use-query](https://github.com/obytes/react-native-template-obytes/assets/114411010/c052a0ee-8fba-436a-950f-a0c7e44cf3ae)

- `useqv` : Create a new query hook with variables

- `useiq` : Create a new infinite query hook
- `usem` : Create a new mutation hook

![use-mutation](https://github.com/obytes/react-native-template-obytes/assets/11137944/c322f827-b71d-4629-a337-eb7cd96d4125)

## React Query dev tools plugin

For managing and and monitoring the `React Query` instances, we use the [React Query dev tools plugin](https://docs.expo.dev/debugging/devtools-plugins/#react-query), which offers us visibility into our data fetching processes and caching in real-time.
It gives the ability to refetch the data manually, inspect and remove queries, providing control over our data.
To use it, in the terminal press `shift` + `m` and choose from the opened list of dev tools the React Query plugin. The plugin's web interface will open and display the queries, enabling efficient debugging like in the example below:

![React Query plugin web interface](https://github.com/obytes/react-native-template-obytes/assets/114411010/26bc96ef-e6cb-49c3-be3c-006d6901e440)
````

## File: docs/src/content/docs/guides/internationalization.mdx
````
---
title: Internationalization
description: How to add internationalization to your app.
head:
  - tag: title
    content: Internationalization | React Native / Expo Starter
---

import CodeBlock from '../../../components/code.astro';

The starter comes with a basic internationalization setup. It uses [expo-localization](https://docs.expo.dev/guides/localization/) and [i18next](https://www.i18next.com/) to provide a simple way to translate your app.

## Adding a new language

Mainly the demo app supports two languages: English and Arabic (RTL). You can add more languages by adding the translation files in the `src/translations` folder and adding the language code to the `src/lib/i18n/resources.ts` file.

<CodeBlock file="src/lib/i18n/resources.ts" />

:::tip
Anything related to internationalization should be found in the `src/lib/i18n` folder.
:::

## Using translations in your app

The i18n core module provides a set of utility functions to help you use translation in your app.

- `useTranslation` hook from `react-i18next`: to get the translation function.

```tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@/components/ui';

export const Foo = () => {
  const { t } = useTranslation();
  return (
    <>
      <Text className="text-center">{t('settings.language')}</Text>
    </>
  );
};
```

or as `Text` component comes with translation support, you can easily use it as follows:

```tsx
import React from 'react';

import { Text } from '@/components/ui';

export const Foo = () => {
  return <Text className="text-center" tx="settings.language" />;
};
```

- `useSetLanguage` hook: to change the current language. This hook returns the selected language and a function to change the language.

Additionally, the `useSetLanguage` hook will save the selected language in device storage using `MMKV` and will be used as the default language when the app is opened again As well as adding some extra config for RTL languages while updating the selected language.

<CodeBlock file="src/lib/i18n/utils.tsx" />

## Robust translation

**Typescript support**

To make the translation for your app more robust and easy to maintain, we have added TypeScript support for the translation function. This ensures that you are using the correct translation key and provide auto-completion for the translation keys.
Here is an example of the error you will get if you are using the wrong translation key.

![typescript-translation](https://github.com/obytes/react-native-template-obytes/assets/11137944/80a7a0fd-a6f8-4d31-a450-46de797ebdc6)

## Eslint rules

We have also added ESLint rules to ensure that your translation file resources are always up to date. These rules will run as a pre-commit hook whenever you attempt to commit changes to the translation files.

We utilize [eslint-plugin-i18n-json](https://github.com/godaddy/eslint-plugin-i18n-json) alongside a customized validation script for i18next. This script helps sort keys, ensures that all resource files are identical and prevents any missing translations.
````

## File: docs/src/content/docs/guides/navigation.mdx
````
---
title: Expo Router
description: How to use Expo Router in your app.
head:
  - tag: title
    content: Expo Router | React Native / Expo Starter
---

import CodeBlock from '../../../components/code.astro';

[expo-router](https://docs.expo.dev/router/introduction/) is a navigation library provided by Expo that simplifies the implementation of navigation in React Native applications. It is built on top of React Navigation, a widely used navigation library, and abstracts away much of the complexity involved in managing navigation state and transitions between screens.

Navigation in Expo Router is expressed declaratively, utilizing components to define the flow of the application. This approach makes it intuitive for developers to structure their navigation hierarchy.

Conventional React Native projects typically adopt a structure where a sole root component is commonly specified in either ./App.js or ./index.js. Within the context of Expo Router, an alternative approach is offered through the utilization of the Root Layout, located in `app/_layout.tsx` in our Demo. Thereby, the `_layout` section of our app handles the overall structure and navigation setup.

<CodeBlock file="src/app/_layout.tsx" />

The Demo app comes with a simple stack and tabs layout. Feel free to remove what is not working for you and add your own using the same approach as the existing ones.

Here is a simple example of the tabs layout.

<CodeBlock file="src/app/(app)/_layout.tsx" />

Make sure to check the official docs for more information and examples about [expo-router](https://docs.expo.dev/router/introduction/).
````

## File: docs/src/content/docs/guides/storage.mdx
````
---
title: Storage
description: Storage guide with mmkv library
head:
  - tag: title
    content: Storage| React Native / Expo Starter
---

import CodeBlock from '../../../components/code.astro';

# Storage

The starter comes with a simple storage module that uses [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) to store data in a key-value format. We also added a simple storage utility to assist you in using the storage module.

<CodeBlock file="src/lib/storage.tsx" />

The `react-native-mmkv` library provides various features such as using hooks and adding encryption to stored data. Feel free to check the [official docs](https://github.com/mrousavy/react-native-mmkv) for more information.
````

## File: docs/src/content/docs/guides/upgrading-deps.mdx
````
---
title: Upgrading project dependencies
description: How to update your project dependencies
head:
  - tag: title
    content: Upgrading project dependencies | React Native / Expo Starter
---

import CodeBlock from '../../../components/code.astro';

:::note
Please note that this guide is intended for updating your project dependencies only, and it does not ensure that your project will be in sync with the latest version of the starter.

To take advantage of the latest improvements in the starter project, you will need to compare your `osMetadata.initVersion` with the latest release on GitHub, and manually apply any necessary changes to your project.
:::

## Easy way 🚀

Upgrading a React Native project to the latest version can be a challenging task. However, as we are using Expo with a custom dev client, the upgrade process is relatively straightforward compared to a bare React Native project, which requires a significant amount of manual work.

To update most of the dependencies that come with the starter, you can follow these simple steps:

First, go to GitHub and compare your `osMetadata.initVersion` in your `package.json` with the latest release. Check if the `package.json` has been updated. Then, copy the new dependencies and devDependencies versions and paste them into your package.json file.

Finally, run the following commands to make sure everything is working as expected:

```bash
rm -rf node_modules ## remove node_modules folder
pnpm install ## install new dependencies
pnpm run doctor ## check for any issues with the dependencies you added to your project
pnpm lint ## linting
pnpm type-check ## type checking
pnpm test ## tests
pnpm prebuild --clean ## clean ios and android build folders and regenerate them
pnpm ios ## run ios build
pnpm android ## run android build
pnpm start -c ## start the server
```

:::info
If your starter version does not have the `osMetadata.initVersion` property, don't worry. Simply follow the steps in the rest of this guide to upgrade your project.

Moreover, if you have added new dependencies to your project (which is common for most projects), the remaining sections of this guide will also assist you in upgrading your project's dependencies."
:::

## Upgrade Expo

Visit the npm package registry [here](https://www.npmjs.com/package/expo) to ensure that you are getting the latest version of Expo.

Once you have confirmed that you have the latest version, open your terminal and enter the following command:

```bash
pnpm add expo@latest
## pnpm add expo@48.0.5 for example
```

Thanks to the amazing work of the expo team, you can run the following command to upgrade your dependencies to match the correct version required by Expo last version.

```bash
pnpm expo install --fix
```

Running the command above will update your dependencies to ensure that they match the version requirements of Expo. In some cases, you may need to manually apply changes to your project in order to make it work with the new version. The command may also provide more detailed information on any necessary changes.

After updating your dependencies, run expo doctor to identify and fix any other issues that may be related to the new version of Expo and your devDependencies.

```bash
pnpm run doctor ## a script inside the starter
```

Running this command will generate a list of issues that require manual attention. In addition, it will provide a set of npm packages that need to be updated with the exact version required by the new version of Expo.

Now it's time to make sure everything is still working as expected 😀:

```bash
rm -rf node_modules ## remove node_modules folder
pnpm install ## install new dependencies
pnpm lint ## linting
pnpm type-check ## type checking
pnpm test ## tests
pnpm prebuild --clean ## clean ios and android build folders and regenerate them
pnpm ios ## run ios build
pnpm android ## run android build
pnpm start -c ## start the server
```

Unfortunately, there is no magic trick here in case you have any issues while running your checks, Fixing those errors may require some manual effort. You can start by reading the error message and identifying any relevant packages that may be causing the issue. Check the changelog of those packages to see if there have been any recent updates that might have introduced breaking changes. This will help you to pinpoint the root cause of the issue and take the necessary steps to resolve it.

The only rule here is to make sure that your project is working as expected before pushing your changes to the remote repository.

:::tip
Upgrading your project regularly can make the process much easier. We recommend upgrading your project a month after each new Expo major version is released. This will help you stay up to date with the latest features and security updates while minimizing the risk of encountering compatibility issues with older versions of Expo.
:::

## Upgrade Non Native dependencies

While Expo upgrade will help you update most native dependencies automatically through the process outlined above, it's important to keep in mind that non-native dependencies(JS only) may also need to be updated.

This time you will use the power of pnpm to update dependencies to the last version and then run our checks to make sure everything is working as expected.

First, run the following command:

```bash
pnpm up -i
```

When you run this command, it will generate a list of all dependencies associated with your project. You will then be prompted to select the dependencies that you want to update.

```bash
◯ zod                               latest  3.19.1   ❯  3.21.4   https://zod.dev
◯ zustand                           latest  4.1.4    ❯  4.3.6    https://github.com/pmndrs/zustand

 devDependencies
   name                              range   from        to       url
 ◯ @babel/core                       latest  7.20.2   ❯  7.21.0   https://babel.dev/docs/en/next/babel-core
 ◯ @commitlint/cli                   latest  17.2.0   ❯  17.4.4   https://commitlint.js.org/
 ◯ @commitlint/config-conventional   latest  17.2.0   ❯  17.4.4   https://commitlint.js.org/
 ◯ @testing-library/jest-native      latest  5.1.2    ❯  5.4.2    https://github.com/testing-library/jest-native#readme
 ◯ @testing-library/react-native     latest  11.4.0   ❯  11.5.3   https://callstack.github.io/react-native-testing-library
 ◯ @types/i18n-js                    latest  3.8.3    ❯  3.8.4    https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/i18n-js
 ◯ @types/jest                       latest  29.2.2   ❯  29.4.0   https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jest
 ◯ @types/react-native               latest  0.70.6   ❯  0.71.3   https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-native
❯◯ @typescript-eslint/eslint-plugin  latest  5.42.1   ❯  5.54.1   https://github.com/typescript-eslint/typescript-eslint#readme
 ◯ @typescript-eslint/parser         latest  5.42.1   ❯  5.54.1   https://github.com/typescript-eslint/typescript-eslint#readme
 ◯ babel-plugin-module-resolver      latest  4.1.0    ❯  5.0.0    https://github.com/tleunen/babel-plugin-module-resolver#readme
 ◯ eslint                            latest  8.27.0   ❯  8.35.0   https://eslint.org
 ◯ eslint-plugin-i18n-json           latest  3.1.0    ❯  4.0.0    https://github.com/godaddy/eslint-plugin-i18n-json#readme
 ◯ eslint-plugin-simple-import-sort  latest  8.0.0    ❯  10.0.0   https://github.com/lydell/eslint-plugin-simple-import-sort#readme
 ◯ eslint-plugin-tailwindcss         latest  3.6.2    ❯  3.10.1   https://github.com/francoismassart/eslint-plugin-tailwindcss
 ◯ eslint-plugin-unicorn             latest  43.0.2   ❯  46.0.0   https://github.com/sindresorhus/eslint-plugin-unicorn#readme
```

There is no one-size-fits-all solution for managing updates to your project's dependencies. However, we recommend reviewing the changelog of each package and paying particular attention to any major version updates (indicated by red text). Major version updates may introduce breaking changes that could potentially affect your project's functionality.

We recommend to start updating `devDependencies` first by following this process:

1. Select all `devDependencies` and update them to the latest version.
2. Run `pnpm doctor` to revert any changes that are not in sync with the Expo version you are using.
3. Run your checks to make sure everything is working as expected.

```bash
rm -rf node_modules ## remove node_modules folder
pnpm install ## install new dependencies
pnpm lint ## linting
pnpm type-check ## type checking
pnpm test ## tests
pnpm prebuild --clean ## clean ios and Android build folders and regenerate them
pnpm ios ## run ios build
pnpm android ## run android build
pnpm start -c ## start the server
```

If you are lucky enough and everything works as expected without any issues, you can now update the rest of the dependencies.

:::tip
In case your application is not tested enough, it's a good idea to take some time to go through the application and ensure that the most critical features are working correctly before committing any changes.
:::
````

## File: docs/src/content/docs/recipes/sentry-setup.mdx
````
---
title: Sentry Setup
description: How to setup Sentry in your app.
head:
  - tag: title
    content: Sentry Setup | React Native / Expo Starter
---

import CodeBlock from '../../../components/code.astro';
import { Steps } from '@astrojs/starlight/components';

Sentry is one of the most popular solution for error reporting in the javascript ecosystem and has a great integration with Expo, we have been using it for a while and it has been working very well.

The starter kit did not come with Sentry pre-configured, but it's very easy to setup and this guide will walk you through the process.

## Install and configure Sentry

<Steps>
1. Create a new [Sentry account](https://sentry.io/signup/) if you don't have one already. Once logged in, create a new project for your React Native app.

2. During project creation, pay close attention to and note down the following important details:

   - Organization slug
   - Project name
   - DSN

     we will use those details next to configure the Sentry SDK in your app.

3. Now you need also to generate a new Auth Token so you can use it to upload source maps to Sentry. To generate a new Auth Token you need to go to Developer [Settings > Auth Tokens](https://sentry.io/settings/auth-tokens/) and create a new token.

   - Copy and securely store the generated token. You'll need this for configuring source map uploads.

4. At this point, you should have the following environment variables that need to be added to your `.env` files:

   ```bash
   SENTRY_ORG=your_sentry_organization_slug
   SENTRY_PROJECT=your_sentry_project_name
   SENTRY_DSN=your_sentry_dsn
   ```

   :::note
   You can use the same Sentry configuration for all app variants (development, staging, production) as Sentry allows you to filter errors by app ID or package name in the dashboard. This simplifies setup and management while still providing the ability to distinguish between different environments.
   :::

   It's crucial to add these variables to `env.js` for validation. `SENTRY_ORG` and `SENTRY_PROJECT` should be added as build-time variables, while `SENTRY_DSN` should be added as a client variable.

   Update your `env.js` file as follows:

   ```js title='env.js'
   // ... existing imports and configurations

   const client = z.object({
     // ... other client env vars
     SENTRY_DSN: z.string().min(1, 'SENTRY_DSN is required'),
   });

   const buildTime = z.object({
     // ... other build-time env vars
     SENTRY_ORG: z.string().min(1, 'SENTRY_ORG is required'),
     SENTRY_PROJECT: z.string().min(1, 'SENTRY_PROJECT is required'),
   });

   const _clientEnv = {
     // ... other client env vars
     SENTRY_DSN: process.env.SENTRY_DSN,
   };

   const _buildTimeEnv = {
     // ... other build-time env vars
     SENTRY_ORG: process.env.SENTRY_ORG,
     SENTRY_PROJECT: process.env.SENTRY_PROJECT,
   };

   // ... rest of the file
   ```

   :::note
   The `SENTRY_AUTH_TOKEN` should not be added to the `.env` file as it's sensitive information that shouldn't be exposed or pushed to version control. Instead, add it as an EAS secret using the [Expo dashboard](https://expo.dev/accounts/[account]/projects/[project]/secrets) or the EAS CLI:

   ```bash
   eas secret:create --scope your-project-name --name SENTRY_AUTH_TOKEN --value your-token-value --type string
   ```

   This ensures that your Sentry authentication token remains secure while still being accessible during the build process.
   :::

5. Now you can install the Sentry SDK in your project.

   ```bash
   npx expo install @sentry/react-native
   ```

6. Add Sentry plugin config to your `app.config.ts` file.

   ```tsx title='app.config.ts'
   // rest of the file

   import { ClientEnv, Env } from './env';

   export default ({ config }: ConfigContext): ExpoConfig => ({
     ...config,
     // rest of the config

     plugins: [
       // rest of the plugins
       [
         '@sentry/react-native/expo',
         {
           url: 'https://sentry.io/',
           organization: Env.SENTRY_ORG,
           project: Env.SENTRY_PROJECT,
           note: 'Ensure you set the SENTRY_AUTH_TOKEN as an environment variable to authenticate with Sentry. Do not add it to the .env file. Instead, add it as an EAS secret or as an environment variable in your CI/CD pipeline for security.',
           // If you are using a self-hosted instance, update the value of the url property
           // to point towards your self-hosted instance. For example, https://self-hosted.example.com/.
         },
       ],
     ],
   });
   ```

7. Update your metro config to inject debug ID intro your source maps

   ```js title='metro.config.js'
   /* eslint-env node */
   // this replaces `const { getDefaultConfig } = require('expo/metro-config');`
   const { getSentryExpoConfig } = require('@sentry/react-native/metro');
   const { withNativeWind } = require('nativewind/metro');

   const config = getSentryExpoConfig(__dirname);

   module.exports = withNativeWind(config, { input: './global.css' });
   ```

8. Now you are ready to initialize Sentry in your app.
   Create a new file `src/lib/sentry.ts` and add the following code:

   ```tsx title='src/lib/sentry.ts'
   import { Env } from '@env';
   import * as Sentry from '@sentry/react-native';
   import { useNavigationContainerRef } from 'expo-router';
   import { useEffect } from 'react';

   const navigationIntegration = Sentry.reactNavigationIntegration({
     enableTimeToInitialDisplay: true,
   });

   export const initSentry = () => {
     if (!__DEV__) {
       Sentry.init({
         dsn: Env.SENTRY_DSN,
         integrations: [navigationIntegration],
       });
     }
   };

   export const useSentryNavigationConfig = () => {
     const navigationRef = useNavigationContainerRef();

     useEffect(() => {
       if (navigationRef && !__DEV__) {
         navigationIntegration.registerNavigationContainer(navigationRef);
       }
     }, [navigationRef]);
   };
   ```

   Then, initialize Sentry and configure it with navigation in your `src/app/_layout.tsx` file:

   ```tsx title='src/app/_layout.tsx'
   import { initSentry, useSentryNavigationConfig } from '@/lib/sentry';
   import * as Sentry from '@sentry/react-native';

   initSentry();

   function RootLayout() {
     useSentryNavigationConfig();

     return (
       <Providers>
         <Stack>
           <Stack.Screen name="(app)" options={{ headerShown: false }} />
           <Stack.Screen name="onboarding" options={{ headerShown: false }} />
           ...
         </Stack>
       </Providers>
     );
   }

   // Wrap your app with Sentry
   export default Sentry.wrap(RootLayout);
   ```

   This setup will enable Sentry error tracking and performance monitoring in your app.

9. One last thing is to add Apple privacy manifest to prevent any issues with Apple.
   Create a new file `apple-privacy-manifest.json` and add the following code:

   ```json title='apple-privacy-manifest.json'
   {
     "NSPrivacyCollectedDataTypes": [
       {
         "NSPrivacyCollectedDataType": "NSPrivacyCollectedDataTypeCrashData",
         "NSPrivacyCollectedDataTypeLinked": false,
         "NSPrivacyCollectedDataTypeTracking": false,
         "NSPrivacyCollectedDataTypePurposes": [
           "NSPrivacyCollectedDataTypePurposeAppFunctionality"
         ]
       },
       {
         "NSPrivacyCollectedDataType": "NSPrivacyCollectedDataTypePerformanceData",
         "NSPrivacyCollectedDataTypeLinked": false,
         "NSPrivacyCollectedDataTypeTracking": false,
         "NSPrivacyCollectedDataTypePurposes": [
           "NSPrivacyCollectedDataTypePurposeAppFunctionality"
         ]
       },
       {
         "NSPrivacyCollectedDataType": "NSPrivacyCollectedDataTypeOtherDiagnosticData",
         "NSPrivacyCollectedDataTypeLinked": false,
         "NSPrivacyCollectedDataTypeTracking": false,
         "NSPrivacyCollectedDataTypePurposes": [
           "NSPrivacyCollectedDataTypePurposeAppFunctionality"
         ]
       }
     ],
     "NSPrivacyAccessedAPITypes": [
       {
         "NSPrivacyAccessedAPIType": "NSPrivacyAccessedAPICategoryUserDefaults",
         "NSPrivacyAccessedAPITypeReasons": ["CA92.1"]
       },
       {
         "NSPrivacyAccessedAPIType": "NSPrivacyAccessedAPICategorySystemBootTime",
         "NSPrivacyAccessedAPITypeReasons": ["35F9.1"]
       },
       {
         "NSPrivacyAccessedAPIType": "NSPrivacyAccessedAPICategoryFileTimestamp",
         "NSPrivacyAccessedAPITypeReasons": ["C617.1"]
       }
     ]
   }
   ```

   Then add it to your `app.config.ts`

   ```ts title='app.config.ts'
   import applePrivacyManifest from './apple-privacy-manifest.json';
   export default ({ config }: ConfigContext): ExpoConfig => ({
     ...config,
     // rest of the config
     ios: {
       // rest of ios config
       privacyManifests: applePrivacyManifest,
     },
   });
   ```

   Read more about [Apple Privacy Manifest and sentry](https://docs.sentry.io/platforms/react-native/data-management/apple-privacy-manifest/)

10. Now you are ready to test Sentry integration. Follow these steps to ensure errors are being reported correctly:

    1. Run the prebuild command for your project.
    2. Launch the app in a simulator or on a physical device.
    3. Use the following code snippet to add error-triggering buttons to your app:

    ```tsx
    import React from 'react';
    import { View, Button } from 'react-native';
    import * as Sentry from '@sentry/react-native';

    const SentryTestComponent = () => {
      const throwJSError = () => {
        throw new Error('Test JavaScript Error for Sentry');
      };

      const triggerNativeError = () => {
        Sentry.nativeCrash();
      };

      return (
        <View>
          <Button title="Trigger JS Error" onPress={throwJSError} />
          <Button title="Trigger Native Error" onPress={triggerNativeError} />
        </View>
      );
    };

    export default SentryTestComponent;
    ```

    4. Implement this component in your app and interact with the buttons.
    5. Check your Sentry dashboard to verify that the errors are being reported correctly (make sure to wait a little bit for the errors to appear).

    Remember to remove or disable these test buttons before releasing your app to production.

</Steps>

## More Resources

- [Expo Sentry](https://docs.expo.dev/guides/using-sentry/)
- [Sentry Documentation](https://docs.sentry.io/platforms/react-native/manual-setup/expo/)
````

## File: docs/src/content/docs/testing/end-to-end-testing.mdx
````
---
title: End-to-End Testing
description: How to write end-to-end tests using Maestro
head:
  - tag: title
    content: End-to-End Testing | React Native / Expo Starter
---

import CodeBlock from '../../../components/code.astro';

Writing end-to-end tests is one of the best ways to ensure that your app is working as expected and simulate exactly how a user would interact with it. However, running those tests can be challenging and time-consuming due to their nature and the need to run them on a device or emulator.

The good news is that we have included [Maestro](https://www.mobile.dev/) the easiest way to run end-to-end tests yet very powerful and come up with a lot of features that will make your life easier.

One of Maestro's best features is its user-friendly test writing capability. It's incredibly simple to write tests using the app, making it accessible to PMs, QAs, and even designers.

:::tip
Watch this talk by the amazing Henry Moulton for more details about Maestro and how it can help you write better tests: [Henry Moulton – React Native end-to-end testing with Maestro | App.js Conf 2023](https://www.youtube.com/watch?v=uoCzBdFCoqc)

:::

## Installing Maestro

To install Maestro, run the following :

```bash
# a simple npm script that runs the following command:  curl -Ls 'https://get.maestro.mobile.dev' | bash
pnpm install-maestro
```

## Writing tests

Go to the `maestro` directory and write your tests.
Here is a quick test we wrote for log in screen using Maestro:

Read more about how to write end-to-end test with Maestro [here](https://maestro.mobile.dev/)

<CodeBlock file=".maestro/auth/login-with-validation.yaml" />

To run the tests, execute the following command:

```bash
pnpm e2e-test
```

This will run the tests on the local emulator and here is a recording of the test from maestro dashboard:

<video controls>
  <source
    src="https://github.com/obytes/react-native-template-obytes/assets/11137944/3b45de00-a369-436a-8faf-6ea1edbb44c3"
    type="video/mp4"
  ></source>
</video>

## Running tests on CI

Running tests on CI is very important to ensure that your code doesn't break when you push it to GitHub. However, running end-to-end tests is quite expensive and time-consuming. To test your app on CI, we need to first build the app, set up the emulator, and then run the tests. This process can consume a significant amount of time and resources.

For this reason, we do not recommend running end-to-end tests on every pull request pushed to GitHub. Instead, we recommend running them for pull requests that contain `test-android` labels so that we can trigger the tests manually by adding the correct label whenever you feel the PR is ready to be tested.

The starter comes with a bunch of GitHub actions that will help you run the tests on CI.

> for now we only support running tests on Android, we are working on adding support for iOS.

- `e2e-android.yml` - Triggered when a PR is labeled with `android-test-github` or run manually from the actions tab in GitHub.
  This action will generate a staging build for the app, set up the emulator, and run the tests using Maestro.

- `e2e-android-maestro.yml` - Triggered when a PR is labeled with `android-test-maestro-cloud` or run manually from the actions tab in GitHub.
  This action will run the tests using Maestro Cloud. You will need to add your Maestro Cloud token to the secrets in GitHub.

- `e2e-android-eas-build.yml` - Accepts a EAS APK URL and runs the tests. This action is triggered manually from the actions tab in GitHub.
````

## File: docs/src/content/docs/testing/overview.mdx
````
---
title: Testing Overview
description: What to test and how to test it.
head:
  - tag: title
    content: Testing Overview| React Native / Expo Starter
---

Testing is an essential part of any software development process. It helps ensure that your code is working as expected and that you don't introduce any bugs into your codebase. As we believe in the importance of testing, we have made it easy to write your tests with the starter template. We include the [Jest](https://jestjs.io/) testing framework and the [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) for unit tests, along with mocks for most libraries. We also use [Maestro](https://maestro.mobile.dev/) for end-to-end tests.

## Testing approaches

It's clear that testing is important, but what should you test? Apparently, and especially for front-end apps (including mobile apps), there is no clear answer. Should I aim for 100% code coverage? Should I test every component?

The answer is it depends. It depends on your app, your team, and your goals. We believe that testing is a trade-off between the time you spend writing tests and the confidence you get from them. You should aim for a good balance between the two.

Aiming for 100% test coverage is not always a good idea and doesn't always make sense. Same with testing views and components that only render a UI. Instead, you should focus on the following:

- **Business logic**: Test component and function utilities that contain business logic. Form validation, data manipulation and calculations, etc.

- **Complex components**: Test components that contain complex logic. For example, components that contain a lot of conditional rendering, or components that contain a lot of state management logic.

Focus on the above and write unit tests for them. This will help you get the most out of your tests and will assist you in finding bugs early on.

To ensure that your app is functioning as expected, we recommend writing end-to-end tests, as they provide the highest level of confidence and help you test the app as a whole similar to how your users will use it.
````

## File: docs/src/content/docs/testing/unit-testing.mdx
````
---
title: Unit Tests
description: How to write unit tests using Jest and React Native Testing Library
head:
  - tag: title
    content: Unit Tests | React Native / Expo Starter
---

import CodeBlock from '../../../components/code.astro';

As we mention in the overview page of the testing section, we include the [Jest](https://jestjs.io/) testing framework and the [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) for unit tests, along with mocks for most libraries.

The following guide is not a tutorial on how to write tests using React Native Testing Library and Jest, but rather a guide on how to write tests with this starter and some best practices to follow. If you are not familiar with testing, we recommend reading the [official documentation](https://jestjs.io/docs/en/getting-started) of Jest and [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) to get familiar with them.

Also worth mentioning that we should aim to test the following:

- **Business logic**: Test component and function utilities that contain business logic. Form validation, data manipulation and calculations, etc.

- **Complex components**: Test components that contain complex logic. For example, components that contain a lot of conditional rendering, or components that contain a lot of state management logic.

## Writing tests

Let's start by writing a simple test for our login screen. We will test the following login form component:

<CodeBlock file="./src/components/login-form.tsx" />

:::tip

To make it easier to write tests, we are separating the form from any other logic related to API calls, navigation, etc. This way, we can test the form logic without having to worry about other things.

As you may have noticed, writing code with the intention of writing tests for it will assist us in producing cleaner code.
:::

Now, let's write a test for the login form component. We will test the following:

- The form renders correctly.
- Show the correct error messages on invalid or missing data.
- Submit the form with valid data and make sure that the `onSubmit` function is called with the correct data.

First, let's create a new file called `login-form.test.tsx` in the `src/screens/login` directory. Then, add the following code to it:

<CodeBlock file="./src/components/login-form.test.tsx" />

As you may notice from the code, we are importing a bunch of things from the `@/lib/test-utils` directory. This is a simple file that exports everything from the `@testing-library/react-native` library and overrides the `render` function to wrap the component with the providers we need. This way, we don't have to import the providers in every test file.

:::tip
You can update this file to add any other providers you need to wrap your components with as well as any other utility functions you need to use in your tests.

<CodeBlock file="src/lib/test-utils.tsx" />

use `setup` function in case you need to test interactions with the component. It returns a user (userEvent) object that you can use to interact with the component.
:::

Now that we have our test file ready, let's run it and see what happens. To run the test, run the following command:

```bash
pnpm  test
pnpm test:watch # To run the tests in watch mode
```

## Tests on CI with GitHub actions

It's important to run tests on CI in addition to local testing. This ensures that our code doesn't break when we push it to Github. We have added a GitHub action that runs tests for every push to the main branch or new pull request. It reports the results to GitHub through annotations and provides a summary of the tests along with coverage.

Here is an example of the output of the GitHub action:

![GitHub action output](https://github.com/obytes/react-native-template-obytes/assets/11137944/081896b2-bf74-490b-9ad5-da8e2bbc5c88)

:::tip
Aiming for 100% test coverage is not always a good idea and doesn't always make sense. Same with testing views and components that only render a UI
:::

## More tests

For more complex logic and components, we recommend taking a look at this amazing project which provides a lot of examples and best practices for testing React Native apps using React Native Testing Library and Jest:

[⚡️ React Native Testing](https://github.com/vanGalilea/react-native-testing/)

[React Native Testing Library Cookbook](https://callstack.github.io/react-native-testing-library/cookbook/index)
````

## File: docs/src/content/docs/ui-and-theme/components.mdx
````
---
title: UI Components
description: List of all UI components and how to use them.
head:
  - tag: title
    content: UI Components | React Native / Expo Starter
---

import { FileTree } from '@astrojs/starlight/components';
import CodeBlock from '../../../components/code.astro';

The starter comes with a set of basic components and a simple design system based on Nativewind to help you get started and save you time.

All those components can be found in the `src/components/ui` folder. Our philosophy is to keep the components as simple as possible and to avoid adding too much logic to them. This way, they are easier to reuse and customize.

Based on your needs, you can either use them as they are or customize them to fit your needs. You can also create new ones based on the same approach.

<FileTree>

- ui ## core ui and theme configuration
  - button.tsx
  - checkbox.tsx
  - colors.js
  - focus-aware-status-bar.tsx
  - icons/
  - image.tsx
  - index.tsx
  - input.tsx
  - list.tsx
  - modal.tsx
  - progress-bar.tsx
  - select.tsx
  - text.tsx
  - utils.tsx

</FileTree>

:::tip
To save time when creating new components or screens, we can simply start typing `comp` and press Enter to generate a new component with the correct structure.

![Create component](https://github.com/obytes/react-native-template-obytes/assets/11137944/ca84555f-12b7-4048-98b8-3c8391bd9918)
:::

## List

The `List` component references the FlashList component from the `@shopify/flash-list` package.

<CodeBlock file="src/components/ui/list.tsx" />

**Props**

- All `@shopify/flash-list` Props are supported

We also provide an `EmptyList` component that you can use to display a message when the list is empty. Feel free to customize it to fit your needs.

**Use Case**

```tsx
import * as React from 'react';
import { List, EmptyList, Text } from '@/components/ui';

const MyComponent = () => {
  return (
    <List
      data={['Item 1', 'Item 2']}
      renderItem={({ item }) => <Text>{item}</Text>}
      ListEmptyComponent={<EmptyList message="No items" />}
    />
  );
};
```

## Image

For the `Image` component, we use the `expo-image` library to provide a fast and performant image component. The `Image` component is a wrapper around the `Image` component from `expo-image` package with additional styling provided by `nativewind`.
The `cssInterop` function from `nativewind` is used to apply styling and, in this way, the `className` property is applied to the `style` property of the `Image` component.

<CodeBlock file="src/components/ui/image.tsx" />

**Props**

- All `expo-image` Props are supported
- `className` - Tailwind CSS class names

**Use Case**

```tsx
import * as React from 'react';
import { Image } from '@/components/ui';

const MyComponent = () => {
  return (
    <Image
      className="w-32 h-32"
      source={{
        uri: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      }}
    />
  );
};
```

## Text

With this custom Text component, you can use the translation key as the `tx` prop, and it will automatically translate the text based on the current locale, as well as support right-to-left (RTL) languages based on the selected locale.

<CodeBlock file="src/components/ui/text.tsx" />

:::tip
You can also use the `t` snippet to create a simple Text with a default `className`.
:::

**Props**

- All React Native Text Props are supported
- `className` - Tailwind CSS class names
- `tx` - Translation key

**Use Case**

```tsx
import * as React from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  return (
    <View className="flex flex-col items-center justify-center">
      <Text className="text-2xl" tx="welcome" />
      <Text className="text-md" className="text-base">
        Hello world
      </Text>
    </View>
  );
};
```

## Button

The starter comes with a simple `Button` component that you can use to create a basic `Pressable` with a `Text` using Tailwind CSS classes and variant definitions. These variants' logic is based on the `tailwind-variants` package.

The `tv` function from `tailwind-variants` is used to create a function that generates a styling configuration object for the Button component based on slot definitions, variant, size , disabled status, full-width, and default variants. Consequently, the `styles` defines the styles for the Button based on the provided props using the `button` function.

Each variant should include styles for the `container`, `indicator`, and `label` keys. The `container` style is for the `Pressable`, the `label` style is for the `Text` component, and the `indicator` style is for the `ActivityIndicator` component when the `loading` prop is `true`.

<CodeBlock file="src/components/ui/button.tsx" />

**Props**

- All React Native Pressable Props are supported.
- `variant` - Button variant, one of `variant` objects keys (default: `default`)
- `loading` - Show loading indicator (default: `false`)
- `label` - Button label
- `size` - Button size, one of variants `size` objects keys (default: `default`)
- `className` - Tailwind CSS class names to be applied to the Button's container
- `textClassName` - Additional styling for the Button's label

**Use Case**

<CodeBlock file="src/components/buttons.tsx" />

## Input

We provide a simple `Input` component with a `Text` component for the label and a `TextInput` component for the input.

You can use it in the same way you use the `TextInput` component from React Native, but with additional props to customize the label and error styling.

The component utilizes the tv function from Tailwind Variants to define styling slots and variants for different states such as focused, error, and disabled. These styles are applied dynamically based on the component's state and props.

We tried to keep the ` Input` component as simple as possible, but you can add more functionality, such as `onFocus` and `onBlur`, or adding left and right icons to the input.

<CodeBlock file="src/components/ui/input.tsx" />

**Props**

- All React Native TextInput Props are supported
- `label` - Input label
- `error` - Input error message

We provide also a simple `ControlledInput` component that uses the `Input` component under the hood but with a `useController` hook from `react-hook-form` to make it ready to use with `react-hook-form` library.

Read more about Handling Forms [here](../forms/).

**Use Case**

```tsx
import * as React from 'react';
import { Input, View } from '@/components/ui';

const MyComponent = () => {
  return (
    <View className="flex flex-col items-center justify-center">
      <Input label="Email" error="Email is required" />
    </View>
  );
};
```

## Modal

We provide a simple `Modal` component using the `@gorhom/bottom-sheet` library to display a modal at the bottom of the screen.

We opt to use a bottom sheet instead of a modal to make it more flexible and easy to use. as well as having full control over the logic and the UI.

Based on your needs, you can use the `Modal` if you don't have a fixed height for the modal content.

<CodeBlock file="src/components/ui/modal.tsx" />

**Props**

- All `@gorhom/bottom-sheet` Props are supported
- `children` - Modal content
- `title`: `string` - Modal title

**Use Case**

```tsx
import * as React from 'react';
import { Modal, useModal, View, Button, Text } from '@/components/ui';

const MyComponent = () => {
  const modal = useModal();

  return (
    <View className="flex flex-col items-center justify-center">
      <Button variant="primary" label="Show Modal" onPress={modal.present} />
      <Modal ref={modal.ref} title="modal title" snapPoints={['60%']}>
        <Text>Modal Content</Text>
      </Modal>
    </View>
  );
};
```

## Select

We provide a simple `Select` component using a bottom sheet with a simple List component to select an item from a list of items.

We opt to use a bottom sheet instead of a dropdown to make it more flexible and easy to use on both iOS and Android and also to minimize the number of dependencies in the starter.

The component uses the `tv` function from Tailwind Variants to define styling slots and variants for different states such as error, and disabled. These styles are applied dynamically based on the component's state and props.

Feel free to update the component implementation to fit your need and as you keep the same Props signature for the `Select` component the component will work with our form handling solution without any changes.

<CodeBlock file="src/components/ui/select.tsx" />

**Props**

- `label`: `string` - Input label
- `error`: `string` - Input error message
- `options` : array of `{ label: string; value: string | number }` - List of items to select from
- `value` : `string | number` - Selected item value
- `onSelect`: `(option: Option) => void;` - Callback function to handle item selection
- `placeholder`: `string`- Placeholder text
- `disabled`: `boolean` - Disable select input (default: `false`)

**Use Case**

```tsx
import * as React from 'react';

import type { Option } from '@/components/ui';
import { SelectInput, View } from '@/components/ui';

const options: Option[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const MyComponent = () => {
  const [value, setValue] = React.useState<string | number | undefined>();
  return (
    <View className="flex flex-col items-center justify-center">
      <Select
        label="Select"
        error="Select is required"
        options={options}
        value={value}
        onSelect={(option) => setValue(option.value)}
      />
    </View>
  );
};
```

## Controlled Select

We provide a simple `ControlledSelect` component that uses the `Select` component under the hood but with a `useController` hook from `react-hook-form` to make it ready to use with `react-hook-form` library.

Read more about Handling Forms [here](../forms/).

## Checkbox, Radio & Switch

We provide a set of three simple and customizable components including a `Checkbox`, a `Radio`, and a `Switch`, which share the same logic under the hood.

The `Checkbox`, `Switch`, and `Radio` components are very similar as they share a common structure and are supposed to handle boolean values, their primary difference being the icon they display and the associated accessibility label. Each component accepts a range of props, allowing us to customize their appearance, behavior, and accessibility features.

For handling common functionality like handling press events and accessibility states we have the `Root` component. It wraps its children in a `Pressable` component and passes along props.

Animations are applied to the icons using the `MotiView` component from the `moti` library. These animations change the appearance of the icons based on their checked state.

<CodeBlock file="src/components/ui/checkbox.tsx" />

**Props**

- All React Native Pressable Props are supported excluding `onPress` prop
- `onChange` - (checked: boolean) => void;` - Callback function to handle component's state
- `checked` - `boolean`- Determines the state of the component (default:`false`)
- `label` - Component's label
- `accessibilityLabel` - Component's accessibility label
- `children` - Child components/elements
- `className` - Tailwind CSS class names
- `disabled`: `boolean` - Disable component (default: `false`)

**Use Case**

```tsx
import { Checkbox } from '@/components/ui';

const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={setChecked}
      accessibilityLabel="accept terms of condition"
      label="I accept terms and conditions"
    />
  );
};
```

By default the component will render a label with the text you passed as label prop and clicking on the label will toggle the component as well.

For rendering a custom Checkbox, you can use the `Checkbox.Root`, `Checkbox.Icon`, and `Checkbox.Label` components.

```tsx
import { Checkbox } from '@/components/ui';

const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox.Root
      checked={checked}
      onChange={setChecked}
      accessibilityLabel="accept terms of condition"
    >
      <Checkbox.Icon checked={checked} />
      <Checkbox.Label text="I agree to terms and conditions" />
    </Checkbox.Root>
  );
};
```
````

## File: docs/src/content/docs/ui-and-theme/fonts.mdx
````
---
title: Fonts
description: How to add custom fonts to your app.
head:
  - tag: title
    content: Fonts | React Native / Expo Starter
---

With Expo, you can load fonts dynamically using `useFont` hook from `expo-font` library. With this approach, you need to wait for the font to load before showing or hiding your splash screen.

With the last version of `expo-font` introduced with Expo 50, you can use `expo-font` as a plugin in your `app.config.js` to load fonts natively.

To add a custom font you only need to put the font file in the `assets/fonts` and update the expo config by adding the exact file path to the config like the following:

```js title="app.config.js"
import type { ConfigContext, ExpoConfig } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  plugins: [
    [
      'expo-font',
      {
        fonts: ['./assets/fonts/Inter.ttf'],
      },
    ],
  ],
});
```

Next, Make sure to add your new font to Tailwind CSS config to use it with `className`

```js title="tailwind.config.js"
const colors = require('./src/components/ui/theme/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      colors,
    },
  },
  plugins: [],
};
```

:::info
As we are linking font natively you need to run `expo prebuild` and then `expo ios` or `expo android` to use the new font.
:::

More details about adding fonts with Tailwind CSS can be found in the [Nativewind documentation](https://www.nativewind.dev/v4/tailwind/typography/font-family).
````

## File: docs/src/content/docs/ui-and-theme/Forms.mdx
````
---
title: Forms
description: How to handle forms with react-hook-form and controlled components.
head:
  - tag: title
    content: Forms | React Native / Expo Starter
---

import CodeBlock from '../../../components/code.astro';

Forms are a common feature of any application. In this section, we will show you how you can handle form the right way with the starter.

## react-hook-form

The starter uses [react-hook-form](https://react-hook-form.com/) to handle forms. It is a popular library that provides a lot of features out of the box. It is also very easy to use and integrate with React Native.

Make sure to check the [react-hook-form documentation](https://react-hook-form.com/) to learn more about how to use it.

As we mention in the components section of the documentation [here](../components/), we create a set of controlled components that are only used with react-hook-form. The starter only provides two components: `ControlledInput` and `ControlledSelect` but you can easily create other components using the same approach.

Here is the complete code of our `ControlledInput` when we use `useController` hook from react-hook-form to handle form state and validation rules:

<CodeBlock file="src/components/ui/input.tsx" />

If you want to create your own controlled component, you just need to make sure your component props type extends from `InputControllerType` the same way we are using it with `ControlledInput`.
Here is another example of a Select input we create using the same approach as `ControlledInput`:

<CodeBlock file="src/components/ui/select.tsx" />

## Use Case

Let's say you want to create a form that allows the user to log in to the application. You will need to create a screen that contains the form with email and password fields, as well as a submit button. The form will need to be validated, and the data will need to be sent to the backend. Here's how you can do it:

**Step 1: Create your schema validation **

The right way to validate a form is to create a schema validation. You can use any library you want but we recommend using zod as you can easily infer the types from the schema. Here is how you can create a schema validation for the login form:

```tsx
import * as z from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormType = z.infer<typeof schema>;
```

**Step 2: Create your form component**

Now that you have your schema validation, you can easily create your login screen using react-hook-form and the controlled components we already have.
Here is how you can create your login screen:

```tsx
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { useAuth } from '@/lib';
import { Button, ControlledInput, View } from '@/components/ui';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormType = z.infer<typeof schema>;

export const Login = () => {
  const { signIn } = useAuth();

  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
    signIn({ access: 'access-token', refresh: 'refresh-token' });
  };
  return (
    <View className="flex-1 justify-center p-4">
      <ControlledInput control={control} name="email" label="Email" />
      <ControlledInput
        control={control}
        name="password"
        label="Password"
        placeholder="***"
        secureTextEntry={true}
      />
      <Button
        label="Login"
        onPress={handleSubmit(onSubmit)}
        variant="primary"
      />
    </View>
  );
};
```

Done ! You have created a form with validation and typescript support.

:::tip
Any Component with props that inherit from the `InputControllerType` can be used with react-hook-form. You can easily create your own controlled component using the same approach as `ControlledInput` and `ControlledSelect`.
:::

## Handling Keyboard

The template comes with [`react-native-keyboard-controller`](https://kirillzyusko.github.io/react-native-keyboard-controller/) pre-installed and configured to handle the keyboard. You only need to check the [documentation](https://kirillzyusko.github.io/react-native-keyboard-controller/) and use the appropriate approach for your use case. ( note that we already added the `KeyboardProvider` to the layout in the root file)

Make sure to check the following video for more details on how to handle keyboard in react native:

<div class="embed-container">
  <iframe
    src="https://www.youtube.com/embed/Y51mDfAhd4E?si=8uPml61z0R1hsZGy&amp;start=1139"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>
````

## File: docs/src/content/docs/ui-and-theme/ui-theming.mdx
````
---
title: UI and Theming
description: How we manage the UI and theming of the application.
head:
  - tag: title
    content: UI and Theming | React Native / Expo Starter
---

import CodeBlock from '../../../components/code.astro';

How we manage the UI and theming of the application.

## Why [Tailwind CSS](https://tailwindcss.com/) ?

For the past few years, we have tried multiple approaches to style our React Native apps: Stylesheet API, styled-components, restyle, and more.

Right now, we are confident that using Tailwind CSS with React Native is the right solution, especially after trying [Nativewind](https://www.nativewind.dev/v4/overview).

If you are familiar with Tailwind CSS on the web you will find it very easy to use and you can even copy past your styling from a web application and should work without issues with react native too with some minor adjustments of course.

Last but not least, Tailwind CSS was a natural choice for us, considering that most of our team members come from a web background and have had the opportunity to work with Tailwind CSS before.

:::tip

If you are not familiar with Tailwind CSS, we recommend you read the [Tailwind CSS documentation](https://tailwindcss.com/docs) first.

We would also recommend playing with the [Tailwind CSS playground](https://play.tailwindcss.com/) to get a better understanding of how it works as well as practicing by building a simple web app with it before jumping into react native.

:::

## About Nativewind

Nativewind is a library that allows you to use Tailwind CSS with react native. Nativewind achieves this by pre-compiling the Tailwind CSS classes into react native stylesheets with a minimal runtime to selectively apply the styles.

NativeWind version 4 introduces several improvements and enhancements and provides a more efficient development experience. The transition to version 4 introduces a different approach that eliminates the need for creating and wrapping our own components with the `styled` component. Thereby, this utility-first approach simplifies the styling process by using classes and applying styles directly within JSX elements.

For more details about Nativewind you can check their [documentation](https://www.nativewind.dev/v4/overview/).

Here is an example of how your component should look like:

<CodeBlock file="src/components/card.tsx" />

## Configuration

Nativewind is the same as Tailwind CSS, it comes with a default theme and colors that you can override by creating your own theme and colors.

You need to understand that Nativewind is a library that is built on top of Tailwind CSS. Feel free to add any Tailwind CSS config that you want to use in your application such as updating colors, spacing, typography, etc.

We have created a `ui/theme` folder where you can find our custom colors that have been imported into `tailwind.config.js` and used as a theme for our demo application. You can add your own color palette and use them in your components with Tailwind class names.

You can read more about how to [configure your project with Tailwind CSS](https://tailwindcss.com/docs/configuration).

## Dark Mode

<video controls height="600" style="max-width:400px">
  <source
    src="https://github-production-user-asset-6210df.s3.amazonaws.com/11137944/238315572-37620367-b639-417e-a802-c48a3d7566ba.mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>

### Why dark mode?

Dark mode has gained significant traction in recent years and has become an expected feature to have.
By applying dark mode, it makes it easier on the eyes in low-light environments and reduces eye strain, which means more time spent on your app.

This template comes with dark mode support out of the box, and it's very easy to customize the color scheme of your app. Thanks to [tailwindcss](https://tailwindcss.com/docs/dark-mode)

### Implementation

Since we're using [nativewind](https://www.nativewind.dev/) (which uses Tailwind CSS under the hood) and expo-router we let them handle the application of theme, and we just take care of the colors we want.
We set the colors in `ui/theme/colors.js` and we use them in our hook `useThemeConfig.tsx` to get the theme object that we pass to ThemeProvider directly. For more information check out [expo-router](https://docs.expo.dev/router/appearance/)

<CodeBlock file="src/lib/use-theme-config.tsx" />

<CodeBlock file="src/app/_layout.tsx" />

### How do we handle theme changes?

We use the `loadSelectedTheme` function to load the theme from the storage if there's a theme saved in the storage, otherwise, we let nativwind use the default theme (system).
To set the selected theme, we use the `useSelectedTheme` hook, which sets the theme in the storage and updates the color scheme of the app.

<CodeBlock file="src/lib/hooks/use-selected-theme.tsx" />

### Add dark mode for each component

To add the values for the light mode, you can simply write them directly in your component class. For the dark mode, you can use the **dark:** variant.

```tsx
<View className="... border-neutral-200 dark:border-yellow-700">....</View>
```

If you want to use the style prop, you can use the `useColorScheme` hook to get the current color scheme and use it to apply the desired style. However, **in most cases, you won't need it** as the dark: variant will do the job.

```tsx
import { useColorScheme } from 'nativewind';

const colorScheme = useColorScheme();
const style =
  colorScheme === 'dark'
    ? { backgroundColor: 'black' }
    : { backgroundColor: 'white' };
```

For more details about dark mode, you can check [tailwind](https://tailwindcss.com/docs/dark-mode) and [nativewind](https://www.nativewind.dev/core-concepts/dark-mode)
````

## File: docs/src/content/docs/changelog.md
````markdown
---
title: CHANGELOG
description: New features, improvements, and bug fixes for the React Native / Expo Starter.
head:
  - tag: title
    content: Obytes Starter ChangeLog | React Native / Expo Starter
---

For complete changelog, please check the [GitHub releases](https://github.com/obytes/react-native-template-obytes/releases) page.
````

## File: docs/src/content/docs/faq.md
````markdown
---
title: Frequently asked questions
description: Frequently asked questions about the React Native / Expo Starter.
head:
  - tag: title
    content: FAQ | React Native / Expo Starter
---

This page is a collection of frequently asked questions about the React Native / Expo Starter.

### Is this starter for me?

Yes 😀

This starter kit is designed to benefit a wide range of React Native developers, from beginners to experienced professionals. Here's why it might be a good fit for you:

1. **For beginners:** It provides a solid foundation with best practices and common solutions, helping you learn industry-standard approaches to React Native development.

2. **For experienced developers:** It offers a well-structured, production-ready setup that can save you time and effort in project initialization and configuration.

3. **For teams:** It ensures consistency across projects and team members, making it easier to onboard new developers and maintain code quality.

4. **For explorers:** Even if you prefer not to use starter kits, this project can serve as a valuable reference. You can explore the codebase, documentation, and architectural decisions to gain insights and potentially adopt specific solutions for your projects.

5. **For learners:** The starter kit incorporates up-to-date libraries and patterns, allowing you to familiarize yourself with current best practices in the React Native ecosystem.

6. **For AI-assisted development:** This starter kit works well with AI coding tools. It provides a solid structure and best practices that can guide AI-generated code. This helps ensure that AI assistance leads to high-quality, maintainable code that fits well within your project.

Remember, you don't have to use the entire starter kit as-is. Feel free to cherry-pick ideas, configurations, or code snippets that align with your project needs. Whether you're building a new app from scratch or looking to improve your existing development process, this starter kit can provide valuable insights and practical solutions.

### Why Expo and not React Native CLI?

We have been using Expo as our main framework since the introduction of [Continuous Native Generation (CNG)](https://docs.expo.dev/workflow/continuous-native-generation/) concept and we are happy with the experience.

I think this question is not valid anymore, especially after the last React conference when the core React native team recommended using Expo for new projects.

> "As of today, the only recommended community framework for React Native is Expo. Folks at Expo have been investing in the React Native ecosystem since the early days of React Native and as of today, we believe the developer experience offered by Expo is best in class." React native core team

Still hesitating? Check out this [article](https://reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps) or this [video](https://www.youtube.com/watch?v=lifGTznLBcw), maybe this one [video](https://www.youtube.com/watch?v=ek_IdGC0G80) too.

### Who is behind the starter kit?

This starter kit has been maintained by the [Obytes mobile tribe team](https://www.obytes.com/team) since 2021. We actively use it for our internal projects and are excited to share it with the amazing React Native / Expo community. The project is open-source, released under the MIT license, ensuring flexibility for users. Our commitment to this starter kit is ongoing; we will continue to maintain and improve it as long as it remains a core part of our internal development process. We welcome contributions and feedback from the community to help make this starter kit even better.

### Can you include X feature or library?

We aim to keep the starter as simple as possible. Based on our experience, we believe the current setup provides a solid foundation for most projects.

The starter is opinionated, reflecting our best practices. If you disagree with some of our choices, that's perfectly fine. The starter is designed to be easily customizable to suit your specific needs.

We often receive requests to provide multiple choices for libraries and tools through a CLI. While this may seem appealing, it would significantly increase complexity and maintenance overhead, which we are trying to avoid.
````

## File: docs/src/content/docs/how-to-contribute.md
````markdown
---
title: How to Contribute
description: How to contribute to the project, including ways to show your support, report bugs, and more.
head:
  - tag: title
    content: How to Contribute | React Native / Expo Starter
---

Thank you for your interest in contributing to our project. Your involvement is greatly appreciated and we welcome your contributions. Here are some ways you can help us improve this project:

1. Show your support for the project by giving it a 🌟 on [Github](https://github.com/obytes/react-native-template-obytes). This helps us increase visibility and attract more contributors.
2. Share your thoughts and ideas with us by [opening an issue](https://github.com/obytes/react-native-template-obytes/issues). If you have any suggestions or feedback about any aspect of the project, we are always eager to hear from you and have a [discussion](https://github.com/obytes/react-native-template-obytes/discussions).
3. If you have any questions about the project, please don't hesitate to ask. Simply open a new [QA discussion](https://github.com/obytes/react-native-template-obytes/discussions/categories/q-a) and our team will do our best to provide a helpful and informative response.
4. If you encounter a bug or typo while using the starter kit or reading the documentation, we would be grateful if you could bring it to our attention. You can open an issue to report the issue, or even better, submit a pull request with a fix.

We value the input and contributions of our community and look forward to working with you to improve this project.
````

## File: docs/src/content/docs/index.mdx
````
---
title: Obytes Starter | React Native/Expo starter
description: "Your All-in-One Solution for Building Outstanding React Native/Expo Apps. From editor setup to store submission, we've got you covered!"
template: splash
lastUpdated: false
hero:
  title: Perfect React Native App Kickstart 🚀!
  tagline: "Your All-in-One Solution for Building Outstanding React Native/Expo Apps. From editor setup to store submission, we've got you covered!"
  image:
    file: ../../assets/logo.webp
  actions:
    - text: Get Started
      link: /overview
      icon: right-arrow
      variant: primary
    - text: Hire Us
      link: https://obytes.com/contact?utm_source=starter.obytes.com
      icon: external
      variant: secondary
---

import { Card, CardGrid } from '@astrojs/starlight/components';
import GithubStar from '../../components/GithubStar.astro';
import About from '../../components/about.astro';
import Reviews from '../../components/reviews.astro';

<GithubStar />

## Features

<CardGrid stagger>
	<Card title="Latest Expo SDK + Dev Client" icon="star">
		We utilize the most recent Expo SDK and React Native version, along with a custom development client feature, to guarantee that you can install any package and retain full control over your app.
	</Card>
  <Card title="Expo Router" icon="add-document">
		The latest version of Expo Router comes pre-installed and includes examples that demonstrate how to implement comprehensive navigation within your app.
	</Card>
  <Card title="10+ GitHub workflows" icon="open-book">
    From running type checks, tests, lint checks, and code formatting to
    generating a new app version, and building your app using EAS Build, already
    configured and ready to go!
  </Card>
  <Card title="Minimal UI kit with Tailwind CSS" icon="open-book">
		We've included a minimal UI with most of the components you'll need to get started with your project. It's built using Tailwind CSS and is very easy to customize.
  </Card>
	<Card title="VSCode Setup" icon="laptop">
		A complete list of recommended extensions, settings, and snippets for Visual Studio Code (VSCode) that enhance the developer experience and boost productivity.
	</Card>
	<Card title="TS + Eslint + Prettier + Husky" icon="setting">
		We use TypeScript, Eslint, Prettier, and Husky to ensure that your code is clean and consistent. No more worrying about code style or pushing bad code!
	</Card>
	<Card title="Fully Documented" icon="open-book">
		We've included a comprehensive set of documentation to help you get started with your project and understand our choices and decisions.
	</Card>
	<Card title="Multiple environment builds support" icon="setting">
		Multiple app environments with a robust solution to manage and validate environment variables with Zod. It enables easy switching between different environments throughout the development and deployment processes.
	</Card>

<Card title="Form and Keyboard Handling" icon="open-book">
  We use React Hook Form for form management and Zod for validation, along with
  a set of inputs for your app. We also include keyboard handling to provide a
  seamless user experience.
</Card>
<Card title="Auth Flow" icon="open-book">
  We have included a complete authentication flow based on Zustand as a state
  management library and `react-native-mmkv` as a secure and fast solution for
  storing tokens and other sensitive data.
</Card>

  <Card title="React Query + Axios" icon="open-book">
		We manage data fetching using React Query and Axios. These powerful libraries make it easy to fetch, cache, and update data in your React applications. We also include a set of VSCode snippets to make your life easier when creating queries and mutations.
	</Card>
  <Card title="Unit + E2E tests" icon="document">
		We provide a complete setup for unit and end-to-end tests using Jest and React Testing Library, along with Meastro for end-to-end testing. This will assist you in writing tests for your app and ensuring that it functions as expected.
	</Card>
</CardGrid>

<Reviews />

<About title="Built with ❤️ by">

In addition to maintaining this starter kit, we provide expertise in custom projects and app development. If you're looking for experienced and reliable developers to bring your app vision to life, reach out to us. Let's discuss your project and explore how we can help you achieve your goals.

[Hire Us](https://obytes.com/contact?utm_source=starter.obytes.com)

</About>
````

## File: docs/src/content/docs/libraries-recommendation.md
````markdown
---
title: Libraries Recommendation
description: React Native / Expo Libraries recommendation for the project based on use cases.
head:
  - tag: title
    content: Libraries Recommendation | React Native / Expo Starter
---

The starter kit comes with a set of pre-installed and configured libraries. We recommend using these libraries for your project.

Below, we'll list other libraries we often use in our projects. These aren't included in the starter because:

1. They're for specific use cases.
2. They need a lot of setup.

This way, you can add them to your project only if you need them, keeping things simple to start with.

### State Management:

The starter kit comes with Zustand out of the box but if your application implements a lot of workflows, you might want to use [XState](https://xstate.js.org/) as it's more powerful on managing complex workflows and state machines.

For example, if you have a workflow to create a new card for user and this workflow has a lot of steps and conditions, Zustand might not be the best choice as it's more designed for simple state management and XState is your best choice in this case.

### Error Reporting:

- [Sentry](https://sentry.io/welcome/): very popular solution for error reporting in the javascript ecosystem and has a great integration with Expo.

### Notifications:

There is no solution fit all for notifications, but based on your use case we would recommend one of the following:

- [Expo Push Notifications](https://docs.expo.dev/push-notifications/overview/)
- [OneSignal](https://onesignal.com/)

### Analytics:

- [PostHog](https://posthog.com/docs/libraries/react-native) : Easy to setup and use and has a great free tier.

- [Google Analytics](https://rnfirebase.io/analytics/usage)

### Charts:

- [Victory Native](https://github.com/FormidableLabs/victory-native-xl)

---

For sure we are missing some great libraries here, so we count on your contribution to add them in the comments sections below.
````

## File: docs/src/content/docs/overview.md
````markdown
---
title: Overview
description: An overview of why we built this starter, including its features, the libraries used, and more.
head:
  - tag: title
    content: Overview | React Native / Expo Starter
---

Welcome to the Obytes Mobile Tribe's Expo / React Native Starter Kit!

## 🚀 Motivation

Our goal with this starter kit was to streamline the process of building React Native apps, both for our own team and for our clients. We wanted to create a resource that would allow us to create high-quality apps faster and with less effort, while ensuring that all of our projects adhere to the same code standards and architectural principles.

The benefits of using this starter kit are numerous. It helps our team easily switch between projects, as we can rely on a consistent foundation of code. It also allows us to focus on the business logic of each project rather than getting bogged down in boilerplate code. And, because it promotes consistency across projects, it makes it easier to maintain and scale our apps, as well as share code between teams.

Overall, our starter kit is designed to facilitate efficient and effective app development, helping us to bring the best possible products to our clients

## ✍️ Philosophy

When creating this starter kit, we had several guiding principles in mind::

- **🚀 Production-ready**: We wanted to ensure that this starter was ready for real-world use, providing a solid foundation for building production-grade apps.
- **🥷 Developer experience and productivity**: Our focus was on creating a starter that would enhance the developer experience and increase productivity.
- **🧩 Minimal code and dependencies**: We aimed to keep the codebase and dependencies as small as possible.
- **💪 Well-maintained third-party libraries**: We included only well-maintained and reliable third-party libraries, to provide stability and support for our projects.

## ⭐ Key Features

- ✅ Latest Expo SDK with Custom Dev Client: Leverage the best of the Expo ecosystem while maintaining full control over your app.
- 🎉 [TypeScript](https://www.typescriptlang.org/) for enhanced code quality and bug prevention through static type checking.
- 💅 Minimal UI kit built with [TailwindCSS](https://www.nativewind.dev/), featuring common components essential for your app.
- ⚙️ Multi-environment build support (Production, Staging, Development) using Expo configuration.
- 🦊 Husky for Git Hooks: Automate your git hooks and enforce code standards.
- 💡 Clean project structure with Absolute Imports for easier code navigation and management.
- 🚫 Lint-staged: Run Eslint and TypeScript checks on Git staged files to maintain code quality.
- 🗂 VSCode recommended extensions, settings, and snippets for an enhanced developer experience.
- ☂️ Pre-installed [Expo Router](https://docs.expo.dev/router/introduction/) with examples for comprehensive app navigation.
- 💫 Auth flow implementation using [Zustand](https://github.com/pmndrs/zustand) for state management and [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) for secure data storage.
- 🛠 10+ [Github Actions](https://github.com/features/actions) workflows for building, releasing, testing, and distributing your app.
- 🔥 [React Query](https://react-query.tanstack.com/) and [axios](https://github.com/axios/axios) for efficient data fetching and state management.
- 🧵 Robust form handling with [react-hook-form](https://react-hook-form.com/) and [zod](https://github.com/colinhacks/zod) for validation, plus keyboard handling.
- 🎯 Localization support with [i18next](https://www.i18next.com/), including Eslint for validation.
- 🧪 Unit testing setup with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- 🔍 E2E testing capabilities with [Maestro](https://maestro.mobile.dev/) for comprehensive app testing.

## 🤔 Is this starter for me?

Yes 😀

This starter kit is designed to benefit a wide range of React Native developers, from beginners to experienced professionals. Here's why it might be a good fit for you:

1. **For beginners:** It provides a solid foundation with best practices and common solutions, helping you learn industry-standard approaches to React Native development.

2. **For experienced developers:** It offers a well-structured, production-ready setup that can save you time and effort in project initialization and configuration.

3. **For teams:** It ensures consistency across projects and team members, making it easier to onboard new developers and maintain code quality.

4. **For explorers:** Even if you prefer not to use starter kits, this project can serve as a valuable reference. You can explore the codebase, documentation, and architectural decisions to gain insights and potentially adopt specific solutions for your own projects.

5. **For learners:** The starter kit incorporates up-to-date libraries and patterns, offering an opportunity to familiarize yourself with current best practices in the React Native ecosystem.

6. **For AI-assisted development:** This starter kit works well with AI coding tools. It provides a solid structure and best practices that can guide AI-generated code. This helps ensure that AI assistance leads to high-quality, maintainable code that fits well within your project.

Remember, you don't have to use the entire starter kit as-is. Feel free to cherry-pick ideas, configurations, or code snippets that align with your project needs. Whether you're building a new app from scratch or looking to improve your existing development process, this starter kit can provide valuable insights and practical solutions.

## 😉 Why Expo and not React Native CLI?

We have been using Expo as our main framework since the introduction of [Continuous Native Generation (CNG)](https://docs.expo.dev/workflow/continuous-native-generation/) concept and we are happy with the experience.

I think this question is not valid anymore specially after the last React conference when the core react native team recommended using Expo for new projects.

> "As of today, the only recommended community framework for React Native is Expo. Folks at Expo have been investing in the React Native ecosystem since the early days of React Native and as of today, we believe the developer experience offered by Expo is best in class." React native core team

Still hesitating? Check out this [article](https://reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps) or this [video](https://www.youtube.com/watch?v=lifGTznLBcw), maybe this one [video](https://www.youtube.com/watch?v=ek_IdGC0G80) too.

## 🧑‍💻 Stay up to date

We are committed to continually improving our starter kit and providing the best possible resources for building React Native apps. To that end, we regularly add new features and fix any bugs that are discovered.

If you want to stay up to date with the latest developments in our starter kit, you can either watch the repository or hit the "star" button. This will allow you to receive notifications whenever new updates are available.

We value the feedback and contributions of our users, and we encourage you to let us know if you have any suggestions for improving our starter kit. We are always looking for ways to make it even more effective and useful for our community. So, please do not hesitate to reach out and share your thoughts with us.

<!-- add a gif image here  -->

## 💎 Libraries used

- [Expo](https://docs.expo.io/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Nativewind](https://www.nativewind.dev/v4/overview)
- [Flash list](https://github.com/Shopify/flash-list)
- [React Query](https://tanstack.com/query/v4)
- [Axios](https://axios-http.com/docs/intro)
- [React Hook Form](https://react-hook-form.com/)
- [i18next](https://www.i18next.com/)
- [zustand](https://github.com/pmndrs/zustand)
- [React Native MMKV](https://github.com/mrousavy/react-native-mmkv)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/)
- [React Native Svg](https://github.com/software-mansion/react-native-svg)
- [React Error Boundaries](https://github.com/bvaughn/react-error-boundary)
- [Expo Image](https://docs.expo.dev/versions/unversioned/sdk/image/)
- [React Native Keyboard Controller](https://github.com/kirillzyusko/react-native-keyboard-controller)
- [Moti](https://moti.fyi/)
- [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)
- [React Native Screens](https://github.com/software-mansion/react-native-screens)
- [Tailwind Variants](https://www.tailwind-variants.org/)
- [Zod](https://zod.dev/)

## Contributors

This starter is maintained by [Obytes mobile tribe team](https://www.obytes.com/team) and we welcome new contributors to join us in improving it. If you are interested in getting involved in the project, please don't hesitate to open an issue or submit a pull request.

In addition to maintaining this starter kit, we are also available to work on custom projects and help you build your dream app. If you are looking for experienced and reliable developers to bring your app vision to life, please visit our website at [obytes.com/contact](https://www.obytes.com/contact) to get in touch with us. We would be happy to discuss your project in more detail and explore how we can help you achieve your goals.

## ❓ FAQ

If you have any questions about the starter and want answers, please check out the [Discussions](https://github.com/obytes/react-native-template-obytes/discussions) page.
````

## File: docs/src/content/docs/reviews.md
````markdown
---
title: What people say about the starter
description: What people say about the starter
head:
  - tag: title
    content: Reviews | React Native / Expo Starter
---

This is a list of reviews from people who have used the starter kit.

Please feel free to add your in the comments section 👇
````

## File: docs/src/content/docs/stay-updated.md
````markdown
---
title: Stay Up-to-Date with React Native
description: Stay up-to-date with React Native news.
head:
  - tag: title
    content: Stay Updated | React Native / Expo Starter
---

Make sure to check out the links below to stay up-to-date with React Native news.

:::note
We are in favor of reducing the number of news sources you use to avoid feeling overwhelmed. Therefore, we have only included resources that we think are essential and deserve your attention.

:::

## Websites

- [React Native Documentation](https://reactnative.dev/)
- [React Native Directory](https://reactnative.directory/)
- [React Native Reddit Channel](https://www.reddit.com/r/reactnative/)

## Blogs

- [Expo blog](https://blog.expo.dev/)
- [React Native Dev Blog](https://reactnative.dev/blog)
- [TkDodo's blog](https://tkdodo.eu/blog/)
- [Developer way](https://www.developerway.com/)
- [Bam React Native blog](https://www.bam.tech/blog/react-native)

## Newsletters

- [This week in react](https://thisweekinreact.com/)
- [The React Native Newsletter](https://reactnativenewsletter.com/)

## Twitter accounts

- [Evan Bacon](https://twitter.com/Baconbrix)
- [React Native](https://twitter.com/reactnative)
- [Expo](https://twitter.com/expo)
- [Sebastien Lorber](https://twitter.com/sebastienlorber)

## Open source projects

A list of open-source projects and production-ready apps that you can use to learn and get inspired from.

- [showtime-frontend](https://github.com/showtime-xyz/showtime-frontend)
- [xLog-mobile](https://github.com/Crossbell-Box/xLog-mobile)
- [CommE2E](https://github.com/CommE2E/comm)
- [Expensify](https://github.com/Expensify/App)
````

## File: docs/src/content/config.ts
````typescript
import { defineCollection } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
};
````

## File: docs/src/styles/custom.css
````css
:root {
  --sl-font: 'IBM Plex Mono', sans-serif;
}

/* Dark mode colors. */
:root {
  --sl-color-accent-low: #2c230a;
  --sl-color-accent: #846500;
  --sl-color-accent-high: #d4c8ab;
  --sl-color-white: #ffffff;
  --sl-color-gray-1: #eceef2;
  --sl-color-gray-2: #c0c2c7;
  --sl-color-gray-3: #888b96;
  --sl-color-gray-4: #545861;
  --sl-color-gray-5: #353841;
  --sl-color-gray-6: #24272f;
  --sl-color-black: #17181c;
}
/* Light mode colors. */
:root[data-theme='light'] {
  --sl-color-accent-low: #dfd6c0;
  --sl-color-accent: #866700;
  --sl-color-accent-high: #3f3003;
  --sl-color-white: #17181c;
  --sl-color-gray-1: #24272f;
  --sl-color-gray-2: #353841;
  --sl-color-gray-3: #545861;
  --sl-color-gray-4: #888b96;
  --sl-color-gray-5: #c0c2c7;
  --sl-color-gray-6: #eceef2;
  --sl-color-gray-7: #f5f6f8;
  --sl-color-black: #ffffff;
}

:root {
  --purple-hsl: 205, 60%, 60%;
  --overlay-blurple: hsla(var(--purple-hsl), 0.4);
}

:root[data-theme='light'] {
  --purple-hsl: 255, 85%, 65%;
}

[data-has-hero] .page {
  background: linear-gradient(215deg, var(--overlay-blurple), transparent 40%),
    radial-gradient(var(--overlay-blurple), transparent 40%) no-repeat -60vw -40vh /
      105vw 200vh,
    radial-gradient(var(--overlay-blurple), transparent 65%) no-repeat 50%
      calc(100% + 20rem) / 60rem 30rem;
}

[data-has-hero] header {
  border-bottom: 1px solid transparent;
  background-color: transparent;
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
}

[data-has-hero] .hero > img {
  filter: drop-shadow(0 0 3rem var(--overlay-blurple));
}

[data-page-title] {
  font-size: 3rem;
}

/* date page title onl 2.5rem on mobile devices */
@media (max-width: 768px) {
  [data-page-title] {
    font-size: 2.5rem;
  }
}

.card-grid > .card {
  border-radius: 10px;
}

.card > .title {
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.2;
}

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
````

## File: docs/src/env.d.ts
````typescript
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
````

## File: docs/.gitignore
````
# build output
dist/
# generated types
.astro/

# dependencies
node_modules/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*


# environment variables
.env
.env.production

# macOS-specific files
.DS_Store
````

## File: docs/astro.config.mjs
````
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import starlightLlmsTxt from 'starlight-llms-txt';

const site = 'https://starter.obytes.com/';

// https://astro.build/config
export default defineConfig({
  site: 'https://starter.obytes.com/',
  integrations: [
    starlight({
      title: 'Obytes Starter | React Native Template',
      plugins: [starlightLlmsTxt()],
      description: `Your All-in-One Solution for Building Outstanding React Native/Expo Apps. From editor setup to store submission, we've got you covered!`,
      expressiveCode: {
        themes: ['dracula', 'solarized-light'],
      },
      logo: {
        light: '/src/assets/logo-titled.svg',
        dark: '/src/assets/logo-titled.svg',
        replacesTitle: true,
      },
      components: {
        LastUpdated: './src/components/LastUpdated.astro',
      },
      social: {
        github: 'https://github.com/obytes/react-native-template-obytes',
      },
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: site + 'og.jpg?v=1' },
        },
        {
          tag: 'meta',
          attrs: { property: 'twitter:image', content: site + 'og.jpg?v=1' },
        },
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: true,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&display=swap',
          },
        },
        {
          tag: 'script',
          attrs: {
            src: 'https://cdn.jsdelivr.net/npm/@minimal-analytics/ga4/dist/index.js',
            async: true,
          },
        },
        {
          tag: 'script',
          content: ` window.minimalAnalytics = {
            trackingId: 'G-GQ45JJD1JC',
            autoTrack: true,
          };`,
        },
      ],
      sidebar: [
        {
          label: 'Overview',
          link: '/overview',
        },
        {
          label: 'Start Here',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Create New App',
              link: '/getting-started/create-new-app/',
            },
            {
              label: 'Customize Your App',
              link: '/getting-started/customize-app/',
            },
            {
              label: 'Rules and Conventions',
              link: '/getting-started/rules-and-conventions/',
            },
            {
              label: 'Project Structure',
              link: '/getting-started/project-structure/',
            },
            {
              label: 'Environment Variables and Configurations',
              link: '/getting-started/environment-vars-config/',
            },
          ],
        },

        {
          label: 'UI Components & Theming',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'UI & Theming',
              link: '/ui-and-theme/ui-theming/',
            },
            {
              label: 'Fonts',
              link: '/ui-and-theme/fonts/',
            },
            {
              label: 'UI Components',
              link: '/ui-and-theme/components/',
            },
            {
              label: 'Forms',
              link: '/ui-and-theme/forms/',
            },
          ],
        },
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Navigation',
              link: '/guides/navigation/',
            },
            {
              label: 'Authentication',
              link: '/guides/authentication/',
            },
            {
              label: 'Data Fetching',
              link: '/guides/data-fetching/',
            },
            {
              label: 'Internationalization',
              link: '/guides/internationalization/',
            },
            {
              label: 'Storage',
              link: '/guides/storage/',
            },
            {
              label: 'Upgrade Dependencies',
              link: '/guides/upgrading-deps/',
            },
          ],
        },
        {
          label: 'Recipes',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Sentry Setup',
              link: '/recipes/sentry-setup/',
              badge: 'new',
            },
          ],
        },
        {
          label: 'Testing',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Overview',
              link: '/testing/overview/',
            },
            {
              label: 'Unit Testing',
              link: '/testing/unit-testing/',
            },
            {
              label: 'E2E Testing',
              link: '/testing/end-to-end-testing/',
            },
          ],
        },
        {
          label: 'CI/CD',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Overview',
              link: '/ci-cd/overview/',
            },
            {
              label: 'Releasing Process',
              link: '/ci-cd/app-releasing-process/',
            },
            {
              label: 'Workflows Reference',
              link: '/ci-cd/workflows-references/',
            },
          ],
        },
        {
          label: 'Libraries Recommendation',
          link: '/libraries-recommendation',
        },
        {
          label: 'FAQ',
          link: '/faq',
          badge: 'new',
        },
        {
          label: 'CHANGELOG',
          link: '/changelog',
        },
        {
          label: 'How to contribute ?',
          link: '/how-to-contribute',
        },
        {
          label: 'Reviews',
          link: '/reviews',
          badge: 'new',
        },
        {
          label: 'Stay Updated',
          link: '/stay-updated',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
    }),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
````

## File: docs/ec.config.mjs
````
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  // Example: Using a custom plugin (which makes this `ec.config.mjs` file necessary)
  // plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
  // ... any other options you want to configure
};
````

## File: docs/package.json
````json
{
  "name": "ossified-orbit",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/starlight": "^0.31.1",
    "@expressive-code/plugin-collapsible-sections": "^0.33.4",
    "@expressive-code/plugin-line-numbers": "^0.33.4",
    "@fontsource/ibm-plex-mono": "^5.0.8",
    "@fontsource/ibm-plex-serif": "^5.0.8",
    "astro": "^5.1.10",
    "hast-util-to-html": "^9.0.0",
    "sharp": "^0.32.3",
    "starlight-llms-txt": "^0.4.0"
  }
}
````

## File: docs/README.md
````markdown
# Starlight Starter Kit: Basics

```
npm create astro@latest -- --template starlight
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/starlight/tree/main/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/starlight/tree/main/examples/basics)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
````

## File: docs/tsconfig.json
````json
{
  "extends": "astro/tsconfigs/strict"
}
````

## File: ios/ObytesApp/Images.xcassets/AppIcon.appiconset/Contents.json
````json
{
  "images": [
    {
      "filename": "App-Icon-1024x1024@1x.png",
      "idiom": "universal",
      "platform": "ios",
      "size": "1024x1024"
    }
  ],
  "info": {
    "version": 1,
    "author": "expo"
  }
}
````

## File: ios/ObytesApp/Images.xcassets/SplashScreenBackground.colorset/Contents.json
````json
{
  "colors": [
    {
      "color": {
        "components": {
          "alpha": "1.000",
          "blue": "0.294117647058824",
          "green": "0.235294117647059",
          "red": "0.180392156862745"
        },
        "color-space": "srgb"
      },
      "idiom": "universal"
    }
  ],
  "info": {
    "version": 1,
    "author": "expo"
  }
}
````

## File: ios/ObytesApp/Images.xcassets/SplashScreenLogo.imageset/Contents.json
````json
{
  "images": [
    {
      "idiom": "universal",
      "filename": "image.png",
      "scale": "1x"
    },
    {
      "idiom": "universal",
      "filename": "image@2x.png",
      "scale": "2x"
    },
    {
      "idiom": "universal",
      "filename": "image@3x.png",
      "scale": "3x"
    }
  ],
  "info": {
    "version": 1,
    "author": "expo"
  }
}
````

## File: ios/ObytesApp/Images.xcassets/Contents.json
````json
{
  "info": {
    "version": 1,
    "author": "expo"
  }
}
````

## File: ios/ObytesApp/Supporting/Expo.plist
````
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>EXUpdatesCheckOnLaunch</key>
    <string>ALWAYS</string>
    <key>EXUpdatesEnabled</key>
    <false/>
    <key>EXUpdatesLaunchWaitMs</key>
    <integer>0</integer>
  </dict>
</plist>
````

## File: ios/ObytesApp/AppDelegate.swift
````swift
import Expo
import React
import ReactAppDependencyProvider

@UIApplicationMain
public class AppDelegate: ExpoAppDelegate {
  var window: UIWindow?

  var reactNativeDelegate: ExpoReactNativeFactoryDelegate?
  var reactNativeFactory: RCTReactNativeFactory?

  public override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
  ) -> Bool {
    let delegate = ReactNativeDelegate()
    let factory = ExpoReactNativeFactory(delegate: delegate)
    delegate.dependencyProvider = RCTAppDependencyProvider()

    reactNativeDelegate = delegate
    reactNativeFactory = factory
    bindReactNativeFactory(factory)

#if os(iOS) || os(tvOS)
    window = UIWindow(frame: UIScreen.main.bounds)
    factory.startReactNative(
      withModuleName: "main",
      in: window,
      launchOptions: launchOptions)
#endif

    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  // Linking API
  public override func application(
    _ app: UIApplication,
    open url: URL,
    options: [UIApplication.OpenURLOptionsKey: Any] = [:]
  ) -> Bool {
    return super.application(app, open: url, options: options) || RCTLinkingManager.application(app, open: url, options: options)
  }

  // Universal Links
  public override func application(
    _ application: UIApplication,
    continue userActivity: NSUserActivity,
    restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void
  ) -> Bool {
    let result = RCTLinkingManager.application(application, continue: userActivity, restorationHandler: restorationHandler)
    return super.application(application, continue: userActivity, restorationHandler: restorationHandler) || result
  }
}

class ReactNativeDelegate: ExpoReactNativeFactoryDelegate {
  // Extension point for config-plugins

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    // needed to return the correct URL for expo-dev-client.
    bridge.bundleURL ?? bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: ".expo/.virtual-metro-entry")
#else
    return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
}
````

## File: ios/ObytesApp/Info.plist
````
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>CADisableMinimumFrameDurationOnPhone</key>
    <true/>
    <key>CFBundleDevelopmentRegion</key>
    <string>$(DEVELOPMENT_LANGUAGE)</string>
    <key>CFBundleDisplayName</key>
    <string>ObytesApp</string>
    <key>CFBundleExecutable</key>
    <string>$(EXECUTABLE_NAME)</string>
    <key>CFBundleIdentifier</key>
    <string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
    <key>CFBundleInfoDictionaryVersion</key>
    <string>6.0</string>
    <key>CFBundleName</key>
    <string>$(PRODUCT_NAME)</string>
    <key>CFBundlePackageType</key>
    <string>$(PRODUCT_BUNDLE_PACKAGE_TYPE)</string>
    <key>CFBundleShortVersionString</key>
    <string>8.0.0</string>
    <key>CFBundleSignature</key>
    <string>????</string>
    <key>CFBundleURLTypes</key>
    <array>
      <dict>
        <key>CFBundleURLSchemes</key>
        <array>
          <string>obytesApp</string>
          <string>com.obytes.development</string>
        </array>
      </dict>
      <dict>
        <key>CFBundleURLSchemes</key>
        <array>
          <string>exp+obytesapp</string>
        </array>
      </dict>
    </array>
    <key>CFBundleVersion</key>
    <string>1</string>
    <key>ITSAppUsesNonExemptEncryption</key>
    <false/>
    <key>LSMinimumSystemVersion</key>
    <string>12.0</string>
    <key>LSRequiresIPhoneOS</key>
    <true/>
    <key>NSAppTransportSecurity</key>
    <dict>
      <key>NSAllowsArbitraryLoads</key>
      <false/>
      <key>NSAllowsLocalNetworking</key>
      <true/>
    </dict>
    <key>NSUserActivityTypes</key>
    <array>
      <string>$(PRODUCT_BUNDLE_IDENTIFIER).expo.index_route</string>
    </array>
    <key>UIAppFonts</key>
    <array>
      <string>Inter.ttf</string>
    </array>
    <key>UILaunchStoryboardName</key>
    <string>SplashScreen</string>
    <key>UIRequiredDeviceCapabilities</key>
    <array>
      <string>arm64</string>
    </array>
    <key>UIRequiresFullScreen</key>
    <false/>
    <key>UIStatusBarStyle</key>
    <string>UIStatusBarStyleDefault</string>
    <key>UISupportedInterfaceOrientations</key>
    <array>
      <string>UIInterfaceOrientationPortrait</string>
      <string>UIInterfaceOrientationPortraitUpsideDown</string>
    </array>
    <key>UISupportedInterfaceOrientations~ipad</key>
    <array>
      <string>UIInterfaceOrientationPortrait</string>
      <string>UIInterfaceOrientationPortraitUpsideDown</string>
      <string>UIInterfaceOrientationLandscapeLeft</string>
      <string>UIInterfaceOrientationLandscapeRight</string>
    </array>
    <key>UIUserInterfaceStyle</key>
    <string>Automatic</string>
    <key>UIViewControllerBasedStatusBarAppearance</key>
    <false/>
  </dict>
</plist>
````

## File: ios/ObytesApp/ObytesApp-Bridging-Header.h
````
//
// Use this file to import your target's public headers that you would like to expose to Swift.
//
````

## File: ios/ObytesApp/ObytesApp.entitlements
````
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict/>
</plist>
````

## File: ios/ObytesApp/PrivacyInfo.xcprivacy
````
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>NSPrivacyAccessedAPITypes</key>
	<array>
		<dict>
			<key>NSPrivacyAccessedAPIType</key>
			<string>NSPrivacyAccessedAPICategoryUserDefaults</string>
			<key>NSPrivacyAccessedAPITypeReasons</key>
			<array>
				<string>CA92.1</string>
			</array>
		</dict>
		<dict>
			<key>NSPrivacyAccessedAPIType</key>
			<string>NSPrivacyAccessedAPICategoryFileTimestamp</string>
			<key>NSPrivacyAccessedAPITypeReasons</key>
			<array>
				<string>0A2A.1</string>
				<string>3B52.1</string>
				<string>C617.1</string>
			</array>
		</dict>
		<dict>
			<key>NSPrivacyAccessedAPIType</key>
			<string>NSPrivacyAccessedAPICategoryDiskSpace</string>
			<key>NSPrivacyAccessedAPITypeReasons</key>
			<array>
				<string>E174.1</string>
				<string>85F4.1</string>
			</array>
		</dict>
		<dict>
			<key>NSPrivacyAccessedAPIType</key>
			<string>NSPrivacyAccessedAPICategorySystemBootTime</string>
			<key>NSPrivacyAccessedAPITypeReasons</key>
			<array>
				<string>35F9.1</string>
			</array>
		</dict>
	</array>
	<key>NSPrivacyCollectedDataTypes</key>
	<array/>
	<key>NSPrivacyTracking</key>
	<false/>
</dict>
</plist>
````

## File: ios/ObytesApp/SplashScreen.storyboard
````
<?xml version="1.0" encoding="UTF-8"?>
<document type="com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB" version="3.0" toolsVersion="32700.99.1234" targetRuntime="iOS.CocoaTouch" propertyAccessControl="none" useAutolayout="YES" launchScreen="YES" useTraitCollections="YES" useSafeAreas="YES" colorMatched="YES" initialViewController="EXPO-VIEWCONTROLLER-1">
    <device id="retina6_12" orientation="portrait" appearance="light"/>
    <dependencies>
        <deployment identifier="iOS"/>
        <plugIn identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin" version="22685"/>
        <capability name="Named colors" minToolsVersion="9.0"/>
        <capability name="Safe area layout guides" minToolsVersion="9.0"/>
        <capability name="documents saved in the Xcode 8 format" minToolsVersion="8.0"/>
    </dependencies>
    <scenes>
        <scene sceneID="EXPO-SCENE-1">
            <objects>
                <viewController storyboardIdentifier="SplashScreenViewController" id="EXPO-VIEWCONTROLLER-1" sceneMemberID="viewController">
                    <view key="view" userInteractionEnabled="NO" contentMode="scaleToFill" insetsLayoutMarginsFromSafeArea="NO" id="EXPO-ContainerView" userLabel="ContainerView">
                        <rect key="frame" x="0.0" y="0.0" width="393" height="852"/>
                        <autoresizingMask key="autoresizingMask" flexibleMaxX="YES" flexibleMaxY="YES"/>
                        <subviews>
                            <imageView id="EXPO-SplashScreen" userLabel="SplashScreenLogo" image="SplashScreenLogo" contentMode="scaleAspectFit" clipsSubviews="true" userInteractionEnabled="false" translatesAutoresizingMaskIntoConstraints="false">
                                <rect key="frame" x="121.5" y="351" width="150" height="150"/>
                            </imageView>
                        </subviews>
                        <viewLayoutGuide key="safeArea" id="Rmq-lb-GrQ"/>
                        <constraints>
                            <constraint firstItem="EXPO-SplashScreen" firstAttribute="centerX" secondItem="EXPO-ContainerView" secondAttribute="centerX" id="cad2ab56f97c5429bf29decf850647a4216861d4"/>
                            <constraint firstItem="EXPO-SplashScreen" firstAttribute="centerY" secondItem="EXPO-ContainerView" secondAttribute="centerY" id="1a145271b085b6ce89b1405a310f5b1bb7656595"/>
                        </constraints>
                        <color key="backgroundColor" name="SplashScreenBackground"/>
                    </view>
                </viewController>
                <placeholder placeholderIdentifier="IBFirstResponder" id="EXPO-PLACEHOLDER-1" userLabel="First Responder" sceneMemberID="firstResponder"/>
            </objects>
            <point key="canvasLocation" x="0.0" y="0.0"/>
        </scene>
    </scenes>
    <resources>
        <image name="SplashScreenLogo" width="150" height="150"/>
        <namedColor name="SplashScreenBackground">
            <color alpha="1.000" blue="0.294117647058824" green="0.235294117647059" red="0.180392156862745" customColorSpace="sRGB" colorSpace="custom"/>
        </namedColor>
    </resources>
</document>
````

## File: ios/ObytesApp.xcodeproj/xcshareddata/xcschemes/ObytesApp.xcscheme
````
<?xml version="1.0" encoding="UTF-8"?>
<Scheme
   LastUpgradeVersion = "1130"
   version = "1.3">
   <BuildAction
      parallelizeBuildables = "YES"
      buildImplicitDependencies = "YES">
      <BuildActionEntries>
         <BuildActionEntry
            buildForTesting = "YES"
            buildForRunning = "YES"
            buildForProfiling = "YES"
            buildForArchiving = "YES"
            buildForAnalyzing = "YES">
            <BuildableReference
               BuildableIdentifier = "primary"
               BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
               BuildableName = "ObytesApp.app"
               BlueprintName = "ObytesApp"
               ReferencedContainer = "container:ObytesApp.xcodeproj">
            </BuildableReference>
         </BuildActionEntry>
      </BuildActionEntries>
   </BuildAction>
   <TestAction
      buildConfiguration = "Debug"
      selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"
      selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"
      shouldUseLaunchSchemeArgsEnv = "YES">
      <Testables>
         <TestableReference
            skipped = "NO">
            <BuildableReference
               BuildableIdentifier = "primary"
               BlueprintIdentifier = "00E356ED1AD99517003FC87E"
               BuildableName = "ObytesAppTests.xctest"
               BlueprintName = "ObytesAppTests"
               ReferencedContainer = "container:ObytesApp.xcodeproj">
            </BuildableReference>
         </TestableReference>
      </Testables>
   </TestAction>
   <LaunchAction
      buildConfiguration = "Debug"
      selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"
      selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"
      launchStyle = "0"
      useCustomWorkingDirectory = "NO"
      ignoresPersistentStateOnLaunch = "NO"
      debugDocumentVersioning = "YES"
      debugServiceExtension = "internal"
      allowLocationSimulation = "YES">
      <BuildableProductRunnable
         runnableDebuggingMode = "0">
         <BuildableReference
            BuildableIdentifier = "primary"
            BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
            BuildableName = "ObytesApp.app"
            BlueprintName = "ObytesApp"
            ReferencedContainer = "container:ObytesApp.xcodeproj">
         </BuildableReference>
      </BuildableProductRunnable>
   </LaunchAction>
   <ProfileAction
      buildConfiguration = "Release"
      shouldUseLaunchSchemeArgsEnv = "YES"
      savedToolIdentifier = ""
      useCustomWorkingDirectory = "NO"
      debugDocumentVersioning = "YES">
      <BuildableProductRunnable
         runnableDebuggingMode = "0">
         <BuildableReference
            BuildableIdentifier = "primary"
            BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
            BuildableName = "ObytesApp.app"
            BlueprintName = "ObytesApp"
            ReferencedContainer = "container:ObytesApp.xcodeproj">
         </BuildableReference>
      </BuildableProductRunnable>
   </ProfileAction>
   <AnalyzeAction
      buildConfiguration = "Debug">
   </AnalyzeAction>
   <ArchiveAction
      buildConfiguration = "Release"
      revealArchiveInOrganizer = "YES">
   </ArchiveAction>
</Scheme>
````

## File: ios/ObytesApp.xcodeproj/project.pbxproj
````
// !$*UTF8*$!
{
	archiveVersion = 1;
	classes = {
	};
	objectVersion = 54;
	objects = {

/* Begin PBXBuildFile section */
		0101C39C12EFEA097D6DAFC7 /* ExpoModulesProvider.swift in Sources */ = {isa = PBXBuildFile; fileRef = 055E0D19F5DB30847D7D7A53 /* ExpoModulesProvider.swift */; };
		0FF145DFF3D843D0BB09C837 /* Inter.ttf in Resources */ = {isa = PBXBuildFile; fileRef = DA2F8CCD472B4F5EA39BC43D /* Inter.ttf */; };
		1098FC800D4958E779388F31 /* PrivacyInfo.xcprivacy in Resources */ = {isa = PBXBuildFile; fileRef = DE03917D5BB4EA8CCC7E51DD /* PrivacyInfo.xcprivacy */; };
		13B07FBF1A68108700A75B9A /* Images.xcassets in Resources */ = {isa = PBXBuildFile; fileRef = 13B07FB51A68108700A75B9A /* Images.xcassets */; };
		3E461D99554A48A4959DE609 /* SplashScreen.storyboard in Resources */ = {isa = PBXBuildFile; fileRef = AA286B85B6C04FC6940260E9 /* SplashScreen.storyboard */; };
		8EED808DDF8161F723B94294 /* libPods-ObytesApp.a in Frameworks */ = {isa = PBXBuildFile; fileRef = 363D4ED81BD4ABDFE78EC6A6 /* libPods-ObytesApp.a */; };
		BB2F792D24A3F905000567C9 /* Expo.plist in Resources */ = {isa = PBXBuildFile; fileRef = BB2F792C24A3F905000567C9 /* Expo.plist */; };
		F11748422D0307B40044C1D9 /* AppDelegate.swift in Sources */ = {isa = PBXBuildFile; fileRef = F11748412D0307B40044C1D9 /* AppDelegate.swift */; };
/* End PBXBuildFile section */

/* Begin PBXFileReference section */
		055E0D19F5DB30847D7D7A53 /* ExpoModulesProvider.swift */ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = sourcecode.swift; name = ExpoModulesProvider.swift; path = "Pods/Target Support Files/Pods-ObytesApp/ExpoModulesProvider.swift"; sourceTree = "<group>"; };
		13B07F961A680F5B00A75B9A /* ObytesApp.app */ = {isa = PBXFileReference; explicitFileType = wrapper.application; includeInIndex = 0; path = ObytesApp.app; sourceTree = BUILT_PRODUCTS_DIR; };
		13B07FB51A68108700A75B9A /* Images.xcassets */ = {isa = PBXFileReference; lastKnownFileType = folder.assetcatalog; name = Images.xcassets; path = ObytesApp/Images.xcassets; sourceTree = "<group>"; };
		13B07FB61A68108700A75B9A /* Info.plist */ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = text.plist.xml; name = Info.plist; path = ObytesApp/Info.plist; sourceTree = "<group>"; };
		26912D481B7370986F8250CF /* Pods-ObytesApp.debug.xcconfig */ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = text.xcconfig; name = "Pods-ObytesApp.debug.xcconfig"; path = "Target Support Files/Pods-ObytesApp/Pods-ObytesApp.debug.xcconfig"; sourceTree = "<group>"; };
		363D4ED81BD4ABDFE78EC6A6 /* libPods-ObytesApp.a */ = {isa = PBXFileReference; explicitFileType = archive.ar; includeInIndex = 0; path = "libPods-ObytesApp.a"; sourceTree = BUILT_PRODUCTS_DIR; };
		3C93193ACC7A90E1E3A2249D /* Pods-ObytesApp.release.xcconfig */ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = text.xcconfig; name = "Pods-ObytesApp.release.xcconfig"; path = "Target Support Files/Pods-ObytesApp/Pods-ObytesApp.release.xcconfig"; sourceTree = "<group>"; };
		AA286B85B6C04FC6940260E9 /* SplashScreen.storyboard */ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = file.storyboard; name = SplashScreen.storyboard; path = ObytesApp/SplashScreen.storyboard; sourceTree = "<group>"; };
		BB2F792C24A3F905000567C9 /* Expo.plist */ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = text.plist.xml; path = Expo.plist; sourceTree = "<group>"; };
		DA2F8CCD472B4F5EA39BC43D /* Inter.ttf */ = {isa = PBXFileReference; explicitFileType = undefined; fileEncoding = undefined; includeInIndex = 0; lastKnownFileType = unknown; name = Inter.ttf; path = ../assets/fonts/Inter.ttf; sourceTree = "<group>"; };
		DE03917D5BB4EA8CCC7E51DD /* PrivacyInfo.xcprivacy */ = {isa = PBXFileReference; includeInIndex = 1; name = PrivacyInfo.xcprivacy; path = ObytesApp/PrivacyInfo.xcprivacy; sourceTree = "<group>"; };
		ED297162215061F000B7C4FE /* JavaScriptCore.framework */ = {isa = PBXFileReference; lastKnownFileType = wrapper.framework; name = JavaScriptCore.framework; path = System/Library/Frameworks/JavaScriptCore.framework; sourceTree = SDKROOT; };
		F11748412D0307B40044C1D9 /* AppDelegate.swift */ = {isa = PBXFileReference; lastKnownFileType = sourcecode.swift; name = AppDelegate.swift; path = ObytesApp/AppDelegate.swift; sourceTree = "<group>"; };
		F11748442D0722820044C1D9 /* ObytesApp-Bridging-Header.h */ = {isa = PBXFileReference; lastKnownFileType = sourcecode.c.h; name = "ObytesApp-Bridging-Header.h"; path = "ObytesApp/ObytesApp-Bridging-Header.h"; sourceTree = "<group>"; };
/* End PBXFileReference section */

/* Begin PBXFrameworksBuildPhase section */
		13B07F8C1A680F5B00A75B9A /* Frameworks */ = {
			isa = PBXFrameworksBuildPhase;
			buildActionMask = 2147483647;
			files = (
				8EED808DDF8161F723B94294 /* libPods-ObytesApp.a in Frameworks */,
			);
			runOnlyForDeploymentPostprocessing = 0;
		};
/* End PBXFrameworksBuildPhase section */

/* Begin PBXGroup section */
		13B07FAE1A68108700A75B9A /* ObytesApp */ = {
			isa = PBXGroup;
			children = (
				F11748412D0307B40044C1D9 /* AppDelegate.swift */,
				F11748442D0722820044C1D9 /* ObytesApp-Bridging-Header.h */,
				BB2F792B24A3F905000567C9 /* Supporting */,
				13B07FB51A68108700A75B9A /* Images.xcassets */,
				13B07FB61A68108700A75B9A /* Info.plist */,
				AA286B85B6C04FC6940260E9 /* SplashScreen.storyboard */,
				DE03917D5BB4EA8CCC7E51DD /* PrivacyInfo.xcprivacy */,
			);
			name = ObytesApp;
			sourceTree = "<group>";
		};
		2D16E6871FA4F8E400B85C8A /* Frameworks */ = {
			isa = PBXGroup;
			children = (
				ED297162215061F000B7C4FE /* JavaScriptCore.framework */,
				363D4ED81BD4ABDFE78EC6A6 /* libPods-ObytesApp.a */,
			);
			name = Frameworks;
			sourceTree = "<group>";
		};
		33F975C34DFEAD0108F8AC3D /* Pods */ = {
			isa = PBXGroup;
			children = (
				26912D481B7370986F8250CF /* Pods-ObytesApp.debug.xcconfig */,
				3C93193ACC7A90E1E3A2249D /* Pods-ObytesApp.release.xcconfig */,
			);
			name = Pods;
			path = Pods;
			sourceTree = "<group>";
		};
		36E3CD7D3F7E45409AB15C02 /* Resources */ = {
			isa = PBXGroup;
			children = (
				DA2F8CCD472B4F5EA39BC43D /* Inter.ttf */,
			);
			name = Resources;
			path = "";
			sourceTree = "<group>";
		};
		4B8E82235C704B507A60200D /* ObytesApp */ = {
			isa = PBXGroup;
			children = (
				055E0D19F5DB30847D7D7A53 /* ExpoModulesProvider.swift */,
			);
			name = ObytesApp;
			sourceTree = "<group>";
		};
		832341AE1AAA6A7D00B99B32 /* Libraries */ = {
			isa = PBXGroup;
			children = (
			);
			name = Libraries;
			sourceTree = "<group>";
		};
		83CBB9F61A601CBA00E9B192 = {
			isa = PBXGroup;
			children = (
				13B07FAE1A68108700A75B9A /* ObytesApp */,
				832341AE1AAA6A7D00B99B32 /* Libraries */,
				83CBBA001A601CBA00E9B192 /* Products */,
				2D16E6871FA4F8E400B85C8A /* Frameworks */,
				36E3CD7D3F7E45409AB15C02 /* Resources */,
				33F975C34DFEAD0108F8AC3D /* Pods */,
				B70230634CEADA5F278AE233 /* ExpoModulesProviders */,
			);
			indentWidth = 2;
			sourceTree = "<group>";
			tabWidth = 2;
			usesTabs = 0;
		};
		83CBBA001A601CBA00E9B192 /* Products */ = {
			isa = PBXGroup;
			children = (
				13B07F961A680F5B00A75B9A /* ObytesApp.app */,
			);
			name = Products;
			sourceTree = "<group>";
		};
		B70230634CEADA5F278AE233 /* ExpoModulesProviders */ = {
			isa = PBXGroup;
			children = (
				4B8E82235C704B507A60200D /* ObytesApp */,
			);
			name = ExpoModulesProviders;
			sourceTree = "<group>";
		};
		BB2F792B24A3F905000567C9 /* Supporting */ = {
			isa = PBXGroup;
			children = (
				BB2F792C24A3F905000567C9 /* Expo.plist */,
			);
			name = Supporting;
			path = ObytesApp/Supporting;
			sourceTree = "<group>";
		};
/* End PBXGroup section */

/* Begin PBXNativeTarget section */
		13B07F861A680F5B00A75B9A /* ObytesApp */ = {
			isa = PBXNativeTarget;
			buildConfigurationList = 13B07F931A680F5B00A75B9A /* Build configuration list for PBXNativeTarget "ObytesApp" */;
			buildPhases = (
				08A4A3CD28434E44B6B9DE2E /* [CP] Check Pods Manifest.lock */,
				B1C85A403A126E8C0E7CE361 /* [Expo] Configure project */,
				13B07F871A680F5B00A75B9A /* Sources */,
				13B07F8C1A680F5B00A75B9A /* Frameworks */,
				13B07F8E1A680F5B00A75B9A /* Resources */,
				00DD1BFF1BD5951E006B06BC /* Bundle React Native code and images */,
				800E24972A6A228C8D4807E9 /* [CP] Copy Pods Resources */,
				EBC70EAD4369C1B0921A02D3 /* [CP] Embed Pods Frameworks */,
			);
			buildRules = (
			);
			dependencies = (
			);
			name = ObytesApp;
			productName = ObytesApp;
			productReference = 13B07F961A680F5B00A75B9A /* ObytesApp.app */;
			productType = "com.apple.product-type.application";
		};
/* End PBXNativeTarget section */

/* Begin PBXProject section */
		83CBB9F71A601CBA00E9B192 /* Project object */ = {
			isa = PBXProject;
			attributes = {
				LastUpgradeCheck = 1130;
				TargetAttributes = {
					13B07F861A680F5B00A75B9A = {
						LastSwiftMigration = 1250;
					};
				};
			};
			buildConfigurationList = 83CBB9FA1A601CBA00E9B192 /* Build configuration list for PBXProject "ObytesApp" */;
			compatibilityVersion = "Xcode 3.2";
			developmentRegion = en;
			hasScannedForEncodings = 0;
			knownRegions = (
				en,
				Base,
			);
			mainGroup = 83CBB9F61A601CBA00E9B192;
			productRefGroup = 83CBBA001A601CBA00E9B192 /* Products */;
			projectDirPath = "";
			projectRoot = "";
			targets = (
				13B07F861A680F5B00A75B9A /* ObytesApp */,
			);
		};
/* End PBXProject section */

/* Begin PBXResourcesBuildPhase section */
		13B07F8E1A680F5B00A75B9A /* Resources */ = {
			isa = PBXResourcesBuildPhase;
			buildActionMask = 2147483647;
			files = (
				BB2F792D24A3F905000567C9 /* Expo.plist in Resources */,
				13B07FBF1A68108700A75B9A /* Images.xcassets in Resources */,
				3E461D99554A48A4959DE609 /* SplashScreen.storyboard in Resources */,
				0FF145DFF3D843D0BB09C837 /* Inter.ttf in Resources */,
				1098FC800D4958E779388F31 /* PrivacyInfo.xcprivacy in Resources */,
			);
			runOnlyForDeploymentPostprocessing = 0;
		};
/* End PBXResourcesBuildPhase section */

/* Begin PBXShellScriptBuildPhase section */
		00DD1BFF1BD5951E006B06BC /* Bundle React Native code and images */ = {
			isa = PBXShellScriptBuildPhase;
			alwaysOutOfDate = 1;
			buildActionMask = 2147483647;
			files = (
			);
			inputPaths = (
			);
			name = "Bundle React Native code and images";
			outputPaths = (
			);
			runOnlyForDeploymentPostprocessing = 0;
			shellPath = /bin/sh;
			shellScript = "if [[ -f \"$PODS_ROOT/../.xcode.env\" ]]; then\n  source \"$PODS_ROOT/../.xcode.env\"\nfi\nif [[ -f \"$PODS_ROOT/../.xcode.env.local\" ]]; then\n  source \"$PODS_ROOT/../.xcode.env.local\"\nfi\n\n# The project root by default is one level up from the ios directory\nexport PROJECT_ROOT=\"$PROJECT_DIR\"/..\n\nif [[ \"$CONFIGURATION\" = *Debug* ]]; then\n  export SKIP_BUNDLING=1\nfi\nif [[ -z \"$ENTRY_FILE\" ]]; then\n  # Set the entry JS file using the bundler's entry resolution.\n  export ENTRY_FILE=\"$(\"$NODE_BINARY\" -e \"require('expo/scripts/resolveAppEntry')\" \"$PROJECT_ROOT\" ios absolute | tail -n 1)\"\nfi\n\nif [[ -z \"$CLI_PATH\" ]]; then\n  # Use Expo CLI\n  export CLI_PATH=\"$(\"$NODE_BINARY\" --print \"require.resolve('@expo/cli', { paths: [require.resolve('expo/package.json')] })\")\"\nfi\nif [[ -z \"$BUNDLE_COMMAND\" ]]; then\n  # Default Expo CLI command for bundling\n  export BUNDLE_COMMAND=\"export:embed\"\nfi\n\n# Source .xcode.env.updates if it exists to allow\n# SKIP_BUNDLING to be unset if needed\nif [[ -f \"$PODS_ROOT/../.xcode.env.updates\" ]]; then\n  source \"$PODS_ROOT/../.xcode.env.updates\"\nfi\n# Source local changes to allow overrides\n# if needed\nif [[ -f \"$PODS_ROOT/../.xcode.env.local\" ]]; then\n  source \"$PODS_ROOT/../.xcode.env.local\"\nfi\n\n`\"$NODE_BINARY\" --print \"require('path').dirname(require.resolve('react-native/package.json')) + '/scripts/react-native-xcode.sh'\"`\n\n";
		};
		08A4A3CD28434E44B6B9DE2E /* [CP] Check Pods Manifest.lock */ = {
			isa = PBXShellScriptBuildPhase;
			buildActionMask = 2147483647;
			files = (
			);
			inputFileListPaths = (
			);
			inputPaths = (
				"${PODS_PODFILE_DIR_PATH}/Podfile.lock",
				"${PODS_ROOT}/Manifest.lock",
			);
			name = "[CP] Check Pods Manifest.lock";
			outputFileListPaths = (
			);
			outputPaths = (
				"$(DERIVED_FILE_DIR)/Pods-ObytesApp-checkManifestLockResult.txt",
			);
			runOnlyForDeploymentPostprocessing = 0;
			shellPath = /bin/sh;
			shellScript = "diff \"${PODS_PODFILE_DIR_PATH}/Podfile.lock\" \"${PODS_ROOT}/Manifest.lock\" > /dev/null\nif [ $? != 0 ] ; then\n    # print error to STDERR\n    echo \"error: The sandbox is not in sync with the Podfile.lock. Run 'pod install' or update your CocoaPods installation.\" >&2\n    exit 1\nfi\n# This output is used by Xcode 'outputs' to avoid re-running this script phase.\necho \"SUCCESS\" > \"${SCRIPT_OUTPUT_FILE_0}\"\n";
			showEnvVarsInLog = 0;
		};
		800E24972A6A228C8D4807E9 /* [CP] Copy Pods Resources */ = {
			isa = PBXShellScriptBuildPhase;
			buildActionMask = 2147483647;
			files = (
			);
			inputPaths = (
				"${PODS_ROOT}/Target Support Files/Pods-ObytesApp/Pods-ObytesApp-resources.sh",
				"${PODS_CONFIGURATION_BUILD_DIR}/EXConstants/EXConstants.bundle",
				"${PODS_CONFIGURATION_BUILD_DIR}/EXConstants/ExpoConstants_privacy.bundle",
				"${PODS_CONFIGURATION_BUILD_DIR}/ExpoFileSystem/ExpoFileSystem_privacy.bundle",
				"${PODS_CONFIGURATION_BUILD_DIR}/ExpoLocalization/ExpoLocalization_privacy.bundle",
				"${PODS_CONFIGURATION_BUILD_DIR}/ExpoSystemUI/ExpoSystemUI_privacy.bundle",
				"${PODS_CONFIGURATION_BUILD_DIR}/RCT-Folly/RCT-Folly_privacy.bundle",
				"${PODS_CONFIGURATION_BUILD_DIR}/RNSVG/RNSVGFilters.bundle",
				"${PODS_CONFIGURATION_BUILD_DIR}/React-Core/React-Core_privacy.bundle",
				"${PODS_CONFIGURATION_BUILD_DIR}/React-cxxreact/React-cxxreact_privacy.bundle",
				"${PODS_CONFIGURATION_BUILD_DIR}/SDWebImage/SDWebImage.bundle",
				"${PODS_CONFIGURATION_BUILD_DIR}/boost/boost_privacy.bundle",
				"${PODS_CONFIGURATION_BUILD_DIR}/expo-dev-launcher/EXDevLauncher.bundle",
				"${PODS_CONFIGURATION_BUILD_DIR}/expo-dev-menu/EXDevMenu.bundle",
				"${PODS_CONFIGURATION_BUILD_DIR}/glog/glog_privacy.bundle",
			);
			name = "[CP] Copy Pods Resources";
			outputPaths = (
				"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/EXConstants.bundle",
				"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/ExpoConstants_privacy.bundle",
				"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/ExpoFileSystem_privacy.bundle",
				"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/ExpoLocalization_privacy.bundle",
				"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/ExpoSystemUI_privacy.bundle",
				"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/RCT-Folly_privacy.bundle",
				"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/RNSVGFilters.bundle",
				"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/React-Core_privacy.bundle",
				"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/React-cxxreact_privacy.bundle",
				"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/SDWebImage.bundle",
				"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/boost_privacy.bundle",
				"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/EXDevLauncher.bundle",
				"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/EXDevMenu.bundle",
				"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/glog_privacy.bundle",
			);
			runOnlyForDeploymentPostprocessing = 0;
			shellPath = /bin/sh;
			shellScript = "\"${PODS_ROOT}/Target Support Files/Pods-ObytesApp/Pods-ObytesApp-resources.sh\"\n";
			showEnvVarsInLog = 0;
		};
		B1C85A403A126E8C0E7CE361 /* [Expo] Configure project */ = {
			isa = PBXShellScriptBuildPhase;
			alwaysOutOfDate = 1;
			buildActionMask = 2147483647;
			files = (
			);
			inputFileListPaths = (
			);
			inputPaths = (
			);
			name = "[Expo] Configure project";
			outputFileListPaths = (
			);
			outputPaths = (
			);
			runOnlyForDeploymentPostprocessing = 0;
			shellPath = /bin/sh;
			shellScript = "# This script configures Expo modules and generates the modules provider file.\nbash -l -c \"./Pods/Target\\ Support\\ Files/Pods-ObytesApp/expo-configure-project.sh\"\n";
		};
		EBC70EAD4369C1B0921A02D3 /* [CP] Embed Pods Frameworks */ = {
			isa = PBXShellScriptBuildPhase;
			buildActionMask = 2147483647;
			files = (
			);
			inputPaths = (
				"${PODS_ROOT}/Target Support Files/Pods-ObytesApp/Pods-ObytesApp-frameworks.sh",
				"${PODS_XCFRAMEWORKS_BUILD_DIR}/hermes-engine/Pre-built/hermes.framework/hermes",
			);
			name = "[CP] Embed Pods Frameworks";
			outputPaths = (
				"${TARGET_BUILD_DIR}/${FRAMEWORKS_FOLDER_PATH}/hermes.framework",
			);
			runOnlyForDeploymentPostprocessing = 0;
			shellPath = /bin/sh;
			shellScript = "\"${PODS_ROOT}/Target Support Files/Pods-ObytesApp/Pods-ObytesApp-frameworks.sh\"\n";
			showEnvVarsInLog = 0;
		};
/* End PBXShellScriptBuildPhase section */

/* Begin PBXSourcesBuildPhase section */
		13B07F871A680F5B00A75B9A /* Sources */ = {
			isa = PBXSourcesBuildPhase;
			buildActionMask = 2147483647;
			files = (
				F11748422D0307B40044C1D9 /* AppDelegate.swift in Sources */,
				0101C39C12EFEA097D6DAFC7 /* ExpoModulesProvider.swift in Sources */,
			);
			runOnlyForDeploymentPostprocessing = 0;
		};
/* End PBXSourcesBuildPhase section */

/* Begin XCBuildConfiguration section */
		13B07F941A680F5B00A75B9A /* Debug */ = {
			isa = XCBuildConfiguration;
			baseConfigurationReference = 26912D481B7370986F8250CF /* Pods-ObytesApp.debug.xcconfig */;
			buildSettings = {
				ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
				CLANG_ENABLE_MODULES = YES;
				CODE_SIGN_ENTITLEMENTS = ObytesApp/ObytesApp.entitlements;
				CURRENT_PROJECT_VERSION = 1;
				ENABLE_BITCODE = NO;
				GCC_PREPROCESSOR_DEFINITIONS = (
					"$(inherited)",
					"FB_SONARKIT_ENABLED=1",
				);
				INFOPLIST_FILE = ObytesApp/Info.plist;
				IPHONEOS_DEPLOYMENT_TARGET = 15.1;
				LD_RUNPATH_SEARCH_PATHS = (
					"$(inherited)",
					"@executable_path/Frameworks",
				);
				MARKETING_VERSION = 1.0;
				OTHER_LDFLAGS = (
					"$(inherited)",
					"-ObjC",
					"-lc++",
				);
				OTHER_SWIFT_FLAGS = "$(inherited) -D EXPO_CONFIGURATION_DEBUG";
				PRODUCT_BUNDLE_IDENTIFIER = com.obytes.development;
				PRODUCT_NAME = "ObytesApp";
				SWIFT_OBJC_BRIDGING_HEADER = "ObytesApp/ObytesApp-Bridging-Header.h";
				SWIFT_OPTIMIZATION_LEVEL = "-Onone";
				SWIFT_VERSION = 5.0;
				TARGETED_DEVICE_FAMILY = "1,2";
				VERSIONING_SYSTEM = "apple-generic";
			};
			name = Debug;
		};
		13B07F951A680F5B00A75B9A /* Release */ = {
			isa = XCBuildConfiguration;
			baseConfigurationReference = 3C93193ACC7A90E1E3A2249D /* Pods-ObytesApp.release.xcconfig */;
			buildSettings = {
				ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
				CLANG_ENABLE_MODULES = YES;
				CODE_SIGN_ENTITLEMENTS = ObytesApp/ObytesApp.entitlements;
				CURRENT_PROJECT_VERSION = 1;
				INFOPLIST_FILE = ObytesApp/Info.plist;
				IPHONEOS_DEPLOYMENT_TARGET = 15.1;
				LD_RUNPATH_SEARCH_PATHS = (
					"$(inherited)",
					"@executable_path/Frameworks",
				);
				MARKETING_VERSION = 1.0;
				OTHER_LDFLAGS = (
					"$(inherited)",
					"-ObjC",
					"-lc++",
				);
				OTHER_SWIFT_FLAGS = "$(inherited) -D EXPO_CONFIGURATION_RELEASE";
				PRODUCT_BUNDLE_IDENTIFIER = com.obytes.development;
				PRODUCT_NAME = "ObytesApp";
				SWIFT_OBJC_BRIDGING_HEADER = "ObytesApp/ObytesApp-Bridging-Header.h";
				SWIFT_VERSION = 5.0;
				TARGETED_DEVICE_FAMILY = "1,2";
				VERSIONING_SYSTEM = "apple-generic";
			};
			name = Release;
		};
		83CBBA201A601CBA00E9B192 /* Debug */ = {
			isa = XCBuildConfiguration;
			buildSettings = {
				ALWAYS_SEARCH_USER_PATHS = NO;
				CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED = YES;
				CLANG_CXX_LANGUAGE_STANDARD = "c++20";
				CLANG_CXX_LIBRARY = "libc++";
				CLANG_ENABLE_MODULES = YES;
				CLANG_ENABLE_OBJC_ARC = YES;
				CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING = YES;
				CLANG_WARN_BOOL_CONVERSION = YES;
				CLANG_WARN_COMMA = YES;
				CLANG_WARN_CONSTANT_CONVERSION = YES;
				CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS = YES;
				CLANG_WARN_DIRECT_OBJC_ISA_USAGE = YES_ERROR;
				CLANG_WARN_EMPTY_BODY = YES;
				CLANG_WARN_ENUM_CONVERSION = YES;
				CLANG_WARN_INFINITE_RECURSION = YES;
				CLANG_WARN_INT_CONVERSION = YES;
				CLANG_WARN_NON_LITERAL_NULL_CONVERSION = YES;
				CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF = YES;
				CLANG_WARN_OBJC_LITERAL_CONVERSION = YES;
				CLANG_WARN_OBJC_ROOT_CLASS = YES_ERROR;
				CLANG_WARN_RANGE_LOOP_ANALYSIS = YES;
				CLANG_WARN_STRICT_PROTOTYPES = YES;
				CLANG_WARN_SUSPICIOUS_MOVE = YES;
				CLANG_WARN_UNREACHABLE_CODE = YES;
				CLANG_WARN__DUPLICATE_METHOD_MATCH = YES;
				"CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Developer";
				COPY_PHASE_STRIP = NO;
				ENABLE_STRICT_OBJC_MSGSEND = YES;
				ENABLE_TESTABILITY = YES;
				GCC_C_LANGUAGE_STANDARD = gnu99;
				GCC_DYNAMIC_NO_PIC = NO;
				GCC_NO_COMMON_BLOCKS = YES;
				GCC_OPTIMIZATION_LEVEL = 0;
				GCC_PREPROCESSOR_DEFINITIONS = (
					"DEBUG=1",
					"$(inherited)",
				);
				GCC_SYMBOLS_PRIVATE_EXTERN = NO;
				GCC_WARN_64_TO_32_BIT_CONVERSION = YES;
				GCC_WARN_ABOUT_RETURN_TYPE = YES_ERROR;
				GCC_WARN_UNDECLARED_SELECTOR = YES;
				GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;
				GCC_WARN_UNUSED_FUNCTION = YES;
				GCC_WARN_UNUSED_VARIABLE = YES;
				IPHONEOS_DEPLOYMENT_TARGET = 15.1;
				LD_RUNPATH_SEARCH_PATHS = (
					/usr/lib/swift,
					"$(inherited)",
				);
				LIBRARY_SEARCH_PATHS = "$(SDKROOT)/usr/lib/swift\"$(inherited)\"";
				MTL_ENABLE_DEBUG_INFO = YES;
				ONLY_ACTIVE_ARCH = YES;
				OTHER_LDFLAGS = (
					"$(inherited)",
					" ",
				);
				REACT_NATIVE_PATH = "${PODS_ROOT}/../../node_modules/react-native";
				SDKROOT = iphoneos;
				SWIFT_ACTIVE_COMPILATION_CONDITIONS = "$(inherited) DEBUG";
				USE_HERMES = true;
			};
			name = Debug;
		};
		83CBBA211A601CBA00E9B192 /* Release */ = {
			isa = XCBuildConfiguration;
			buildSettings = {
				ALWAYS_SEARCH_USER_PATHS = NO;
				CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED = YES;
				CLANG_CXX_LANGUAGE_STANDARD = "c++20";
				CLANG_CXX_LIBRARY = "libc++";
				CLANG_ENABLE_MODULES = YES;
				CLANG_ENABLE_OBJC_ARC = YES;
				CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING = YES;
				CLANG_WARN_BOOL_CONVERSION = YES;
				CLANG_WARN_COMMA = YES;
				CLANG_WARN_CONSTANT_CONVERSION = YES;
				CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS = YES;
				CLANG_WARN_DIRECT_OBJC_ISA_USAGE = YES_ERROR;
				CLANG_WARN_EMPTY_BODY = YES;
				CLANG_WARN_ENUM_CONVERSION = YES;
				CLANG_WARN_INFINITE_RECURSION = YES;
				CLANG_WARN_INT_CONVERSION = YES;
				CLANG_WARN_NON_LITERAL_NULL_CONVERSION = YES;
				CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF = YES;
				CLANG_WARN_OBJC_LITERAL_CONVERSION = YES;
				CLANG_WARN_OBJC_ROOT_CLASS = YES_ERROR;
				CLANG_WARN_RANGE_LOOP_ANALYSIS = YES;
				CLANG_WARN_STRICT_PROTOTYPES = YES;
				CLANG_WARN_SUSPICIOUS_MOVE = YES;
				CLANG_WARN_UNREACHABLE_CODE = YES;
				CLANG_WARN__DUPLICATE_METHOD_MATCH = YES;
				"CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Developer";
				COPY_PHASE_STRIP = YES;
				ENABLE_NS_ASSERTIONS = NO;
				ENABLE_STRICT_OBJC_MSGSEND = YES;
				GCC_C_LANGUAGE_STANDARD = gnu99;
				GCC_NO_COMMON_BLOCKS = YES;
				GCC_WARN_64_TO_32_BIT_CONVERSION = YES;
				GCC_WARN_ABOUT_RETURN_TYPE = YES_ERROR;
				GCC_WARN_UNDECLARED_SELECTOR = YES;
				GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;
				GCC_WARN_UNUSED_FUNCTION = YES;
				GCC_WARN_UNUSED_VARIABLE = YES;
				IPHONEOS_DEPLOYMENT_TARGET = 15.1;
				LD_RUNPATH_SEARCH_PATHS = (
					/usr/lib/swift,
					"$(inherited)",
				);
				LIBRARY_SEARCH_PATHS = "$(SDKROOT)/usr/lib/swift\"$(inherited)\"";
				MTL_ENABLE_DEBUG_INFO = NO;
				OTHER_LDFLAGS = (
					"$(inherited)",
					" ",
				);
				REACT_NATIVE_PATH = "${PODS_ROOT}/../../node_modules/react-native";
				SDKROOT = iphoneos;
				USE_HERMES = true;
				VALIDATE_PRODUCT = YES;
			};
			name = Release;
		};
/* End XCBuildConfiguration section */

/* Begin XCConfigurationList section */
		13B07F931A680F5B00A75B9A /* Build configuration list for PBXNativeTarget "ObytesApp" */ = {
			isa = XCConfigurationList;
			buildConfigurations = (
				13B07F941A680F5B00A75B9A /* Debug */,
				13B07F951A680F5B00A75B9A /* Release */,
			);
			defaultConfigurationIsVisible = 0;
			defaultConfigurationName = Release;
		};
		83CBB9FA1A601CBA00E9B192 /* Build configuration list for PBXProject "ObytesApp" */ = {
			isa = XCConfigurationList;
			buildConfigurations = (
				83CBBA201A601CBA00E9B192 /* Debug */,
				83CBBA211A601CBA00E9B192 /* Release */,
			);
			defaultConfigurationIsVisible = 0;
			defaultConfigurationName = Release;
		};
/* End XCConfigurationList section */
	};
	rootObject = 83CBB9F71A601CBA00E9B192 /* Project object */;
}
````

## File: ios/ObytesApp.xcworkspace/contents.xcworkspacedata
````
<?xml version="1.0" encoding="UTF-8"?>
<Workspace
   version = "1.0">
   <FileRef
      location = "group:ObytesApp.xcodeproj">
   </FileRef>
   <FileRef
      location = "group:Pods/Pods.xcodeproj">
   </FileRef>
</Workspace>
````

## File: ios/.gitignore
````
# OSX
#
.DS_Store

# Xcode
#
build/
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3
xcuserdata
*.xccheckout
*.moved-aside
DerivedData
*.hmap
*.ipa
*.xcuserstate
project.xcworkspace
.xcode.env.local

# Bundle artifacts
*.jsbundle

# CocoaPods
/Pods/
````

## File: ios/.xcode.env
````
# This `.xcode.env` file is versioned and is used to source the environment
# used when running script phases inside Xcode.
# To customize your local environment, you can create an `.xcode.env.local`
# file that is not versioned.

# NODE_BINARY variable contains the PATH to the node executable.
#
# Customize the NODE_BINARY variable here.
# For example, to use nvm with brew, add the following line
# . "$(brew --prefix nvm)/nvm.sh" --no-use
export NODE_BINARY=$(command -v node)
````

## File: ios/Podfile
````
require File.join(File.dirname(`node --print "require.resolve('expo/package.json')"`), "scripts/autolinking")
require File.join(File.dirname(`node --print "require.resolve('react-native/package.json')"`), "scripts/react_native_pods")

require 'json'
podfile_properties = JSON.parse(File.read(File.join(__dir__, 'Podfile.properties.json'))) rescue {}

ENV['RCT_NEW_ARCH_ENABLED'] = '0' if podfile_properties['newArchEnabled'] == 'false'
ENV['EX_DEV_CLIENT_NETWORK_INSPECTOR'] = podfile_properties['EX_DEV_CLIENT_NETWORK_INSPECTOR']

platform :ios, podfile_properties['ios.deploymentTarget'] || '15.1'
install! 'cocoapods',
  :deterministic_uuids => false

prepare_react_native_project!

target 'ObytesApp' do
  use_expo_modules!

  if ENV['EXPO_USE_COMMUNITY_AUTOLINKING'] == '1'
    config_command = ['node', '-e', "process.argv=['', '', 'config'];require('@react-native-community/cli').run()"];
  else
    config_command = [
      'npx',
      'expo-modules-autolinking',
      'react-native-config',
      '--json',
      '--platform',
      'ios'
    ]
  end

  config = use_native_modules!(config_command)

  use_frameworks! :linkage => podfile_properties['ios.useFrameworks'].to_sym if podfile_properties['ios.useFrameworks']
  use_frameworks! :linkage => ENV['USE_FRAMEWORKS'].to_sym if ENV['USE_FRAMEWORKS']

  use_react_native!(
    :path => config[:reactNativePath],
    :hermes_enabled => podfile_properties['expo.jsEngine'] == nil || podfile_properties['expo.jsEngine'] == 'hermes',
    # An absolute path to your application root.
    :app_path => "#{Pod::Config.instance.installation_root}/..",
    :privacy_file_aggregation_enabled => podfile_properties['apple.privacyManifestAggregationEnabled'] != 'false',
  )

  post_install do |installer|
    react_native_post_install(
      installer,
      config[:reactNativePath],
      :mac_catalyst_enabled => false,
      :ccache_enabled => podfile_properties['apple.ccacheEnabled'] == 'true',
    )

    # This is necessary for Xcode 14, because it signs resource bundles by default
    # when building for devices.
    installer.target_installation_results.pod_target_installation_results
      .each do |pod_name, target_installation_result|
      target_installation_result.resource_bundle_targets.each do |resource_bundle_target|
        resource_bundle_target.build_configurations.each do |config|
          config.build_settings['CODE_SIGNING_ALLOWED'] = 'NO'
        end
      end
    end
  end
end
````

## File: ios/Podfile.lock
````
PODS:
  - boost (1.84.0)
  - DoubleConversion (1.1.6)
  - EXConstants (17.1.6):
    - ExpoModulesCore
  - EXJSONUtils (0.15.0)
  - EXManifests (0.16.5):
    - ExpoModulesCore
  - Expo (53.0.11):
    - DoubleConversion
    - ExpoModulesCore
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTAppDelegate
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactAppDependencyProvider
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - expo-dev-client (5.2.0):
    - EXManifests
    - expo-dev-launcher
    - expo-dev-menu
    - expo-dev-menu-interface
    - EXUpdatesInterface
  - expo-dev-launcher (5.1.12):
    - DoubleConversion
    - EXManifests
    - expo-dev-launcher/Main (= 5.1.12)
    - expo-dev-menu
    - expo-dev-menu-interface
    - ExpoModulesCore
    - EXUpdatesInterface
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-jsinspector
    - React-NativeModulesApple
    - React-RCTAppDelegate
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactAppDependencyProvider
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - expo-dev-launcher/Main (5.1.12):
    - DoubleConversion
    - EXManifests
    - expo-dev-launcher/Unsafe
    - expo-dev-menu
    - expo-dev-menu-interface
    - ExpoModulesCore
    - EXUpdatesInterface
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-jsinspector
    - React-NativeModulesApple
    - React-RCTAppDelegate
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactAppDependencyProvider
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - expo-dev-launcher/Unsafe (5.1.12):
    - DoubleConversion
    - EXManifests
    - expo-dev-menu
    - expo-dev-menu-interface
    - ExpoModulesCore
    - EXUpdatesInterface
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-jsinspector
    - React-NativeModulesApple
    - React-RCTAppDelegate
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactAppDependencyProvider
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - expo-dev-menu (6.1.11):
    - DoubleConversion
    - expo-dev-menu/Main (= 6.1.11)
    - expo-dev-menu/ReactNativeCompatibles (= 6.1.11)
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - expo-dev-menu-interface (1.10.0)
  - expo-dev-menu/Main (6.1.11):
    - DoubleConversion
    - EXManifests
    - expo-dev-menu-interface
    - expo-dev-menu/Vendored
    - ExpoModulesCore
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-jsinspector
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactAppDependencyProvider
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - expo-dev-menu/ReactNativeCompatibles (6.1.11):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - expo-dev-menu/SafeAreaView (6.1.11):
    - DoubleConversion
    - ExpoModulesCore
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - expo-dev-menu/Vendored (6.1.11):
    - DoubleConversion
    - expo-dev-menu/SafeAreaView
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - ExpoAsset (11.1.5):
    - ExpoModulesCore
  - ExpoCrypto (14.1.5):
    - ExpoModulesCore
  - ExpoFileSystem (18.1.10):
    - ExpoModulesCore
  - ExpoFont (13.3.1):
    - ExpoModulesCore
  - ExpoHead (5.1.0):
    - ExpoModulesCore
  - ExpoImage (2.3.0):
    - ExpoModulesCore
    - libavif/libdav1d
    - SDWebImage (~> 5.21.0)
    - SDWebImageAVIFCoder (~> 0.11.0)
    - SDWebImageSVGCoder (~> 1.7.0)
    - SDWebImageWebPCoder (~> 0.14.6)
  - ExpoKeepAwake (14.1.4):
    - ExpoModulesCore
  - ExpoLinking (7.1.5):
    - ExpoModulesCore
  - ExpoLocalization (16.1.5):
    - ExpoModulesCore
  - ExpoModulesCore (2.4.0):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-jsinspector
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - ExpoSplashScreen (0.30.9):
    - ExpoModulesCore
  - ExpoSystemUI (5.0.8):
    - ExpoModulesCore
  - EXUpdatesInterface (1.1.0):
    - ExpoModulesCore
  - fast_float (6.1.4)
  - FBLazyVector (0.79.3)
  - fmt (11.0.2)
  - glog (0.3.5)
  - hermes-engine (0.79.3):
    - hermes-engine/Pre-built (= 0.79.3)
  - hermes-engine/Pre-built (0.79.3)
  - libavif/core (0.11.1)
  - libavif/libdav1d (0.11.1):
    - libavif/core
    - libdav1d (>= 0.6.0)
  - libdav1d (1.2.0)
  - libwebp (1.5.0):
    - libwebp/demux (= 1.5.0)
    - libwebp/mux (= 1.5.0)
    - libwebp/sharpyuv (= 1.5.0)
    - libwebp/webp (= 1.5.0)
  - libwebp/demux (1.5.0):
    - libwebp/webp
  - libwebp/mux (1.5.0):
    - libwebp/demux
  - libwebp/sharpyuv (1.5.0)
  - libwebp/webp (1.5.0):
    - libwebp/sharpyuv
  - RCT-Folly (2024.11.18.00):
    - boost
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - RCT-Folly/Default (= 2024.11.18.00)
  - RCT-Folly/Default (2024.11.18.00):
    - boost
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
  - RCT-Folly/Fabric (2024.11.18.00):
    - boost
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
  - RCTDeprecation (0.79.3)
  - RCTRequired (0.79.3)
  - RCTTypeSafety (0.79.3):
    - FBLazyVector (= 0.79.3)
    - RCTRequired (= 0.79.3)
    - React-Core (= 0.79.3)
  - React (0.79.3):
    - React-Core (= 0.79.3)
    - React-Core/DevSupport (= 0.79.3)
    - React-Core/RCTWebSocket (= 0.79.3)
    - React-RCTActionSheet (= 0.79.3)
    - React-RCTAnimation (= 0.79.3)
    - React-RCTBlob (= 0.79.3)
    - React-RCTImage (= 0.79.3)
    - React-RCTLinking (= 0.79.3)
    - React-RCTNetwork (= 0.79.3)
    - React-RCTSettings (= 0.79.3)
    - React-RCTText (= 0.79.3)
    - React-RCTVibration (= 0.79.3)
  - React-callinvoker (0.79.3)
  - React-Core (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default (= 0.79.3)
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/CoreModulesHeaders (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/Default (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/DevSupport (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default (= 0.79.3)
    - React-Core/RCTWebSocket (= 0.79.3)
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTActionSheetHeaders (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTAnimationHeaders (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTBlobHeaders (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTImageHeaders (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTLinkingHeaders (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTNetworkHeaders (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTSettingsHeaders (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTTextHeaders (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTVibrationHeaders (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTWebSocket (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default (= 0.79.3)
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-CoreModules (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - RCT-Folly (= 2024.11.18.00)
    - RCTTypeSafety (= 0.79.3)
    - React-Core/CoreModulesHeaders (= 0.79.3)
    - React-jsi (= 0.79.3)
    - React-jsinspector
    - React-jsinspectortracing
    - React-NativeModulesApple
    - React-RCTBlob
    - React-RCTFBReactNativeSpec
    - React-RCTImage (= 0.79.3)
    - ReactCommon
    - SocketRocket (= 0.7.1)
  - React-cxxreact (0.79.3):
    - boost
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-callinvoker (= 0.79.3)
    - React-debug (= 0.79.3)
    - React-jsi (= 0.79.3)
    - React-jsinspector
    - React-jsinspectortracing
    - React-logger (= 0.79.3)
    - React-perflogger (= 0.79.3)
    - React-runtimeexecutor (= 0.79.3)
    - React-timing (= 0.79.3)
  - React-debug (0.79.3)
  - React-defaultsnativemodule (0.79.3):
    - hermes-engine
    - RCT-Folly
    - React-domnativemodule
    - React-featureflagsnativemodule
    - React-hermes
    - React-idlecallbacksnativemodule
    - React-jsi
    - React-jsiexecutor
    - React-microtasksnativemodule
    - React-RCTFBReactNativeSpec
  - React-domnativemodule (0.79.3):
    - hermes-engine
    - RCT-Folly
    - React-Fabric
    - React-FabricComponents
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-RCTFBReactNativeSpec
    - ReactCommon/turbomodule/core
    - Yoga
  - React-Fabric (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric/animations (= 0.79.3)
    - React-Fabric/attributedstring (= 0.79.3)
    - React-Fabric/componentregistry (= 0.79.3)
    - React-Fabric/componentregistrynative (= 0.79.3)
    - React-Fabric/components (= 0.79.3)
    - React-Fabric/consistency (= 0.79.3)
    - React-Fabric/core (= 0.79.3)
    - React-Fabric/dom (= 0.79.3)
    - React-Fabric/imagemanager (= 0.79.3)
    - React-Fabric/leakchecker (= 0.79.3)
    - React-Fabric/mounting (= 0.79.3)
    - React-Fabric/observers (= 0.79.3)
    - React-Fabric/scheduler (= 0.79.3)
    - React-Fabric/telemetry (= 0.79.3)
    - React-Fabric/templateprocessor (= 0.79.3)
    - React-Fabric/uimanager (= 0.79.3)
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/animations (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/attributedstring (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/componentregistry (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/componentregistrynative (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/components (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric/components/legacyviewmanagerinterop (= 0.79.3)
    - React-Fabric/components/root (= 0.79.3)
    - React-Fabric/components/scrollview (= 0.79.3)
    - React-Fabric/components/view (= 0.79.3)
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/components/legacyviewmanagerinterop (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/components/root (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/components/scrollview (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/components/view (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-renderercss
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-Fabric/consistency (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/core (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/dom (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/imagemanager (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/leakchecker (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/mounting (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/observers (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric/observers/events (= 0.79.3)
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/observers/events (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/scheduler (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric/observers/events
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-performancetimeline
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/telemetry (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/templateprocessor (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/uimanager (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric/uimanager/consistency (= 0.79.3)
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererconsistency
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/uimanager/consistency (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererconsistency
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-FabricComponents (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-FabricComponents/components (= 0.79.3)
    - React-FabricComponents/textlayoutmanager (= 0.79.3)
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-FabricComponents/components/inputaccessory (= 0.79.3)
    - React-FabricComponents/components/iostextinput (= 0.79.3)
    - React-FabricComponents/components/modal (= 0.79.3)
    - React-FabricComponents/components/rncore (= 0.79.3)
    - React-FabricComponents/components/safeareaview (= 0.79.3)
    - React-FabricComponents/components/scrollview (= 0.79.3)
    - React-FabricComponents/components/text (= 0.79.3)
    - React-FabricComponents/components/textinput (= 0.79.3)
    - React-FabricComponents/components/unimplementedview (= 0.79.3)
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/inputaccessory (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/iostextinput (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/modal (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/rncore (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/safeareaview (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/scrollview (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/text (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/textinput (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/unimplementedview (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/textlayoutmanager (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricImage (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired (= 0.79.3)
    - RCTTypeSafety (= 0.79.3)
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-jsiexecutor (= 0.79.3)
    - React-logger
    - React-rendererdebug
    - React-utils
    - ReactCommon
    - Yoga
  - React-featureflags (0.79.3):
    - RCT-Folly (= 2024.11.18.00)
  - React-featureflagsnativemodule (0.79.3):
    - hermes-engine
    - RCT-Folly
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-RCTFBReactNativeSpec
    - ReactCommon/turbomodule/core
  - React-graphics (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-utils
  - React-hermes (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-cxxreact (= 0.79.3)
    - React-jsi
    - React-jsiexecutor (= 0.79.3)
    - React-jsinspector
    - React-jsinspectortracing
    - React-perflogger (= 0.79.3)
    - React-runtimeexecutor
  - React-idlecallbacksnativemodule (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-RCTFBReactNativeSpec
    - React-runtimescheduler
    - ReactCommon/turbomodule/core
  - React-ImageManager (0.79.3):
    - glog
    - RCT-Folly/Fabric
    - React-Core/Default
    - React-debug
    - React-Fabric
    - React-graphics
    - React-rendererdebug
    - React-utils
  - React-jserrorhandler (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-jsi
    - ReactCommon/turbomodule/bridging
  - React-jsi (0.79.3):
    - boost
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
  - React-jsiexecutor (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-cxxreact (= 0.79.3)
    - React-jsi (= 0.79.3)
    - React-jsinspector
    - React-jsinspectortracing
    - React-perflogger (= 0.79.3)
  - React-jsinspector (0.79.3):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly
    - React-featureflags
    - React-jsi
    - React-jsinspectortracing
    - React-perflogger (= 0.79.3)
    - React-runtimeexecutor (= 0.79.3)
  - React-jsinspectortracing (0.79.3):
    - RCT-Folly
    - React-oscompat
  - React-jsitooling (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - RCT-Folly (= 2024.11.18.00)
    - React-cxxreact (= 0.79.3)
    - React-jsi (= 0.79.3)
    - React-jsinspector
    - React-jsinspectortracing
  - React-jsitracing (0.79.3):
    - React-jsi
  - React-logger (0.79.3):
    - glog
  - React-Mapbuffer (0.79.3):
    - glog
    - React-debug
  - React-microtasksnativemodule (0.79.3):
    - hermes-engine
    - RCT-Folly
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-RCTFBReactNativeSpec
    - ReactCommon/turbomodule/core
  - react-native-keyboard-controller (1.17.4):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - react-native-keyboard-controller/common (= 1.17.4)
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - react-native-keyboard-controller/common (1.17.4):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - react-native-mmkv (3.1.0):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - react-native-restart (0.0.27):
    - React-Core
  - react-native-safe-area-context (5.4.0):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - react-native-safe-area-context/common (= 5.4.0)
    - react-native-safe-area-context/fabric (= 5.4.0)
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - react-native-safe-area-context/common (5.4.0):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - react-native-safe-area-context/fabric (5.4.0):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - react-native-safe-area-context/common
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - React-NativeModulesApple (0.79.3):
    - glog
    - hermes-engine
    - React-callinvoker
    - React-Core
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsinspector
    - React-runtimeexecutor
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
  - React-oscompat (0.79.3)
  - React-perflogger (0.79.3):
    - DoubleConversion
    - RCT-Folly (= 2024.11.18.00)
  - React-performancetimeline (0.79.3):
    - RCT-Folly (= 2024.11.18.00)
    - React-cxxreact
    - React-featureflags
    - React-jsinspectortracing
    - React-perflogger
    - React-timing
  - React-RCTActionSheet (0.79.3):
    - React-Core/RCTActionSheetHeaders (= 0.79.3)
  - React-RCTAnimation (0.79.3):
    - RCT-Folly (= 2024.11.18.00)
    - RCTTypeSafety
    - React-Core/RCTAnimationHeaders
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFBReactNativeSpec
    - ReactCommon
  - React-RCTAppDelegate (0.79.3):
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-CoreModules
    - React-debug
    - React-defaultsnativemodule
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsitooling
    - React-NativeModulesApple
    - React-RCTFabric
    - React-RCTFBReactNativeSpec
    - React-RCTImage
    - React-RCTNetwork
    - React-RCTRuntime
    - React-rendererdebug
    - React-RuntimeApple
    - React-RuntimeCore
    - React-runtimescheduler
    - React-utils
    - ReactCommon
  - React-RCTBlob (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-Core/RCTBlobHeaders
    - React-Core/RCTWebSocket
    - React-jsi
    - React-jsinspector
    - React-NativeModulesApple
    - React-RCTFBReactNativeSpec
    - React-RCTNetwork
    - ReactCommon
  - React-RCTFabric (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - React-Core
    - React-debug
    - React-Fabric
    - React-FabricComponents
    - React-FabricImage
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-jsinspector
    - React-jsinspectortracing
    - React-performancetimeline
    - React-RCTAnimation
    - React-RCTImage
    - React-RCTText
    - React-rendererconsistency
    - React-renderercss
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - Yoga
  - React-RCTFBReactNativeSpec (0.79.3):
    - hermes-engine
    - RCT-Folly
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-NativeModulesApple
    - ReactCommon
  - React-RCTImage (0.79.3):
    - RCT-Folly (= 2024.11.18.00)
    - RCTTypeSafety
    - React-Core/RCTImageHeaders
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFBReactNativeSpec
    - React-RCTNetwork
    - ReactCommon
  - React-RCTLinking (0.79.3):
    - React-Core/RCTLinkingHeaders (= 0.79.3)
    - React-jsi (= 0.79.3)
    - React-NativeModulesApple
    - React-RCTFBReactNativeSpec
    - ReactCommon
    - ReactCommon/turbomodule/core (= 0.79.3)
  - React-RCTNetwork (0.79.3):
    - RCT-Folly (= 2024.11.18.00)
    - RCTTypeSafety
    - React-Core/RCTNetworkHeaders
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFBReactNativeSpec
    - ReactCommon
  - React-RCTRuntime (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - React-Core
    - React-hermes
    - React-jsi
    - React-jsinspector
    - React-jsinspectortracing
    - React-jsitooling
    - React-RuntimeApple
    - React-RuntimeCore
    - React-RuntimeHermes
  - React-RCTSettings (0.79.3):
    - RCT-Folly (= 2024.11.18.00)
    - RCTTypeSafety
    - React-Core/RCTSettingsHeaders
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFBReactNativeSpec
    - ReactCommon
  - React-RCTText (0.79.3):
    - React-Core/RCTTextHeaders (= 0.79.3)
    - Yoga
  - React-RCTVibration (0.79.3):
    - RCT-Folly (= 2024.11.18.00)
    - React-Core/RCTVibrationHeaders
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFBReactNativeSpec
    - ReactCommon
  - React-rendererconsistency (0.79.3)
  - React-renderercss (0.79.3):
    - React-debug
    - React-utils
  - React-rendererdebug (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - RCT-Folly (= 2024.11.18.00)
    - React-debug
  - React-rncore (0.79.3)
  - React-RuntimeApple (0.79.3):
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - React-callinvoker
    - React-Core/Default
    - React-CoreModules
    - React-cxxreact
    - React-featureflags
    - React-jserrorhandler
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-Mapbuffer
    - React-NativeModulesApple
    - React-RCTFabric
    - React-RCTFBReactNativeSpec
    - React-RuntimeCore
    - React-runtimeexecutor
    - React-RuntimeHermes
    - React-runtimescheduler
    - React-utils
  - React-RuntimeCore (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - React-cxxreact
    - React-Fabric
    - React-featureflags
    - React-hermes
    - React-jserrorhandler
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-jsitooling
    - React-performancetimeline
    - React-runtimeexecutor
    - React-runtimescheduler
    - React-utils
  - React-runtimeexecutor (0.79.3):
    - React-jsi (= 0.79.3)
  - React-RuntimeHermes (0.79.3):
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsinspector
    - React-jsinspectortracing
    - React-jsitooling
    - React-jsitracing
    - React-RuntimeCore
    - React-utils
  - React-runtimescheduler (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-callinvoker
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsinspectortracing
    - React-performancetimeline
    - React-rendererconsistency
    - React-rendererdebug
    - React-runtimeexecutor
    - React-timing
    - React-utils
  - React-timing (0.79.3)
  - React-utils (0.79.3):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-debug
    - React-hermes
    - React-jsi (= 0.79.3)
  - ReactAppDependencyProvider (0.79.3):
    - ReactCodegen
  - ReactCodegen (0.79.3):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-FabricImage
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-NativeModulesApple
    - React-RCTAppDelegate
    - React-rendererdebug
    - React-utils
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
  - ReactCommon (0.79.3):
    - ReactCommon/turbomodule (= 0.79.3)
  - ReactCommon/turbomodule (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-callinvoker (= 0.79.3)
    - React-cxxreact (= 0.79.3)
    - React-jsi (= 0.79.3)
    - React-logger (= 0.79.3)
    - React-perflogger (= 0.79.3)
    - ReactCommon/turbomodule/bridging (= 0.79.3)
    - ReactCommon/turbomodule/core (= 0.79.3)
  - ReactCommon/turbomodule/bridging (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-callinvoker (= 0.79.3)
    - React-cxxreact (= 0.79.3)
    - React-jsi (= 0.79.3)
    - React-logger (= 0.79.3)
    - React-perflogger (= 0.79.3)
  - ReactCommon/turbomodule/core (0.79.3):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-callinvoker (= 0.79.3)
    - React-cxxreact (= 0.79.3)
    - React-debug (= 0.79.3)
    - React-featureflags (= 0.79.3)
    - React-jsi (= 0.79.3)
    - React-logger (= 0.79.3)
    - React-perflogger (= 0.79.3)
    - React-utils (= 0.79.3)
  - RNFlashList (1.8.2):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - RNGestureHandler (2.24.0):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - RNReanimated (3.17.5):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - RNReanimated/reanimated (= 3.17.5)
    - RNReanimated/worklets (= 3.17.5)
    - Yoga
  - RNReanimated/reanimated (3.17.5):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - RNReanimated/reanimated/apple (= 3.17.5)
    - Yoga
  - RNReanimated/reanimated/apple (3.17.5):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - RNReanimated/worklets (3.17.5):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - RNReanimated/worklets/apple (= 3.17.5)
    - Yoga
  - RNReanimated/worklets/apple (3.17.5):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - RNScreens (4.11.1):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-RCTImage
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - RNScreens/common (= 4.11.1)
    - Yoga
  - RNScreens/common (4.11.1):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-RCTImage
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - RNSVG (15.11.2):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - RNSVG/common (= 15.11.2)
    - Yoga
  - RNSVG/common (15.11.2):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-ImageManager
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFabric
    - React-renderercss
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - SDWebImage (5.21.1):
    - SDWebImage/Core (= 5.21.1)
  - SDWebImage/Core (5.21.1)
  - SDWebImageAVIFCoder (0.11.0):
    - libavif/core (>= 0.11.0)
    - SDWebImage (~> 5.10)
  - SDWebImageSVGCoder (1.7.0):
    - SDWebImage/Core (~> 5.6)
  - SDWebImageWebPCoder (0.14.6):
    - libwebp (~> 1.0)
    - SDWebImage/Core (~> 5.17)
  - SocketRocket (0.7.1)
  - Yoga (0.0.0)

DEPENDENCIES:
  - boost (from `../node_modules/react-native/third-party-podspecs/boost.podspec`)
  - DoubleConversion (from `../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec`)
  - EXConstants (from `../node_modules/expo-constants/ios`)
  - EXJSONUtils (from `../node_modules/expo-json-utils/ios`)
  - EXManifests (from `../node_modules/expo-manifests/ios`)
  - Expo (from `../node_modules/expo`)
  - expo-dev-client (from `../node_modules/expo-dev-client/ios`)
  - expo-dev-launcher (from `../node_modules/expo-dev-launcher`)
  - expo-dev-menu (from `../node_modules/expo-dev-menu`)
  - expo-dev-menu-interface (from `../node_modules/expo-dev-menu-interface/ios`)
  - ExpoAsset (from `../node_modules/expo-asset/ios`)
  - ExpoCrypto (from `../node_modules/expo-crypto/ios`)
  - ExpoFileSystem (from `../node_modules/expo-file-system/ios`)
  - ExpoFont (from `../node_modules/expo-font/ios`)
  - ExpoHead (from `../node_modules/expo-router/ios`)
  - ExpoImage (from `../node_modules/expo-image/ios`)
  - ExpoKeepAwake (from `../node_modules/expo-keep-awake/ios`)
  - ExpoLinking (from `../node_modules/expo-linking/ios`)
  - ExpoLocalization (from `../node_modules/expo-localization/ios`)
  - ExpoModulesCore (from `../node_modules/expo-modules-core`)
  - ExpoSplashScreen (from `../node_modules/expo-splash-screen/ios`)
  - ExpoSystemUI (from `../node_modules/expo-system-ui/ios`)
  - EXUpdatesInterface (from `../node_modules/expo-updates-interface/ios`)
  - fast_float (from `../node_modules/react-native/third-party-podspecs/fast_float.podspec`)
  - FBLazyVector (from `../node_modules/react-native/Libraries/FBLazyVector`)
  - fmt (from `../node_modules/react-native/third-party-podspecs/fmt.podspec`)
  - glog (from `../node_modules/react-native/third-party-podspecs/glog.podspec`)
  - hermes-engine (from `../node_modules/react-native/sdks/hermes-engine/hermes-engine.podspec`)
  - RCT-Folly (from `../node_modules/react-native/third-party-podspecs/RCT-Folly.podspec`)
  - RCT-Folly/Fabric (from `../node_modules/react-native/third-party-podspecs/RCT-Folly.podspec`)
  - RCTDeprecation (from `../node_modules/react-native/ReactApple/Libraries/RCTFoundation/RCTDeprecation`)
  - RCTRequired (from `../node_modules/react-native/Libraries/Required`)
  - RCTTypeSafety (from `../node_modules/react-native/Libraries/TypeSafety`)
  - React (from `../node_modules/react-native/`)
  - React-callinvoker (from `../node_modules/react-native/ReactCommon/callinvoker`)
  - React-Core (from `../node_modules/react-native/`)
  - React-Core/RCTWebSocket (from `../node_modules/react-native/`)
  - React-CoreModules (from `../node_modules/react-native/React/CoreModules`)
  - React-cxxreact (from `../node_modules/react-native/ReactCommon/cxxreact`)
  - React-debug (from `../node_modules/react-native/ReactCommon/react/debug`)
  - React-defaultsnativemodule (from `../node_modules/react-native/ReactCommon/react/nativemodule/defaults`)
  - React-domnativemodule (from `../node_modules/react-native/ReactCommon/react/nativemodule/dom`)
  - React-Fabric (from `../node_modules/react-native/ReactCommon`)
  - React-FabricComponents (from `../node_modules/react-native/ReactCommon`)
  - React-FabricImage (from `../node_modules/react-native/ReactCommon`)
  - React-featureflags (from `../node_modules/react-native/ReactCommon/react/featureflags`)
  - React-featureflagsnativemodule (from `../node_modules/react-native/ReactCommon/react/nativemodule/featureflags`)
  - React-graphics (from `../node_modules/react-native/ReactCommon/react/renderer/graphics`)
  - React-hermes (from `../node_modules/react-native/ReactCommon/hermes`)
  - React-idlecallbacksnativemodule (from `../node_modules/react-native/ReactCommon/react/nativemodule/idlecallbacks`)
  - React-ImageManager (from `../node_modules/react-native/ReactCommon/react/renderer/imagemanager/platform/ios`)
  - React-jserrorhandler (from `../node_modules/react-native/ReactCommon/jserrorhandler`)
  - React-jsi (from `../node_modules/react-native/ReactCommon/jsi`)
  - React-jsiexecutor (from `../node_modules/react-native/ReactCommon/jsiexecutor`)
  - React-jsinspector (from `../node_modules/react-native/ReactCommon/jsinspector-modern`)
  - React-jsinspectortracing (from `../node_modules/react-native/ReactCommon/jsinspector-modern/tracing`)
  - React-jsitooling (from `../node_modules/react-native/ReactCommon/jsitooling`)
  - React-jsitracing (from `../node_modules/react-native/ReactCommon/hermes/executor/`)
  - React-logger (from `../node_modules/react-native/ReactCommon/logger`)
  - React-Mapbuffer (from `../node_modules/react-native/ReactCommon`)
  - React-microtasksnativemodule (from `../node_modules/react-native/ReactCommon/react/nativemodule/microtasks`)
  - react-native-keyboard-controller (from `../node_modules/react-native-keyboard-controller`)
  - react-native-mmkv (from `../node_modules/react-native-mmkv`)
  - react-native-restart (from `../node_modules/react-native-restart`)
  - react-native-safe-area-context (from `../node_modules/react-native-safe-area-context`)
  - React-NativeModulesApple (from `../node_modules/react-native/ReactCommon/react/nativemodule/core/platform/ios`)
  - React-oscompat (from `../node_modules/react-native/ReactCommon/oscompat`)
  - React-perflogger (from `../node_modules/react-native/ReactCommon/reactperflogger`)
  - React-performancetimeline (from `../node_modules/react-native/ReactCommon/react/performance/timeline`)
  - React-RCTActionSheet (from `../node_modules/react-native/Libraries/ActionSheetIOS`)
  - React-RCTAnimation (from `../node_modules/react-native/Libraries/NativeAnimation`)
  - React-RCTAppDelegate (from `../node_modules/react-native/Libraries/AppDelegate`)
  - React-RCTBlob (from `../node_modules/react-native/Libraries/Blob`)
  - React-RCTFabric (from `../node_modules/react-native/React`)
  - React-RCTFBReactNativeSpec (from `../node_modules/react-native/React`)
  - React-RCTImage (from `../node_modules/react-native/Libraries/Image`)
  - React-RCTLinking (from `../node_modules/react-native/Libraries/LinkingIOS`)
  - React-RCTNetwork (from `../node_modules/react-native/Libraries/Network`)
  - React-RCTRuntime (from `../node_modules/react-native/React/Runtime`)
  - React-RCTSettings (from `../node_modules/react-native/Libraries/Settings`)
  - React-RCTText (from `../node_modules/react-native/Libraries/Text`)
  - React-RCTVibration (from `../node_modules/react-native/Libraries/Vibration`)
  - React-rendererconsistency (from `../node_modules/react-native/ReactCommon/react/renderer/consistency`)
  - React-renderercss (from `../node_modules/react-native/ReactCommon/react/renderer/css`)
  - React-rendererdebug (from `../node_modules/react-native/ReactCommon/react/renderer/debug`)
  - React-rncore (from `../node_modules/react-native/ReactCommon`)
  - React-RuntimeApple (from `../node_modules/react-native/ReactCommon/react/runtime/platform/ios`)
  - React-RuntimeCore (from `../node_modules/react-native/ReactCommon/react/runtime`)
  - React-runtimeexecutor (from `../node_modules/react-native/ReactCommon/runtimeexecutor`)
  - React-RuntimeHermes (from `../node_modules/react-native/ReactCommon/react/runtime`)
  - React-runtimescheduler (from `../node_modules/react-native/ReactCommon/react/renderer/runtimescheduler`)
  - React-timing (from `../node_modules/react-native/ReactCommon/react/timing`)
  - React-utils (from `../node_modules/react-native/ReactCommon/react/utils`)
  - ReactAppDependencyProvider (from `build/generated/ios`)
  - ReactCodegen (from `build/generated/ios`)
  - ReactCommon/turbomodule/core (from `../node_modules/react-native/ReactCommon`)
  - "RNFlashList (from `../node_modules/@shopify/flash-list`)"
  - RNGestureHandler (from `../node_modules/react-native-gesture-handler`)
  - RNReanimated (from `../node_modules/react-native-reanimated`)
  - RNScreens (from `../node_modules/react-native-screens`)
  - RNSVG (from `../node_modules/react-native-svg`)
  - Yoga (from `../node_modules/react-native/ReactCommon/yoga`)

SPEC REPOS:
  trunk:
    - libavif
    - libdav1d
    - libwebp
    - SDWebImage
    - SDWebImageAVIFCoder
    - SDWebImageSVGCoder
    - SDWebImageWebPCoder
    - SocketRocket

EXTERNAL SOURCES:
  boost:
    :podspec: "../node_modules/react-native/third-party-podspecs/boost.podspec"
  DoubleConversion:
    :podspec: "../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec"
  EXConstants:
    :path: "../node_modules/expo-constants/ios"
  EXJSONUtils:
    :path: "../node_modules/expo-json-utils/ios"
  EXManifests:
    :path: "../node_modules/expo-manifests/ios"
  Expo:
    :path: "../node_modules/expo"
  expo-dev-client:
    :path: "../node_modules/expo-dev-client/ios"
  expo-dev-launcher:
    :path: "../node_modules/expo-dev-launcher"
  expo-dev-menu:
    :path: "../node_modules/expo-dev-menu"
  expo-dev-menu-interface:
    :path: "../node_modules/expo-dev-menu-interface/ios"
  ExpoAsset:
    :path: "../node_modules/expo-asset/ios"
  ExpoCrypto:
    :path: "../node_modules/expo-crypto/ios"
  ExpoFileSystem:
    :path: "../node_modules/expo-file-system/ios"
  ExpoFont:
    :path: "../node_modules/expo-font/ios"
  ExpoHead:
    :path: "../node_modules/expo-router/ios"
  ExpoImage:
    :path: "../node_modules/expo-image/ios"
  ExpoKeepAwake:
    :path: "../node_modules/expo-keep-awake/ios"
  ExpoLinking:
    :path: "../node_modules/expo-linking/ios"
  ExpoLocalization:
    :path: "../node_modules/expo-localization/ios"
  ExpoModulesCore:
    :path: "../node_modules/expo-modules-core"
  ExpoSplashScreen:
    :path: "../node_modules/expo-splash-screen/ios"
  ExpoSystemUI:
    :path: "../node_modules/expo-system-ui/ios"
  EXUpdatesInterface:
    :path: "../node_modules/expo-updates-interface/ios"
  fast_float:
    :podspec: "../node_modules/react-native/third-party-podspecs/fast_float.podspec"
  FBLazyVector:
    :path: "../node_modules/react-native/Libraries/FBLazyVector"
  fmt:
    :podspec: "../node_modules/react-native/third-party-podspecs/fmt.podspec"
  glog:
    :podspec: "../node_modules/react-native/third-party-podspecs/glog.podspec"
  hermes-engine:
    :podspec: "../node_modules/react-native/sdks/hermes-engine/hermes-engine.podspec"
    :tag: hermes-2025-06-04-RNv0.79.3-7f9a871eefeb2c3852365ee80f0b6733ec12ac3b
  RCT-Folly:
    :podspec: "../node_modules/react-native/third-party-podspecs/RCT-Folly.podspec"
  RCTDeprecation:
    :path: "../node_modules/react-native/ReactApple/Libraries/RCTFoundation/RCTDeprecation"
  RCTRequired:
    :path: "../node_modules/react-native/Libraries/Required"
  RCTTypeSafety:
    :path: "../node_modules/react-native/Libraries/TypeSafety"
  React:
    :path: "../node_modules/react-native/"
  React-callinvoker:
    :path: "../node_modules/react-native/ReactCommon/callinvoker"
  React-Core:
    :path: "../node_modules/react-native/"
  React-CoreModules:
    :path: "../node_modules/react-native/React/CoreModules"
  React-cxxreact:
    :path: "../node_modules/react-native/ReactCommon/cxxreact"
  React-debug:
    :path: "../node_modules/react-native/ReactCommon/react/debug"
  React-defaultsnativemodule:
    :path: "../node_modules/react-native/ReactCommon/react/nativemodule/defaults"
  React-domnativemodule:
    :path: "../node_modules/react-native/ReactCommon/react/nativemodule/dom"
  React-Fabric:
    :path: "../node_modules/react-native/ReactCommon"
  React-FabricComponents:
    :path: "../node_modules/react-native/ReactCommon"
  React-FabricImage:
    :path: "../node_modules/react-native/ReactCommon"
  React-featureflags:
    :path: "../node_modules/react-native/ReactCommon/react/featureflags"
  React-featureflagsnativemodule:
    :path: "../node_modules/react-native/ReactCommon/react/nativemodule/featureflags"
  React-graphics:
    :path: "../node_modules/react-native/ReactCommon/react/renderer/graphics"
  React-hermes:
    :path: "../node_modules/react-native/ReactCommon/hermes"
  React-idlecallbacksnativemodule:
    :path: "../node_modules/react-native/ReactCommon/react/nativemodule/idlecallbacks"
  React-ImageManager:
    :path: "../node_modules/react-native/ReactCommon/react/renderer/imagemanager/platform/ios"
  React-jserrorhandler:
    :path: "../node_modules/react-native/ReactCommon/jserrorhandler"
  React-jsi:
    :path: "../node_modules/react-native/ReactCommon/jsi"
  React-jsiexecutor:
    :path: "../node_modules/react-native/ReactCommon/jsiexecutor"
  React-jsinspector:
    :path: "../node_modules/react-native/ReactCommon/jsinspector-modern"
  React-jsinspectortracing:
    :path: "../node_modules/react-native/ReactCommon/jsinspector-modern/tracing"
  React-jsitooling:
    :path: "../node_modules/react-native/ReactCommon/jsitooling"
  React-jsitracing:
    :path: "../node_modules/react-native/ReactCommon/hermes/executor/"
  React-logger:
    :path: "../node_modules/react-native/ReactCommon/logger"
  React-Mapbuffer:
    :path: "../node_modules/react-native/ReactCommon"
  React-microtasksnativemodule:
    :path: "../node_modules/react-native/ReactCommon/react/nativemodule/microtasks"
  react-native-keyboard-controller:
    :path: "../node_modules/react-native-keyboard-controller"
  react-native-mmkv:
    :path: "../node_modules/react-native-mmkv"
  react-native-restart:
    :path: "../node_modules/react-native-restart"
  react-native-safe-area-context:
    :path: "../node_modules/react-native-safe-area-context"
  React-NativeModulesApple:
    :path: "../node_modules/react-native/ReactCommon/react/nativemodule/core/platform/ios"
  React-oscompat:
    :path: "../node_modules/react-native/ReactCommon/oscompat"
  React-perflogger:
    :path: "../node_modules/react-native/ReactCommon/reactperflogger"
  React-performancetimeline:
    :path: "../node_modules/react-native/ReactCommon/react/performance/timeline"
  React-RCTActionSheet:
    :path: "../node_modules/react-native/Libraries/ActionSheetIOS"
  React-RCTAnimation:
    :path: "../node_modules/react-native/Libraries/NativeAnimation"
  React-RCTAppDelegate:
    :path: "../node_modules/react-native/Libraries/AppDelegate"
  React-RCTBlob:
    :path: "../node_modules/react-native/Libraries/Blob"
  React-RCTFabric:
    :path: "../node_modules/react-native/React"
  React-RCTFBReactNativeSpec:
    :path: "../node_modules/react-native/React"
  React-RCTImage:
    :path: "../node_modules/react-native/Libraries/Image"
  React-RCTLinking:
    :path: "../node_modules/react-native/Libraries/LinkingIOS"
  React-RCTNetwork:
    :path: "../node_modules/react-native/Libraries/Network"
  React-RCTRuntime:
    :path: "../node_modules/react-native/React/Runtime"
  React-RCTSettings:
    :path: "../node_modules/react-native/Libraries/Settings"
  React-RCTText:
    :path: "../node_modules/react-native/Libraries/Text"
  React-RCTVibration:
    :path: "../node_modules/react-native/Libraries/Vibration"
  React-rendererconsistency:
    :path: "../node_modules/react-native/ReactCommon/react/renderer/consistency"
  React-renderercss:
    :path: "../node_modules/react-native/ReactCommon/react/renderer/css"
  React-rendererdebug:
    :path: "../node_modules/react-native/ReactCommon/react/renderer/debug"
  React-rncore:
    :path: "../node_modules/react-native/ReactCommon"
  React-RuntimeApple:
    :path: "../node_modules/react-native/ReactCommon/react/runtime/platform/ios"
  React-RuntimeCore:
    :path: "../node_modules/react-native/ReactCommon/react/runtime"
  React-runtimeexecutor:
    :path: "../node_modules/react-native/ReactCommon/runtimeexecutor"
  React-RuntimeHermes:
    :path: "../node_modules/react-native/ReactCommon/react/runtime"
  React-runtimescheduler:
    :path: "../node_modules/react-native/ReactCommon/react/renderer/runtimescheduler"
  React-timing:
    :path: "../node_modules/react-native/ReactCommon/react/timing"
  React-utils:
    :path: "../node_modules/react-native/ReactCommon/react/utils"
  ReactAppDependencyProvider:
    :path: build/generated/ios
  ReactCodegen:
    :path: build/generated/ios
  ReactCommon:
    :path: "../node_modules/react-native/ReactCommon"
  RNFlashList:
    :path: "../node_modules/@shopify/flash-list"
  RNGestureHandler:
    :path: "../node_modules/react-native-gesture-handler"
  RNReanimated:
    :path: "../node_modules/react-native-reanimated"
  RNScreens:
    :path: "../node_modules/react-native-screens"
  RNSVG:
    :path: "../node_modules/react-native-svg"
  Yoga:
    :path: "../node_modules/react-native/ReactCommon/yoga"

SPEC CHECKSUMS:
  boost: 7e761d76ca2ce687f7cc98e698152abd03a18f90
  DoubleConversion: cb417026b2400c8f53ae97020b2be961b59470cb
  EXConstants: 9f310f44bfedba09087042756802040e464323c0
  EXJSONUtils: 1d3e4590438c3ee593684186007028a14b3686cd
  EXManifests: 951161dd9a63523c4eef0fa2a7476639a7ba230d
  Expo: 4e8bda07d30b024b1732f87843a5349a3ecc1316
  expo-dev-client: cdc6599329032065992014c40413afd46629a9bc
  expo-dev-launcher: 0dc31c4b9834d170745fbed01673279db732dc1d
  expo-dev-menu: e0a52332a0daa07b22ea61f9d8ff0b25bc7e3971
  expo-dev-menu-interface: 609c35ae8b97479cdd4c9e23c8cf6adc44beea0e
  ExpoAsset: 3bc9adb7dbbf27ae82c18ca97eb988a3ae7e73b1
  ExpoCrypto: a9f1d75baeea6ef8b03c1660621585196c382e85
  ExpoFileSystem: c36eb8155eb2381c83dda7dc210e3eec332368b6
  ExpoFont: abbb91a911eb961652c2b0a22eef801860425ed6
  ExpoHead: 1e65b47330de2164c628da2bddf73d57cac123bf
  ExpoImage: 6aa234344f378d78c0d50dc6c4d946546b8742bf
  ExpoKeepAwake: bf0811570c8da182bfb879169437d4de298376e7
  ExpoLinking: b85ff4eafeae6fc638c6cace60007ae521af0ef4
  ExpoLocalization: f6c6aaa3bfff77b666bb958bdfeb5c55df21d990
  ExpoModulesCore: d431ffe83c8673d02cb38425594a5f5480fd3061
  ExpoSplashScreen: 03ef991c0f9575a10269e08083cb4bd10e0989bc
  ExpoSystemUI: 29fb31c0e06eea3f5d88299d5c290101fc69f61f
  EXUpdatesInterface: 7ff005b7af94ee63fa452ea7bb95d7a8ff40277a
  fast_float: 06eeec4fe712a76acc9376682e4808b05ce978b6
  FBLazyVector: a62a7a5760929b6265e27bc01ab7598dde93ebd3
  fmt: a40bb5bd0294ea969aaaba240a927bd33d878cdd
  glog: 5683914934d5b6e4240e497e0f4a3b42d1854183
  hermes-engine: 94ed01537bdeccaab1adbf94b040d115d6fa1a7f
  libavif: 84bbb62fb232c3018d6f1bab79beea87e35de7b7
  libdav1d: 23581a4d8ec811ff171ed5e2e05cd27bad64c39f
  libwebp: 02b23773aedb6ff1fd38cec7a77b81414c6842a8
  RCT-Folly: e78785aa9ba2ed998ea4151e314036f6c49e6d82
  RCTDeprecation: c3e3f5b4ea83e7ff3bc86ce09e2a54b7affd687d
  RCTRequired: ee438439880dffc9425930d1dd1a3c883ee6879c
  RCTTypeSafety: fe728195791e1a0222aa83596a570cf377cd475e
  React: 114ee161feb204412580928b743e6716aebac987
  React-callinvoker: d175cf3640a993f6cd960044a7657543157f0ba9
  React-Core: cd487c9eeb125c902242bcc76ced12e14adf4ea4
  React-CoreModules: 202df4f342e5c2893d5d1899b2856879a90d4bf1
  React-cxxreact: 72be57cebb9976199e6130ec6f9d511c6ae3b310
  React-debug: 5414189118050ebad6c701942c01c63bb499f5a6
  React-defaultsnativemodule: d9683a9187744c14c6ce7eb1a1a3649d33591e43
  React-domnativemodule: ea54d8fd1ee946a97654635f5a4d9245f6588006
  React-Fabric: 3cdce860fd1079c27f8cd8e029f716e6c4b34a4e
  React-FabricComponents: 126c59bb8d69d795492e2a2c97a0c1738a29730b
  React-FabricImage: 6cf335909c59746e7aca2180901367978cc21959
  React-featureflags: 670eb7cdf1495ea7bf392f653c19268291acaad1
  React-featureflagsnativemodule: 16b4eae0bf4d838e0a807c6b0cde2b4ae84534ef
  React-graphics: 0d6b3201d0414e56897f09693df82d601cac0613
  React-hermes: a40e47b18c31efe4baa7942357e2327ddab63918
  React-idlecallbacksnativemodule: 37c6d6053ad5123405b0fbb695c44841273482dd
  React-ImageManager: 1f5cb695a06454329759bfce8548ac0d4fcd069e
  React-jserrorhandler: a8214a9f297af6ee3cb004e2cb5185214cfc4360
  React-jsi: ae02c9d6d68dbed80a9fde8f6d6198035ca154ce
  React-jsiexecutor: 8c266057f23430685a2d928703e77eda80e1742e
  React-jsinspector: 8789c28cbd63ff818d23550556490883caa89cdb
  React-jsinspectortracing: 150180f7ed6fd2252308b5608b62ea698ca087b6
  React-jsitooling: 1fd5c99a3688a5152781be4ecfb88ca9c6cb11d8
  React-jsitracing: c87b3d789f4d5053a2518fb8202c1e1ccd6848a9
  React-logger: 514fac028fee60c84591f951c7c04ba1c5023334
  React-Mapbuffer: fae8da2c01aeb7f26ad739731b6dba61fd02fd97
  React-microtasksnativemodule: 20454ffccff553f0ee73fd20873aa8555a5867fb
  react-native-keyboard-controller: 0617eae6fa22bc7ae111e3747498248e8fe719e0
  react-native-mmkv: e653f0100f078487aad95be73f08a644e2cefdee
  react-native-restart: 0bc732f4461709022a742bb29bcccf6bbc5b4863
  react-native-safe-area-context: 562163222d999b79a51577eda2ea8ad2c32b4d06
  React-NativeModulesApple: 65b2735133d6ce8a3cb5f23215ef85e427b0139c
  React-oscompat: f26aa2a4adc84c34212ab12c07988fe19e9cf16a
  React-perflogger: e15a0d43d1928e1c82f4f0b7fc05f7e9bccfede8
  React-performancetimeline: 064f2767a5d4d71547ea32a3cd8a76a101dfd11f
  React-RCTActionSheet: c89c8b9b7c3ef87cb6a67e20f5eaea271f4b5f67
  React-RCTAnimation: e00af558ccb5fedd380ae32329be4c38e92e9b90
  React-RCTAppDelegate: 10d98d4867643322fa4fcd04548359ac88c74656
  React-RCTBlob: ef645bccf9c33d3b4391794983744da897474dfb
  React-RCTFabric: 06ff9416fc48742bba58ed81a0d0a62bf0f8c7ec
  React-RCTFBReactNativeSpec: e0942c2c7efa10303c63e287c1c1788aeb6d99ef
  React-RCTImage: 0e3669a0bda8995874736d0f8f12c21d522df3c4
  React-RCTLinking: bd81ec3d1b6686a7c58bc8ed8b7a1f05ff2b3f8b
  React-RCTNetwork: 20b8044841a043b80e7027e1bc4049ffa552d1fa
  React-RCTRuntime: 0084733b33619670bea35cb02c96412d9271718e
  React-RCTSettings: fa1d3e6c302e9980b5670315e2ccc998255ce32a
  React-RCTText: 71f01a9261c015b76702e9d7a4153c9ca45f2341
  React-RCTVibration: 0e05fa4647ec1391c409fcc1cbd7cdb4894d80ef
  React-rendererconsistency: 6a79c0a31890942940480f6e761365c4f604394f
  React-renderercss: 18c7ae4971ae6eb6c6c1d4c8f241a856a8e4243f
  React-rendererdebug: d621c08946310b44e58a80b6bf96a6c13e779cff
  React-rncore: 91456f1e8feadf5216b37073968c16c14061f8d7
  React-RuntimeApple: 013c318ce9b3506b4fc7abe67369fdd14fc18bea
  React-RuntimeCore: 66eaaf42eae393a1d592557493a70b80f051f885
  React-runtimeexecutor: 4e7bc0119ff38f80df43d109ef9508497cac1eee
  React-RuntimeHermes: 2878d6e471ac3eb88ecc946d07938c4f9ec4f63e
  React-runtimescheduler: ea0278e84e37a64a0f02b5bcb98fec1d49450fe7
  React-timing: 4e298a80e9a41c31d884df0422c9eb73a240ec0d
  React-utils: fbb79f805d13e0613bc1f799c7bbe5659a0d5ba9
  ReactAppDependencyProvider: e6d0c3c3cc9862a3ccef0c252835cd7ccb96313d
  ReactCodegen: c2f2ec5dd32215237420bedebae0e66867e1e8ea
  ReactCommon: e243aa261effc83c10208f0794bade55ca9ae5b6
  RNFlashList: 375b2ef46b2519483423e48057f1f34f97568249
  RNGestureHandler: 7d0931a61d7ba0259f32db0ba7d0963c3ed15d2b
  RNReanimated: 2313402fe27fecb7237619e9c6fcee3177f08a65
  RNScreens: 482e9707f9826230810c92e765751af53826d509
  RNSVG: 794f269526df9ddc1f79b3d1a202b619df0368e3
  SDWebImage: f29024626962457f3470184232766516dee8dfea
  SDWebImageAVIFCoder: 00310d246aab3232ce77f1d8f0076f8c4b021d90
  SDWebImageSVGCoder: 15a300a97ec1c8ac958f009c02220ac0402e936c
  SDWebImageWebPCoder: e38c0a70396191361d60c092933e22c20d5b1380
  SocketRocket: d4aabe649be1e368d1318fdf28a022d714d65748
  Yoga: 29f74a5b77dca8c37669e1e1e867e5f4e12407df

PODFILE CHECKSUM: d0724e9969d371f3431216d4117662556ddffbbf

COCOAPODS: 1.16.2
````

## File: ios/Podfile.properties.json
````json
{
  "expo.jsEngine": "hermes",
  "EX_DEV_CLIENT_NETWORK_INSPECTOR": "true",
  "newArchEnabled": "true"
}
````

## File: prompts/expo-doctor.md
````markdown
You are an expert in TypeScript, Expo, and React Native.

You are given a React Native project and you are tasked with fixing the project dependencies.

You should follow the following steps:

1. Run expo doctor command using `pnpm run doctor`
2. Analyze the check results and provide an explanation of what we need to do to fix the issues
3. Run commands to fix the issues in case there are any
4. Run expo doctor command again to check if the issues are fixed
5. If the issues is fixed, make sure to commit changes for package.json and pnpm-lock.yaml with the message `git add package.json pnpm-lock.yaml && git commit -m "fix(deps): expo doctor issues"`
````

## File: prompts/image-to-components.md
````markdown
You are an expert in TypeScript, React Native, Expo, and Mobile UI development with Nativewind.

Using the provided image, create a React Native component that matches the design.

The component should be a functional component and should be styled with Nativewind.

Follow the following steps:

1. Layout Analysis:

   - Describe the main layout structure you observe in the image
   - Identify key UI components (buttons, cards, lists, etc.)
   - Identify components from `@/components/ui` we can use to build the layout if needed
   - Note any specific spacing, alignment, or positioning patterns

2. Component Implementation:

   - Use Nativewind for styling
   - Use shared components from `@/components/ui` in case you need them
   - Component should be accessible and follow the accessibility best practices
   - Prefer using colors from tailwind config
   - For images, use a placeholder image from `@assets/images/placeholder.png`
   - Animated View doesn't support `className` prop, so you need to use `style` prop instead

## Example

Here is a example of how to write the component:

```tsx
import * as React from 'react';

import { Text, View, Image, SavaAreaView } from '@/components/ui';

// Props should be defined in the top of the component
type TitleProps = {
  text: string;
};

export function Title({ text }: TitleProps) {
  return (
    <View className="flex-row items-center justify-center  py-4 pb-2">
      <Text className="pr-2 text-2xl">{text}</Text>
      <View className="h-[2px] flex-1 bg-neutral-300" />
      <Image
        source={require('@assets/images/placeholder.png')}
        style={{ width: 24, height: 24 }}
        contentFit="contain"
      />
    </View>
  );
}
```

- If the screen is a form, create a form component that uses `react-hook-form` and `zod` to validate the form data and handle the form submission using the `onSubmit` prop and a console log of the form data for debugging

Here is an example of how to write the form component:

```tsx
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/components/ui';

const schema = z.object({
  name: z.string().optional(),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};

export const LoginForm = ({ onSubmit = () => {} }: LoginFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <View className="flex-1 justify-center p-4">
        <View className="items-center justify-center">
          <Text
            testID="form-title"
            className="pb-6 text-center text-4xl font-bold"
          >
            Sign In
          </Text>

          <Text className="mb-6 max-w-xs text-center text-gray-500">
            Welcome! 👋 This is a demo login screen! Feel free to use any email
            and password to sign in and try it out.
          </Text>
        </View>

        <ControlledInput
          testID="name"
          control={control}
          name="name"
          label="Name"
        />

        <ControlledInput
          testID="email-input"
          control={control}
          name="email"
          label="Email"
        />
        <ControlledInput
          testID="password-input"
          control={control}
          name="password"
          label="Password"
          placeholder="***"
          secureTextEntry={true}
        />
        <Button
          testID="login-button"
          label="Login"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
```
````

## File: prompts/svg-icon.md
````markdown
You are an expert in TypeScript, Expo, nativeWind and React Native

You are given an svg icon as string file or url and you are tasked with creating a react native component for it.

You should follow the following steps:

1. Analyze the svg icon and create a react native component for it
2. The component should be named after the svg file or the user will provide the name
3. The component should be placed in the src/components/ui/icons folder
4. The component should be exported in the src/components/ui/icons/index.ts file

Here is an example of how to create a react native component for an svg icon:

```tsx
import * as React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export function ArrowLeft({
  color = 'white',
  size = 24,
  ...props
}: SvgProps & { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="m12 19-7-7 7-7"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 12H5"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
```
````

## File: prompts/write-unit-tests.md
````markdown
You are an expert in TypeScript, React Native, Expo, Testing with Jest and React Native testing library.

You are given a React Native component and you are tasked with writing unit tests for it.

## Steps

Follow the following steps one by one:

1. Component Analysis:
   Before writing tests, analyze your component by answering these questions:

   - What is the primary purpose of this component?
   - What props does it accept?
   - What user interactions does it handle?
   - What state management does it use?
   - What external dependencies does it have?

2. Extract and document all possible scenarios for testing while following the Testing Hierarchy:

   - Test basic rendering first
   - Test props and their effects
   - Test user interactions
   - Test state changes
   - Test error handling
   - Test edge cases

3. Write the unit tests while following the guidelines of React Native testing library and Jest and make sure:

   - Test file should be named like `component-name.test.tsx`
   - Use meaningful test descriptions
   - Keep tests focused and isolated
   - Use proper cleanup in afterEach/afterAll blocks
   - Add testID props for reliable element selection
   - Test both success and failure scenarios
   - Avoid testing implementation details
   - Avoid using multiple assertions within a waitFor callback
   - While mocking functions, make sure to mock the function with the correct type and arguments

4. Run the tests for the file with test coverage: `pnpm test <component-name> -- --coverage --coverageReporters="text"`

5. Check Tests Results and Coverage:

   - If the tests fail, analyze the issue and fix it.
   - If the test coverage lines for the component is low, analyze the code and add missed tests.

## Example

Here is an example of how a unit tests should look like:

```tsx
import React from 'react';

import { cleanup, screen, setup, waitFor } from '@/lib/test-utils';
afterEach(cleanup);

const onSubmitMock: jest.Mock<LoginFormProps['onSubmit']> = jest.fn();

describe('ComponentName', () => {
  // Setup section
  beforeAll(() => {
    // Global setup
  });

  beforeEach(() => {
    // Reset mocks and state
    jest.clearAllMocks();
  });

  // Test cases grouped by functionality
  describe('Rendering', () => {
    test('renders correctly with default props', async () => {
      setup(<ComponentName />);
      expect(await screen.findByTestId('component-name')).toBeOnTheScreen();
    });
    test('renders correctly with custom props', async () => {});
  });

  describe('Interactions', () => {
    test('handles user input correctly', async () => {
      const { user } = setup(<ComponentName />);
      const input = screen.getByTestId('input-id');
      await user.type(input, 'test');
      expect(input).toHaveValue('test');
    });
    test('triggers appropriate callbacks', async () => {});
  });

  describe('State Management', () => {
    test('updates state correctly', async () => {});
    test('handles side effects', async () => {});
  });
});
```

Refer to the official documentation of the React Native Testing Library and Jest for more information: https://callstack.github.io/react-native-testing-library/
````

## File: scripts/genrate-apk-and-install
````
#!/bin/bash
# this simple script will get the latest build url for the android platform
./android/gradlew assembleRelease -p ./android # build debug apk
find ./android -type f -name "app-release.apk"           # find apk file
adb install "<path_to_apk_file>"
````

## File: scripts/i18next-syntax-validation.js
````javascript
const validate = (message = '') => {
  if (!(message || '').trim()) {
    throw new SyntaxError('Message is Empty.');
  }
  if (typeof message !== 'string') {
    throw new TypeError('Message must be a String.');
  }
  if (
    (message.includes('{') || message.includes('}')) &&
    !/{{ ?(?:- |\w+?)(, ?)?\w+? ?}}/g.test(message)
  ) {
    throw new SyntaxError(
      'Interpolation error. See: https://www.i18next.com/misc/json-format'
    );
  }
  if (message.includes('$t(') && !/\$t\([\w]+:\w+(?:\.\w+)*\)/g.test(message)) {
    throw new SyntaxError(
      'Nesting error. See: https://www.i18next.com/misc/json-format'
    );
  }
};

module.exports = validate;
````

## File: src/api/common/api-provider.tsx
````typescript
import { useReactQueryDevTools } from '@dev-plugins/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';

export const queryClient = new QueryClient();

export function APIProvider({ children }: { children: React.ReactNode }) {
  useReactQueryDevTools(queryClient);
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
````

## File: src/api/common/client.tsx
````typescript
import { Env } from '@env';
import axios from 'axios';
export const client = axios.create({
  baseURL: Env.API_URL,
});
````

## File: src/api/common/index.tsx
````typescript
export * from './api-provider';
export * from './client';
export * from './utils';
````

## File: src/api/common/utils.tsx
````typescript
import type {
  GetNextPageParamFunction,
  GetPreviousPageParamFunction,
} from '@tanstack/react-query';

import type { PaginateQuery } from '../types';

type KeyParams = {
  [key: string]: any;
};
export const DEFAULT_LIMIT = 10;

export function getQueryKey<T extends KeyParams>(key: string, params?: T) {
  return [key, ...(params ? [params] : [])];
}

// for infinite query pages  to flatList data
export function normalizePages<T>(pages?: PaginateQuery<T>[]): T[] {
  return pages
    ? pages.reduce((prev: T[], current) => [...prev, ...current.results], [])
    : [];
}

// a function that accept a url and return params as an object
export function getUrlParameters(
  url: string | null
): { [k: string]: string } | null {
  if (url === null) {
    return null;
  }
  let regex = /[?&]([^=#]+)=([^&#]*)/g,
    params = {},
    match;
  while ((match = regex.exec(url))) {
    if (match[1] !== null) {
      //@ts-ignore
      params[match[1]] = match[2];
    }
  }
  return params;
}

export const getPreviousPageParam: GetNextPageParamFunction<
  unknown,
  PaginateQuery<unknown>
> = (page) => getUrlParameters(page.previous)?.offset ?? null;

export const getNextPageParam: GetPreviousPageParamFunction<
  unknown,
  PaginateQuery<unknown>
> = (page) => getUrlParameters(page.next)?.offset ?? null;
````

## File: src/api/posts/index.ts
````typescript
export * from './types';
export * from './use-add-post';
export * from './use-post';
export * from './use-posts';
````

## File: src/api/posts/types.ts
````typescript
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
````

## File: src/api/posts/use-add-post.ts
````typescript
import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { client } from '../common';
import type { Post } from './types';

type Variables = { title: string; body: string; userId: number };
type Response = Post;

export const useAddPost = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) =>
    client({
      url: 'posts/add',
      method: 'POST',
      data: variables,
    }).then((response) => response.data),
});
````

## File: src/api/posts/use-post.ts
````typescript
import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { Post } from './types';

type Variables = { id: string };
type Response = Post;

export const usePost = createQuery<Response, Variables, AxiosError>({
  queryKey: ['posts'],
  fetcher: (variables) => {
    return client
      .get(`posts/${variables.id}`)
      .then((response) => response.data);
  },
});
````

## File: src/api/posts/use-posts.ts
````typescript
import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { Post } from './types';

type Response = Post[];
type Variables = void; // as react-query-kit is strongly typed, we need to specify the type of the variables as void in case we don't need them

export const usePosts = createQuery<Response, Variables, AxiosError>({
  queryKey: ['posts'],
  fetcher: () => {
    return client.get(`posts`).then((response) => response.data.posts);
  },
});
````

## File: src/api/index.tsx
````typescript
export * from './common';
export * from './posts';
export * from './types';
````

## File: src/api/types.ts
````typescript
export type PaginateQuery<T> = {
  results: T[];
  count: number;
  next: string | null;
  previous: string | null;
};
````

## File: src/app/(app)/_layout.tsx
````typescript
/* eslint-disable react/no-unstable-nested-components */
import { Link, Redirect, SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';

import { Pressable, Text } from '@/components/ui';
import {
  Feed as FeedIcon,
  Settings as SettingsIcon,
  Style as StyleIcon,
} from '@/components/ui/icons';
import { useAuth, useIsFirstTime } from '@/lib';

export default function TabLayout() {
  const status = useAuth.use.status();
  const [isFirstTime] = useIsFirstTime();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  if (isFirstTime) {
    return <Redirect href="/onboarding" />;
  }
  if (status === 'signOut') {
    return <Redirect href="/login" />;
  }
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <FeedIcon color={color} />,
          headerRight: () => <CreateNewPostLink />,
          tabBarButtonTestID: 'feed-tab',
        }}
      />

      <Tabs.Screen
        name="style"
        options={{
          title: 'Style',
          headerShown: false,
          tabBarIcon: ({ color }) => <StyleIcon color={color} />,
          tabBarButtonTestID: 'style-tab',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
          tabBarButtonTestID: 'settings-tab',
        }}
      />
    </Tabs>
  );
}

const CreateNewPostLink = () => {
  return (
    <Link href="/feed/add-post" asChild>
      <Pressable>
        <Text className="px-3 text-primary-300">Create</Text>
      </Pressable>
    </Link>
  );
};
````

## File: src/app/(app)/index.tsx
````typescript
import { FlashList } from '@shopify/flash-list';
import React from 'react';

import type { Post } from '@/api';
import { usePosts } from '@/api';
import { Card } from '@/components/card';
import { EmptyList, FocusAwareStatusBar, Text, View } from '@/components/ui';

export default function Feed() {
  const { data, isPending, isError } = usePosts();
  const renderItem = React.useCallback(
    ({ item }: { item: Post }) => <Card {...item} />,
    []
  );

  if (isError) {
    return (
      <View>
        <Text> Error Loading data </Text>
      </View>
    );
  }
  return (
    <View className="flex-1 ">
      <FocusAwareStatusBar />
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
        estimatedItemSize={300}
      />
    </View>
  );
}
````

## File: src/app/(app)/settings.tsx
````typescript
/* eslint-disable react/react-in-jsx-scope */
import { Env } from '@env';
import { useColorScheme } from 'nativewind';

import { Item } from '@/components/settings/item';
import { ItemsContainer } from '@/components/settings/items-container';
import { LanguageItem } from '@/components/settings/language-item';
import { ThemeItem } from '@/components/settings/theme-item';
import {
  colors,
  FocusAwareStatusBar,
  ScrollView,
  Text,
  View,
} from '@/components/ui';
import { Github, Rate, Share, Support, Website } from '@/components/ui/icons';
import { translate, useAuth } from '@/lib';

export default function Settings() {
  const signOut = useAuth.use.signOut();
  const { colorScheme } = useColorScheme();
  const iconColor =
    colorScheme === 'dark' ? colors.neutral[400] : colors.neutral[500];
  return (
    <>
      <FocusAwareStatusBar />

      <ScrollView>
        <View className="flex-1 px-4 pt-16 ">
          <Text className="text-xl font-bold">
            {translate('settings.title')}
          </Text>
          <ItemsContainer title="settings.generale">
            <LanguageItem />
            <ThemeItem />
          </ItemsContainer>

          <ItemsContainer title="settings.about">
            <Item text="settings.app_name" value={Env.NAME} />
            <Item text="settings.version" value={Env.VERSION} />
          </ItemsContainer>

          <ItemsContainer title="settings.support_us">
            <Item
              text="settings.share"
              icon={<Share color={iconColor} />}
              onPress={() => {}}
            />
            <Item
              text="settings.rate"
              icon={<Rate color={iconColor} />}
              onPress={() => {}}
            />
            <Item
              text="settings.support"
              icon={<Support color={iconColor} />}
              onPress={() => {}}
            />
          </ItemsContainer>

          <ItemsContainer title="settings.links">
            <Item text="settings.privacy" onPress={() => {}} />
            <Item text="settings.terms" onPress={() => {}} />
            <Item
              text="settings.github"
              icon={<Github color={iconColor} />}
              onPress={() => {}}
            />
            <Item
              text="settings.website"
              icon={<Website color={iconColor} />}
              onPress={() => {}}
            />
          </ItemsContainer>

          <View className="my-8">
            <ItemsContainer>
              <Item text="settings.logout" onPress={signOut} />
            </ItemsContainer>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
````

## File: src/app/(app)/style.tsx
````typescript
import * as React from 'react';

import { Buttons } from '@/components/buttons';
import { Colors } from '@/components/colors';
import { Inputs } from '@/components/inputs';
import { Typography } from '@/components/typography';
import { FocusAwareStatusBar, SafeAreaView, ScrollView } from '@/components/ui';

export default function Style() {
  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView className="px-4">
        <SafeAreaView className="flex-1">
          <Typography />
          <Colors />
          <Buttons />
          <Inputs />
        </SafeAreaView>
      </ScrollView>
    </>
  );
}
````

## File: src/app/feed/[id].tsx
````typescript
import { Stack, useLocalSearchParams } from 'expo-router';
import * as React from 'react';

import { usePost } from '@/api';
import {
  ActivityIndicator,
  FocusAwareStatusBar,
  Text,
  View,
} from '@/components/ui';

export default function Post() {
  const local = useLocalSearchParams<{ id: string }>();

  const { data, isPending, isError } = usePost({
    //@ts-ignore
    variables: { id: local.id },
  });

  if (isPending) {
    return (
      <View className="flex-1 justify-center  p-3">
        <Stack.Screen options={{ title: 'Post', headerBackTitle: 'Feed' }} />
        <FocusAwareStatusBar />
        <ActivityIndicator />
      </View>
    );
  }
  if (isError) {
    return (
      <View className="flex-1 justify-center p-3">
        <Stack.Screen options={{ title: 'Post', headerBackTitle: 'Feed' }} />
        <FocusAwareStatusBar />
        <Text className="text-center">Error loading post</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 p-3 ">
      <Stack.Screen options={{ title: 'Post', headerBackTitle: 'Feed' }} />
      <FocusAwareStatusBar />
      <Text className="text-xl">{data.title}</Text>
      <Text>{data.body} </Text>
    </View>
  );
}
````

## File: src/app/feed/add-post.tsx
````typescript
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from 'expo-router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';
import { z } from 'zod';

import { useAddPost } from '@/api';
import {
  Button,
  ControlledInput,
  showErrorMessage,
  View,
} from '@/components/ui';

const schema = z.object({
  title: z.string().min(10),
  body: z.string().min(120),
});

type FormType = z.infer<typeof schema>;

export default function AddPost() {
  const { control, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const { mutate: addPost, isPending } = useAddPost();

  const onSubmit = (data: FormType) => {
    console.log(data);
    addPost(
      { ...data, userId: 1 },
      {
        onSuccess: () => {
          showMessage({
            message: 'Post added successfully',
            type: 'success',
          });
          // here you can navigate to the post list and refresh the list data
          //queryClient.invalidateQueries(usePosts.getKey());
        },
        onError: () => {
          showErrorMessage('Error adding post');
        },
      }
    );
  };
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Add Post',
          headerBackTitle: 'Feed',
        }}
      />
      <View className="flex-1 p-4 ">
        <ControlledInput
          name="title"
          label="Title"
          control={control}
          testID="title"
        />
        <ControlledInput
          name="body"
          label="Content"
          control={control}
          multiline
          testID="body-input"
        />
        <Button
          label="Add Post"
          loading={isPending}
          onPress={handleSubmit(onSubmit)}
          testID="add-post-button"
        />
      </View>
    </>
  );
}
````

## File: src/app/_layout.tsx
````typescript
// Import  global CSS file
import '../../global.css';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import { APIProvider } from '@/api';
import { hydrateAuth, loadSelectedTheme } from '@/lib';
import { useThemeConfig } from '@/lib/use-theme-config';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(app)',
};

hydrateAuth();
loadSelectedTheme();
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 500,
  fade: true,
});

export default function RootLayout() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  const theme = useThemeConfig();
  return (
    <GestureHandlerRootView
      style={styles.container}
      className={theme.dark ? `dark` : undefined}
    >
      <KeyboardProvider>
        <ThemeProvider value={theme}>
          <APIProvider>
            <BottomSheetModalProvider>
              {children}
              <FlashMessage position="top" />
            </BottomSheetModalProvider>
          </APIProvider>
        </ThemeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
````

## File: src/app/[...messing].tsx
````typescript
import { Link, Stack } from 'expo-router';

import { Text, View } from '@/components/ui';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-4">
        <Text className="mb-4 text-2xl font-bold">
          This screen doesn&apos;t exist.
        </Text>

        <Link href="/" className="mt-4">
          <Text className="text-blue-500 underline">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
````

## File: src/app/+html.tsx
````typescript
import { ScrollViewStyleReset } from 'expo-router/html';

// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/*
          This viewport disables scaling which makes the mobile website act more like a native app.
          However this does reduce built-in accessibility. If you want to enable scaling, use this instead:
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        */}
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1.00001,viewport-fit=cover"
        />
        {/*
          Disable body scrolling on web. This makes ScrollView components work closer to how they do on native.
          However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
        */}
        <ScrollViewStyleReset />

        {/* Using raw CSS styles as an escape-hatch to ensure the background color never flickers in dark-mode. */}
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
        {/* Add any additional <head> elements that you want globally available on web... */}
      </head>
      <body>{children}</body>
    </html>
  );
}

const responsiveBackground = `
body {
  background-color: #fff;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
  }
}`;
````

## File: src/app/login.tsx
````typescript
import { useRouter } from 'expo-router';
import React from 'react';

import type { LoginFormProps } from '@/components/login-form';
import { LoginForm } from '@/components/login-form';
import { FocusAwareStatusBar } from '@/components/ui';
import { useAuth } from '@/lib';

export default function Login() {
  const router = useRouter();
  const signIn = useAuth.use.signIn();

  const onSubmit: LoginFormProps['onSubmit'] = (data) => {
    console.log(data);
    signIn({ access: 'access-token', refresh: 'refresh-token' });
    router.push('/');
  };
  return (
    <>
      <FocusAwareStatusBar />
      <LoginForm onSubmit={onSubmit} />
    </>
  );
}
````

## File: src/app/onboarding.tsx
````typescript
import { useRouter } from 'expo-router';
import React from 'react';

import { Cover } from '@/components/cover';
import {
  Button,
  FocusAwareStatusBar,
  SafeAreaView,
  Text,
  View,
} from '@/components/ui';
import { useIsFirstTime } from '@/lib/hooks';
export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();
  return (
    <View className="flex h-full items-center  justify-center">
      <FocusAwareStatusBar />
      <View className="w-full flex-1">
        <Cover />
      </View>
      <View className="justify-end ">
        <Text className="my-3 text-center text-5xl font-bold">
          Obytes Starter
        </Text>
        <Text className="mb-2 text-center text-lg text-gray-600">
          The right way to build your mobile app
        </Text>

        <Text className="my-1 pt-6 text-left text-lg">
          🚀 Production-ready{' '}
        </Text>
        <Text className="my-1 text-left text-lg">
          🥷 Developer experience + Productivity
        </Text>
        <Text className="my-1 text-left text-lg">
          🧩 Minimal code and dependencies
        </Text>
        <Text className="my-1 text-left text-lg">
          💪 well maintained third-party libraries
        </Text>
      </View>
      <SafeAreaView className="mt-6">
        <Button
          label="Let's Get Started "
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/login');
          }}
        />
      </SafeAreaView>
    </View>
  );
}
````

## File: src/components/settings/item.tsx
````typescript
import * as React from 'react';

import { Pressable, Text, View } from '@/components/ui';
import { ArrowRight } from '@/components/ui/icons';
import type { TxKeyPath } from '@/lib';

type ItemProps = {
  text: TxKeyPath;
  value?: string;
  onPress?: () => void;
  icon?: React.ReactNode;
};

export const Item = ({ text, value, icon, onPress }: ItemProps) => {
  const isPressable = onPress !== undefined;
  return (
    <Pressable
      onPress={onPress}
      pointerEvents={isPressable ? 'auto' : 'none'}
      className="flex-1 flex-row items-center justify-between px-4 py-2"
    >
      <View className="flex-row items-center">
        {icon && <View className="pr-2">{icon}</View>}
        <Text tx={text} />
      </View>
      <View className="flex-row items-center">
        <Text className="text-neutral-600 dark:text-white">{value}</Text>
        {isPressable && (
          <View className="pl-2">
            <ArrowRight />
          </View>
        )}
      </View>
    </Pressable>
  );
};
````

## File: src/components/settings/items-container.tsx
````typescript
import React from 'react';

import { Text, View } from '@/components/ui';
import type { TxKeyPath } from '@/lib';

type Props = {
  children: React.ReactNode;
  title?: TxKeyPath;
};

export const ItemsContainer = ({ children, title }: Props) => {
  return (
    <>
      {title && <Text className="pb-2 pt-4 text-lg" tx={title} />}
      {
        <View className=" rounded-md border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
          {children}
        </View>
      }
    </>
  );
};
````

## File: src/components/settings/language-item.tsx
````typescript
import * as React from 'react';

import type { OptionType } from '@/components/ui';
import { Options, useModal } from '@/components/ui';
import { useSelectedLanguage } from '@/lib';
import { translate } from '@/lib';
import type { Language } from '@/lib/i18n/resources';

import { Item } from './item';

export const LanguageItem = () => {
  const { language, setLanguage } = useSelectedLanguage();
  const modal = useModal();
  const onSelect = React.useCallback(
    (option: OptionType) => {
      setLanguage(option.value as Language);
      modal.dismiss();
    },
    [setLanguage, modal]
  );

  const langs = React.useMemo(
    () => [
      { label: translate('settings.english'), value: 'en' },
      { label: translate('settings.arabic'), value: 'ar' },
    ],
    []
  );

  const selectedLanguage = React.useMemo(
    () => langs.find((lang) => lang.value === language),
    [language, langs]
  );

  return (
    <>
      <Item
        text="settings.language"
        value={selectedLanguage?.label}
        onPress={modal.present}
      />
      <Options
        ref={modal.ref}
        options={langs}
        onSelect={onSelect}
        value={selectedLanguage?.value}
      />
    </>
  );
};
````

## File: src/components/settings/theme-item.tsx
````typescript
import React from 'react';

import type { OptionType } from '@/components/ui';
import { Options, useModal } from '@/components/ui';
import type { ColorSchemeType } from '@/lib';
import { translate, useSelectedTheme } from '@/lib';

import { Item } from './item';

export const ThemeItem = () => {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
  const modal = useModal();

  const onSelect = React.useCallback(
    (option: OptionType) => {
      setSelectedTheme(option.value as ColorSchemeType);
      modal.dismiss();
    },
    [setSelectedTheme, modal]
  );

  const themes = React.useMemo(
    () => [
      { label: `${translate('settings.theme.dark')} 🌙`, value: 'dark' },
      { label: `${translate('settings.theme.light')} 🌞`, value: 'light' },
      { label: `${translate('settings.theme.system')} ⚙️`, value: 'system' },
    ],
    []
  );

  const theme = React.useMemo(
    () => themes.find((t) => t.value === selectedTheme),
    [selectedTheme, themes]
  );

  return (
    <>
      <Item
        text="settings.theme.title"
        value={theme?.label}
        onPress={modal.present}
      />
      <Options
        ref={modal.ref}
        options={themes}
        onSelect={onSelect}
        value={theme?.value}
      />
    </>
  );
};
````

## File: src/components/ui/icons/arrow-right.tsx
````typescript
import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';

export const ArrowRight = ({ color = '#CCC', style, ...props }: SvgProps) => (
  <Svg
    width={7}
    height={14}
    viewBox="0 0 7 14"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Path
      d="M.872 13.101a.874.874 0 0 0 .621-.253l5.252-5.253a.875.875 0 0 0 0-1.234L1.493 1.11A.875.875 0 0 0 .26 2.343l4.63 4.63-4.63 4.632A.876.876 0 0 0 .872 13.1Z"
      fill={color}
    />
  </Svg>
);
````

## File: src/components/ui/icons/caret-down.tsx
````typescript
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const CaretDown = ({ ...props }: SvgProps) => (
  <Svg
    width={12}
    height={13}
    fill="none"
    {...props}
    className="stroke-black dark:stroke-white"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 4.744 6 8.494l-3.75-3.75"
    />
  </Svg>
);
````

## File: src/components/ui/icons/feed.tsx
````typescript
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Feed = ({ color = '#000', ...props }: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="M16.191 2C19.28 2 21 3.78 21 6.83v10.33c0 3.1-1.72 4.84-4.809 4.84H7.81C4.77 22 3 20.26 3 17.16V6.83C3 3.78 4.77 2 7.81 2h8.381ZM8.08 15.74a.795.795 0 0 0-.75 1.21c.16.25.45.4.75.36h7.84c.399-.04.7-.381.7-.78 0-.41-.301-.75-.7-.79H8.08Zm7.84-4.561H8.08a.781.781 0 0 0 0 1.561h7.84a.781.781 0 0 0 0-1.561ZM11.069 6.65H8.08v.01a.78.78 0 0 0 0 1.56h2.989c.431 0 .781-.35.781-.791a.781.781 0 0 0-.781-.779Z"
      fill={color}
    />
  </Svg>
);
````

## File: src/components/ui/icons/github.tsx
````typescript
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import colors from '../colors';

export const Github = ({ color = colors.neutral[500], ...props }: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <G
      clipPath="url(#github)"
      stroke={color}
      strokeWidth={1.219}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M7.876 22.5a2.242 2.242 0 0 0 2.25-2.25v-4.5M16.125 22.5a2.242 2.242 0 0 1-2.25-2.25v-4.5M14.25 15.75h1.5A2.24 2.24 0 0 1 18 18v.75A2.24 2.24 0 0 0 20.25 21M9.752 15.75h-1.5A2.24 2.24 0 0 0 6.002 18v.75A2.24 2.24 0 0 1 3.752 21" />
      <Path d="M10.485 6a4.875 4.875 0 0 0-4.107-2.25 4.875 4.875 0 0 0-.328 4.19 4.622 4.622 0 0 0-.797 2.56v.75a4.5 4.5 0 0 0 4.5 4.5h4.5a4.5 4.5 0 0 0 4.5-4.5v-.75a4.622 4.622 0 0 0-.797-2.56 4.874 4.874 0 0 0-.328-4.19A4.875 4.875 0 0 0 13.522 6h-3.037Z" />
    </G>
    <Defs>
      <ClipPath id="github">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
````

## File: src/components/ui/icons/home.tsx
````typescript
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function Home({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12.848 2.751a1.2 1.2 0 0 0-1.697 0l-8.4 8.4a1.2 1.2 0 1 0 1.698 1.697l.351-.351V20.4A1.2 1.2 0 0 0 6 21.6h2.4a1.2 1.2 0 0 0 1.2-1.2V18a1.2 1.2 0 0 1 1.2-1.2h2.4a1.2 1.2 0 0 1 1.2 1.2v2.4a1.2 1.2 0 0 0 1.2 1.2H18a1.2 1.2 0 0 0 1.2-1.2v-7.903l.352.351a1.2 1.2 0 1 0 1.697-1.697l-8.4-8.4Z"
        fill={color}
      />
    </Svg>
  );
}
````

## File: src/components/ui/icons/index.tsx
````typescript
export * from './arrow-right';
export * from './caret-down';
export * from './feed';
export * from './github';
export * from './home';
export * from './language';
export * from './rate';
export * from './settings';
export * from './share';
export * from './style';
export * from './support';
export * from './website';
````

## File: src/components/ui/icons/language.tsx
````typescript
import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { G, Path, Text, TSpan } from 'react-native-svg';

export const Language = ({ ...props }: SvgProps) => (
  <Svg width={100} height={71} {...props}>
    <G fill="none" fillRule="evenodd">
      <Path
        d="M55.684 0H3.319A3.319 3.319 0 0 0 0 3.324V39.4a3.319 3.319 0 0 0 3.32 3.324h10.207V57l14.048-14.276h28.109A3.32 3.32 0 0 0 59 39.4V3.324A3.32 3.32 0 0 0 55.684 0"
        fill="#FC6276"
      />
      <Path
        d="M32.103 23.62l-3.242-11.567-3.394 11.567h6.636zM25.856 6.23a26.079 26.079 0 0 1 1.562-.172A19.683 19.683 0 0 1 29.058 6c.521 0 1.026.016 1.52.058.494.04 1.041.094 1.64.172L41 33.769a21.499 21.499 0 0 1-3.122.231c-.992 0-1.95-.075-2.887-.231l-1.56-5.512h-9.29l-1.6 5.512c-.936.156-1.837.231-2.693.231-.962 0-1.914-.075-2.848-.231l8.856-27.54z"
        fill="#FFF"
      />
      <Path
        d="M96.682 14H44.316A3.32 3.32 0 0 0 41 17.318v36.08a3.321 3.321 0 0 0 3.316 3.323h28.11L86.473 71V56.721h10.208A3.32 3.32 0 0 0 100 53.398v-36.08A3.317 3.317 0 0 0 96.682 14"
        fill="#192332"
      />
      <Text
        // fontFamily="HelveticaNeueLTArabic-Bold, Helvetica Neue LT Arabic"
        fontSize={30}
        fontWeight="bold"
        fill="#FFF"
        transform="translate(0 -4)"
      >
        <TSpan x={59} y={42}>
          ي
        </TSpan>
      </Text>
    </G>
  </Svg>
);
````

## File: src/components/ui/icons/rate.tsx
````typescript
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import colors from '../colors';

export const Rate = ({ color = colors.neutral[500], ...props }: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="m12.412 17.878 4.725 3c.61.384 1.36-.187 1.181-.89l-1.369-5.382a.816.816 0 0 1 .272-.825l4.238-3.534c.553-.46.271-1.388-.45-1.434l-5.532-.357a.778.778 0 0 1-.684-.506L12.73 2.756a.778.778 0 0 0-1.462 0L9.206 7.95a.778.778 0 0 1-.685.506l-5.531.357c-.722.046-1.003.975-.45 1.434l4.237 3.534a.815.815 0 0 1 .272.825l-1.265 4.988c-.216.843.684 1.528 1.406 1.069l4.397-2.785a.769.769 0 0 1 .825 0v0Z"
        stroke={color}
        strokeWidth={1.219}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
````

## File: src/components/ui/icons/settings.tsx
````typescript
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Settings = ({ color = '#000', ...props }: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M19.405 12.975c.05-.292.05-.634.05-.975 0-.341-.05-.634-.05-.975l2.093-1.609c.2-.146.25-.39.1-.633l-1.994-3.364c-.1-.195-.399-.293-.599-.195l-2.493.975a7.258 7.258 0 0 0-1.695-.975l-.349-2.584a.534.534 0 0 0-.498-.39H9.98a.534.534 0 0 0-.498.39l-.399 2.584c-.598.243-1.147.585-1.695.975l-2.494-.975c-.249-.098-.498 0-.598.195L2.302 8.783c-.1.194-.05.487.1.633l2.143 1.609c0 .341-.05.634-.05.975 0 .341.05.634.05.975l-2.093 1.609c-.2.146-.25.39-.1.633l1.994 3.364c.1.195.4.293.599.195l2.493-.975c.498.39 1.096.732 1.695.975l.399 2.584c.05.244.249.39.498.39h3.99c.249 0 .448-.195.498-.39l.4-2.584c.597-.243 1.146-.585 1.694-.975l2.493.975c.25.098.499 0 .599-.195l1.994-3.364a.588.588 0 0 0-.1-.633l-2.193-1.609Zm-7.43 2.438c-1.945 0-3.49-1.512-3.49-3.413 0-1.902 1.545-3.413 3.49-3.413 1.945 0 3.49 1.511 3.49 3.413 0 1.901-1.545 3.412-3.49 3.412Z"
        fill={color}
      />
    </Svg>
  );
};
````

## File: src/components/ui/icons/share.tsx
````typescript
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '../colors';

export const Share = ({ color = colors.neutral[500], ...props }: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 23.5H7A2.5 2.5 0 0 1 4.5 21v-9A2.5 2.5 0 0 1 7 9.5h2a.5.5 0 1 1 0 1H7A1.5 1.5 0 0 0 5.5 12v9A1.5 1.5 0 0 0 7 22.5h10a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-2a.5.5 0 0 1 0-1h2a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5ZM15.667 5.358 12.5 2.19V15a.5.5 0 0 1-1 0V2.19L8.333 5.357a.489.489 0 0 1-.69-.69L11.595.715c.016-.024.026-.051.047-.073a.487.487 0 0 1 .353-.141L12 .5l.005.001a.486.486 0 0 1 .352.141c.021.021.03.047.046.07l3.955 3.955a.488.488 0 0 1-.691.69Z"
      fill={color}
    />
  </Svg>
);
````

## File: src/components/ui/icons/style.tsx
````typescript
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

export const Style = ({ color, ...props }: SvgProps) => (
  <Svg width={25} height={24} fill="none" viewBox="0 0 25 24" {...props}>
    <G
      clipPath="url(#style)"
      stroke={color}
      strokeWidth={2.438}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M6.94 10.125a3.188 3.188 0 1 0 0-6.375 3.188 3.188 0 0 0 0 6.375ZM17.064 10.125a3.188 3.188 0 1 0 0-6.375 3.188 3.188 0 0 0 0 6.375ZM6.94 20.25a3.188 3.188 0 1 0 0-6.375 3.188 3.188 0 0 0 0 6.375ZM17.064 20.25a3.188 3.188 0 1 0 0-6.375 3.188 3.188 0 0 0 0 6.375Z" />
    </G>
    <Defs>
      <ClipPath id="style">
        <Path fill="#fff" transform="translate(.002)" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
````

## File: src/components/ui/icons/support.tsx
````typescript
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import colors from '../colors';

export const Support = ({
  color = colors.neutral[500],
  ...props
}: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="m12.533 19.866 7.594-7.594c1.865-1.875 2.137-4.94.375-6.9a4.875 4.875 0 0 0-7.078-.197L11.999 6.61 10.77 5.372c-1.874-1.866-4.94-2.137-6.9-.375a4.875 4.875 0 0 0-.196 7.078l7.79 7.79a.76.76 0 0 0 1.069 0v0Z"
        stroke={color}
        strokeWidth={1.219}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
````

## File: src/components/ui/icons/website.tsx
````typescript
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import colors from '../colors';

export const Website = ({
  color = colors.neutral[500],
  ...props
}: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <G
      clipPath="url(#a)"
      stroke={color}
      strokeWidth={1.219}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18" />
      <Path d="M12 20.756c2.07 0 3.75-3.92 3.75-8.756S14.07 3.244 12 3.244c-2.071 0-3.75 3.92-3.75 8.756s1.679 8.756 3.75 8.756Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
````

## File: src/components/ui/button.test.tsx
````typescript
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Text } from 'react-native';

import { cleanup, render, screen, setup } from '@/lib/test-utils';

import { Button } from './button';

afterEach(cleanup);

describe('Button component ', () => {
  it('should render correctly ', () => {
    render(<Button testID="button" />);
    expect(screen.getByTestId('button')).toBeOnTheScreen();
  });
  it('should render correctly if we add explicit child ', () => {
    render(
      <Button testID="button">
        <Text> Custom child </Text>
      </Button>
    );
    expect(screen.getByText('Custom child')).toBeOnTheScreen();
  });
  it('should render the label correctly', () => {
    render(<Button testID="button" label="Submit" />);
    expect(screen.getByTestId('button')).toBeOnTheScreen();
    expect(screen.getByText('Submit')).toBeOnTheScreen();
  });
  it('should render the loading indicator correctly', () => {
    render(<Button testID="button" loading={true} />);
    expect(screen.getByTestId('button')).toBeOnTheScreen();
    expect(screen.getByTestId('button-activity-indicator')).toBeOnTheScreen();
  });
  it('should call onClick handler when clicked', async () => {
    const onClick = jest.fn();
    const { user } = setup(
      <Button testID="button" label="Click the button" onPress={onClick} />
    );
    expect(screen.getByTestId('button')).toBeOnTheScreen();
    await user.press(screen.getByTestId('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('should be disabled when loading', async () => {
    const onClick = jest.fn();
    const { user } = setup(
      <Button
        testID="button"
        loading={true}
        label="Click the button"
        onPress={onClick}
      />
    );
    expect(screen.getByTestId('button')).toBeOnTheScreen();
    expect(screen.getByTestId('button-activity-indicator')).toBeOnTheScreen();
    expect(screen.getByTestId('button')).toBeDisabled();
    await user.press(screen.getByTestId('button'));
    expect(onClick).toHaveBeenCalledTimes(0);
  });
  it('should be disabled when disabled prop is true', () => {
    render(<Button testID="button" disabled={true} />);
    expect(screen.getByTestId('button')).toBeDisabled();
  });
  it("shouldn't call onClick when disabled", async () => {
    const onClick = jest.fn();
    const { user } = setup(
      <Button
        testID="button"
        label="Click the button"
        disabled={true}
        onPress={onClick}
        variant="secondary"
      />
    );
    expect(screen.getByTestId('button')).toBeOnTheScreen();
    await user.press(screen.getByTestId('button'));

    expect(screen.getByTestId('button')).toBeDisabled();

    expect(onClick).toHaveBeenCalledTimes(0);
  });
  it('should apply correct styles based on size prop', () => {
    render(<Button testID="button" size="lg" />);
    const button = screen.getByTestId('button');
    // TODO: should be fixed to use haveStyle instead of comparing the class name
    const expectedStyle =
      'font-inter font-semibold text-white dark:text-black text-xl';
    const receivedStyle =
      button.props.children[0].props.children.props.className;
    expect(receivedStyle).toContain(expectedStyle);
  });
  it('should apply correct styles for label when variant is secondary', () => {
    render(<Button testID="button" variant="secondary" label="Submit" />);
    const button = screen.getByTestId('button');

    const expectedStyle =
      'font-inter font-semibold text-secondary-600 text-base';
    const receivedStyle =
      button.props.children[0].props.children.props.className;
    expect(receivedStyle).toContain(expectedStyle);
  });
  it('should apply correct styles for label when is disabled', () => {
    render(<Button testID="button" label="Submit" disabled />);
    const button = screen.getByTestId('button');

    const expectedStyle =
      'font-inter font-semibold text-base text-neutral-600 dark:text-neutral-600';
    const receivedStyle =
      button.props.children[0].props.children.props.className;
    expect(receivedStyle).toContain(expectedStyle);
  });
});
````

## File: src/components/ui/button.tsx
````typescript
import React from 'react';
import type { PressableProps, View } from 'react-native';
import { ActivityIndicator, Pressable, Text } from 'react-native';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

const button = tv({
  slots: {
    container: 'my-2 flex flex-row items-center justify-center rounded-md px-4',
    label: 'font-inter text-base font-semibold',
    indicator: 'h-6 text-white',
  },

  variants: {
    variant: {
      default: {
        container: 'bg-black dark:bg-white',
        label: 'text-white dark:text-black',
        indicator: 'text-white dark:text-black',
      },
      secondary: {
        container: 'bg-primary-600',
        label: 'text-secondary-600',
        indicator: 'text-white',
      },
      outline: {
        container: 'border border-neutral-400',
        label: 'text-black dark:text-neutral-100',
        indicator: 'text-black dark:text-neutral-100',
      },
      destructive: {
        container: 'bg-red-600',
        label: 'text-white',
        indicator: 'text-white',
      },
      ghost: {
        container: 'bg-transparent',
        label: 'text-black underline dark:text-white',
        indicator: 'text-black dark:text-white',
      },
      link: {
        container: 'bg-transparent',
        label: 'text-black',
        indicator: 'text-black',
      },
    },
    size: {
      default: {
        container: 'h-10 px-4',
        label: 'text-base',
      },
      lg: {
        container: 'h-12 px-8',
        label: 'text-xl',
      },
      sm: {
        container: 'h-8 px-3',
        label: 'text-sm',
        indicator: 'h-2',
      },
      icon: { container: 'size-9' },
    },
    disabled: {
      true: {
        container: 'bg-neutral-300 dark:bg-neutral-300',
        label: 'text-neutral-600 dark:text-neutral-600',
        indicator: 'text-neutral-400 dark:text-neutral-400',
      },
    },
    fullWidth: {
      true: {
        container: '',
      },
      false: {
        container: 'self-center',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    disabled: false,
    fullWidth: true,
    size: 'default',
  },
});

type ButtonVariants = VariantProps<typeof button>;
interface Props extends ButtonVariants, Omit<PressableProps, 'disabled'> {
  label?: string;
  loading?: boolean;
  className?: string;
  textClassName?: string;
}

export const Button = React.forwardRef<View, Props>(
  (
    {
      label: text,
      loading = false,
      variant = 'default',
      disabled = false,
      size = 'default',
      className = '',
      testID,
      textClassName = '',
      ...props
    },
    ref
  ) => {
    const styles = React.useMemo(
      () => button({ variant, disabled, size }),
      [variant, disabled, size]
    );

    return (
      <Pressable
        disabled={disabled || loading}
        className={styles.container({ className })}
        {...props}
        ref={ref}
        testID={testID}
      >
        {props.children ? (
          props.children
        ) : (
          <>
            {loading ? (
              <ActivityIndicator
                size="small"
                className={styles.indicator()}
                testID={testID ? `${testID}-activity-indicator` : undefined}
              />
            ) : (
              <Text
                testID={testID ? `${testID}-label` : undefined}
                className={styles.label({ className: textClassName })}
              >
                {text}
              </Text>
            )}
          </>
        )}
      </Pressable>
    );
  }
);
````

## File: src/components/ui/checkbox.test.tsx
````typescript
/* eslint-disable max-lines-per-function */
import 'react-native';

import React from 'react';

import { cleanup, screen, setup } from '@/lib/test-utils';

import { Checkbox, Radio, Switch } from './checkbox';

afterEach(cleanup);

describe('Checkbox, Radio & Switch components ', () => {
  it('<Checkbox /> renders correctly and call on change on Press', async () => {
    const mockOnChange = jest.fn((checked) => checked);
    const { user } = setup(
      <Checkbox
        testID="checkbox"
        onChange={mockOnChange}
        accessibilityLabel="agree"
        accessibilityHint="toggle Agree"
      />
    );
    expect(screen.getByTestId('checkbox')).toBeOnTheScreen();
    expect(screen.queryByTestId('checkbox-label')).not.toBeOnTheScreen();
    expect(screen.getByTestId('checkbox')).toBeEnabled();

    expect(screen.getByTestId('checkbox')).not.toBeChecked();
    expect(screen.getByTestId('checkbox').props.accessibilityRole).toBe(
      'checkbox'
    );
    expect(screen.getByTestId('checkbox').props.accessibilityLabel).toBe(
      'agree'
    );

    await user.press(screen.getByTestId('checkbox'));
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it("<CheckBox/> shouldn't change value while disabled", async () => {
    const mockOnChange = jest.fn((checked) => checked);
    const { user } = setup(
      <Checkbox
        disabled={true}
        testID="checkbox"
        onChange={mockOnChange}
        accessibilityLabel="agree"
        accessibilityHint="toggle Agree"
      />
    );
    expect(screen.getByTestId('checkbox')).toBeOnTheScreen();
    expect(screen.getByTestId('checkbox')).toBeDisabled();
    await user.press(screen.getByTestId('checkbox'));
    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });
  it('<CheckBox/> Should render the correct label', async () => {
    const mockOnChange = jest.fn((checked) => checked);
    const { user } = setup(
      <Checkbox
        disabled={true}
        testID="checkbox"
        onChange={mockOnChange}
        accessibilityLabel="agree"
        accessibilityHint="toggle Agree"
        label="I agree to terms and conditions"
      />
    );
    expect(screen.getByTestId('checkbox')).toBeOnTheScreen();
    expect(screen.getByTestId('checkbox-label')).toBeOnTheScreen();
    expect(
      screen.getByTestId('checkbox').props.accessibilityState.checked
    ).toBe(false);
    expect(screen.getByTestId('checkbox').props.accessibilityRole).toBe(
      'checkbox'
    );

    expect(screen.getByTestId('checkbox').props.accessibilityLabel).toBe(
      'agree'
    );
    expect(screen.getByTestId('checkbox-label')).toHaveTextContent(
      'I agree to terms and conditions'
    );
    await user.press(screen.getByTestId('checkbox'));
    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });

  it('<Radio /> renders correctly and call on change on Press', async () => {
    const mockOnChange = jest.fn((checked) => checked);
    const { user } = setup(
      <Radio
        testID="radio"
        onChange={mockOnChange}
        accessibilityLabel="agree"
        accessibilityHint="toggle Agree"
      />
    );
    expect(screen.getByTestId('radio')).toBeOnTheScreen();
    expect(screen.queryByTestId('radio-label')).not.toBeOnTheScreen();
    expect(screen.getByTestId('radio')).toBeEnabled();
    expect(screen.getByTestId('radio')).not.toBeChecked();
    expect(screen.getByTestId('radio').props.accessibilityRole).toBe('radio');
    expect(screen.getByTestId('radio').props.accessibilityLabel).toBe('agree');
    await user.press(screen.getByTestId('radio'));
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('<Radio /> should render the correct label', async () => {
    const mockOnChange = jest.fn((checked) => checked);
    const { user } = setup(
      <Radio
        testID="radio"
        onChange={mockOnChange}
        accessibilityLabel="agree"
        label="I agree to terms and conditions"
        accessibilityHint="toggle Agree"
      />
    );
    expect(screen.getByTestId('radio')).toBeOnTheScreen();
    expect(screen.getByTestId('radio-label')).toBeOnTheScreen();
    expect(screen.getByTestId('radio-label')).toHaveTextContent(
      'I agree to terms and conditions'
    );

    expect(screen.getByTestId('radio').props.accessibilityState.checked).toBe(
      false
    );
    expect(screen.getByTestId('radio').props.accessibilityRole).toBe('radio');
    expect(screen.getByTestId('radio').props.accessibilityLabel).toBe('agree');
    await user.press(screen.getByTestId('radio-label'));
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it("<Radio/> shouldn't change value while disabled", async () => {
    const mockOnChange = jest.fn((checked) => checked);
    const { user } = setup(
      <Radio
        disabled={true}
        testID="radio"
        onChange={mockOnChange}
        accessibilityLabel="agree"
        accessibilityHint="toggle Agree"
      />
    );
    expect(screen.getByTestId('radio')).toBeOnTheScreen();
    expect(screen.getByTestId('radio')).toBeDisabled();
    await user.press(screen.getByTestId('radio'));
    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });

  it('<Switch /> renders correctly and call on change on Press', async () => {
    const mockOnChange = jest.fn((checked) => checked);
    const { user } = setup(
      <Switch
        testID="switch"
        onChange={mockOnChange}
        accessibilityLabel="agree"
        accessibilityHint="toggle Agree"
      />
    );
    expect(screen.getByTestId('switch')).toBeOnTheScreen();
    expect(screen.queryByTestId('switch-label')).not.toBeOnTheScreen();
    expect(screen.getByTestId('switch')).toBeEnabled();
    expect(screen.getByTestId('switch').props.accessibilityState.checked).toBe(
      false
    );
    expect(screen.getByTestId('switch').props.accessibilityRole).toBe('switch');
    expect(screen.getByTestId('switch').props.accessibilityLabel).toBe('agree');
    await user.press(screen.getByTestId('switch'));
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('<Switch /> should render the correct label', async () => {
    const mockOnChange = jest.fn((checked) => checked);
    const { user } = setup(
      <Switch
        testID="switch"
        onChange={mockOnChange}
        accessibilityLabel="agree"
        label="I agree to terms and conditions"
        accessibilityHint="toggle Agree"
      />
    );
    expect(screen.getByTestId('switch')).toBeOnTheScreen();
    expect(screen.getByTestId('switch-label')).toBeOnTheScreen();
    expect(screen.getByTestId('switch-label')).toHaveTextContent(
      'I agree to terms and conditions'
    );
    expect(screen.getByTestId('switch').props.accessibilityState.checked).toBe(
      false
    );
    expect(screen.getByTestId('switch').props.accessibilityRole).toBe('switch');
    expect(screen.getByTestId('switch').props.accessibilityLabel).toBe('agree');
    await user.press(screen.getByTestId('switch-label'));
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it("<Switch/> shouldn't change value while disabled", async () => {
    const mockOnChange = jest.fn((checked) => checked);
    const { user } = setup(
      <Switch
        disabled={true}
        testID="switch"
        onChange={mockOnChange}
        accessibilityLabel="agree"
        accessibilityHint="toggle Agree"
      />
    );
    expect(screen.getByTestId('switch')).toBeOnTheScreen();
    await user.press(screen.getByTestId('switch'));
    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });
});
````

## File: src/components/ui/checkbox.tsx
````typescript
import { MotiView } from 'moti';
import React, { useCallback } from 'react';
import {
  I18nManager,
  Pressable,
  type PressableProps,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

import colors from '@/components/ui/colors';

import { Text } from './text';

const SIZE = 20;
const WIDTH = 50;
const HEIGHT = 28;
const THUMB_HEIGHT = 22;
const THUMB_WIDTH = 22;
const THUMB_OFFSET = 4;

export interface RootProps extends Omit<PressableProps, 'onPress'> {
  onChange: (checked: boolean) => void;
  checked?: boolean;
  className?: string;
  accessibilityLabel: string;
}

export type IconProps = {
  checked: boolean;
};

export const Root = ({
  checked = false,
  children,
  onChange,
  disabled,
  className = '',
  ...props
}: RootProps) => {
  const handleChange = useCallback(() => {
    onChange(!checked);
  }, [onChange, checked]);

  return (
    <Pressable
      onPress={handleChange}
      className={`flex-row items-center ${className} ${
        disabled ? 'opacity-50' : ''
      }`}
      accessibilityState={{ checked }}
      disabled={disabled}
      {...props}
    >
      {children}
    </Pressable>
  );
};

type LabelProps = {
  text: string;
  className?: string;
  testID?: string;
};

const Label = ({ text, testID, className = '' }: LabelProps) => {
  return (
    <Text testID={testID} className={` ${className} pl-2`}>
      {text}
    </Text>
  );
};

export const CheckboxIcon = ({ checked = false }: IconProps) => {
  const color = checked ? colors.primary[300] : colors.charcoal[400];
  return (
    <MotiView
      style={{
        height: SIZE,
        width: SIZE,
        borderColor: color,
      }}
      className="items-center justify-center rounded-[5px] border-2"
      from={{ backgroundColor: 'transparent', borderColor: '#CCCFD6' }}
      animate={{
        backgroundColor: checked ? color : 'transparent',
        borderColor: color,
      }}
      transition={{
        backgroundColor: { type: 'timing', duration: 100 },
        borderColor: { type: 'timing', duration: 100 },
      }}
    >
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: checked ? 1 : 0 }}
        transition={{ opacity: { type: 'timing', duration: 100 } }}
      >
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="m16.726 7-.64.633c-2.207 2.212-3.878 4.047-5.955 6.158l-2.28-1.928-.69-.584L6 12.66l.683.577 2.928 2.477.633.535.591-.584c2.421-2.426 4.148-4.367 6.532-6.756l.633-.64L16.726 7Z"
            fill="#fff"
          />
        </Svg>
      </MotiView>
    </MotiView>
  );
};

const CheckboxRoot = ({ checked = false, children, ...props }: RootProps) => {
  return (
    <Root checked={checked} accessibilityRole="checkbox" {...props}>
      {children}
    </Root>
  );
};

const CheckboxBase = ({
  checked = false,
  testID,
  label,

  ...props
}: RootProps & { label?: string }) => {
  return (
    <CheckboxRoot checked={checked} testID={testID} {...props}>
      <CheckboxIcon checked={checked} />
      {label ? (
        <Label
          text={label}
          testID={testID ? `${testID}-label` : undefined}
          className="pr-2"
        />
      ) : null}
    </CheckboxRoot>
  );
};

export const Checkbox = Object.assign(CheckboxBase, {
  Icon: CheckboxIcon,
  Root: CheckboxRoot,
  Label,
});

export const RadioIcon = ({ checked = false }: IconProps) => {
  const color = checked ? colors.primary[300] : colors.charcoal[400];
  return (
    <MotiView
      style={{
        height: SIZE,
        width: SIZE,
        borderColor: color,
      }}
      className="items-center justify-center rounded-[20px] border-2 bg-transparent"
      from={{ borderColor: '#CCCFD6' }}
      animate={{
        borderColor: color,
      }}
      transition={{ borderColor: { duration: 100, type: 'timing' } }}
    >
      <MotiView
        className={`size-[10px] rounded-[10px] ${checked && 'bg-primary-300'} `}
        from={{ opacity: 0 }}
        animate={{ opacity: checked ? 1 : 0 }}
        transition={{ opacity: { duration: 50, type: 'timing' } }}
      />
    </MotiView>
  );
};

const RadioRoot = ({ checked = false, children, ...props }: RootProps) => {
  return (
    <Root checked={checked} accessibilityRole="radio" {...props}>
      {children}
    </Root>
  );
};

const RadioBase = ({
  checked = false,
  testID,
  label,
  ...props
}: RootProps & { label?: string }) => {
  return (
    <RadioRoot checked={checked} testID={testID} {...props}>
      <RadioIcon checked={checked} />
      {label ? (
        <Label text={label} testID={testID ? `${testID}-label` : undefined} />
      ) : null}
    </RadioRoot>
  );
};

export const Radio = Object.assign(RadioBase, {
  Icon: RadioIcon,
  Root: RadioRoot,
  Label,
});

export const SwitchIcon = ({ checked = false }: IconProps) => {
  const translateX = checked
    ? THUMB_OFFSET
    : WIDTH - THUMB_WIDTH - THUMB_OFFSET;

  const backgroundColor = checked ? colors.primary[300] : colors.charcoal[400];

  return (
    <View className="w-[50px] justify-center">
      <View className="overflow-hidden rounded-full">
        <View
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundColor,
          }}
        />
      </View>
      <MotiView
        style={{
          height: THUMB_HEIGHT,
          width: THUMB_WIDTH,
          position: 'absolute',
          backgroundColor: 'white',
          borderRadius: 13,
          right: 0,
        }}
        animate={{
          translateX: I18nManager.isRTL ? translateX : -translateX,
        }}
        transition={{ translateX: { overshootClamping: true } }}
      />
    </View>
  );
};
const SwitchRoot = ({ checked = false, children, ...props }: RootProps) => {
  return (
    <Root checked={checked} accessibilityRole="switch" {...props}>
      {children}
    </Root>
  );
};

const SwitchBase = ({
  checked = false,
  testID,
  label,
  ...props
}: RootProps & { label?: string }) => {
  return (
    <SwitchRoot checked={checked} testID={testID} {...props}>
      <SwitchIcon checked={checked} />
      {label ? (
        <Label text={label} testID={testID ? `${testID}-label` : undefined} />
      ) : null}
    </SwitchRoot>
  );
};

export const Switch = Object.assign(SwitchBase, {
  Icon: SwitchIcon,
  Root: SwitchRoot,
  Label,
});
````

## File: src/components/ui/colors.js
````javascript
module.exports = {
  white: '#ffffff',
  black: '#000000',
  charcoal: {
    50: '#F2F2F2',
    100: '#E5E5E5',
    200: '#C9C9C9',
    300: '#B0B0B0',
    400: '#969696',
    500: '#7D7D7D',
    600: '#616161',
    700: '#474747',
    800: '#383838',
    850: '#2E2E2E',
    900: '#1E1E1E',
    950: '#121212',
  },
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#F0EFEE',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  primary: {
    50: '#FFE2CC',
    100: '#FFC499',
    200: '#FFA766',
    300: '#FF984C',
    400: '#FF8933',
    500: '#FF7B1A',
    600: '#FF6C00',
    700: '#E56100',
    800: '#CC5600',
    900: '#B24C00',
  },
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
  },
  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },
  danger: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },
};
````

## File: src/components/ui/focus-aware-status-bar.tsx
````typescript
import { useIsFocused } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Platform } from 'react-native';
import { SystemBars } from 'react-native-edge-to-edge';

type Props = { hidden?: boolean };
export const FocusAwareStatusBar = ({ hidden = false }: Props) => {
  const isFocused = useIsFocused();
  const { colorScheme } = useColorScheme();

  if (Platform.OS === 'web') return null;

  return isFocused ? (
    <SystemBars
      style={colorScheme === 'light' ? 'dark' : 'light'}
      hidden={hidden}
    />
  ) : null;
};
````

## File: src/components/ui/image.tsx
````typescript
import type { ImageProps } from 'expo-image';
import { Image as NImage } from 'expo-image';
import { cssInterop } from 'nativewind';
import * as React from 'react';

export type ImgProps = ImageProps & {
  className?: string;
};

cssInterop(NImage, { className: 'style' });

export const Image = ({
  style,
  className,
  placeholder = 'L6PZfSi_.AyE_3t7t7R**0o#DgR4',
  ...props
}: ImgProps) => {
  return (
    <NImage
      className={className}
      placeholder={placeholder}
      style={style}
      {...props}
    />
  );
};

export const preloadImages = (sources: string[]) => {
  NImage.prefetch(sources);
};
````

## File: src/components/ui/index.tsx
````typescript
import { cssInterop } from 'nativewind';
import Svg from 'react-native-svg';

export * from './button';
export * from './checkbox';
export { default as colors } from './colors';
export * from './focus-aware-status-bar';
export * from './image';
export * from './input';
export * from './list';
export * from './modal';
export * from './progress-bar';
export * from './select';
export * from './text';
export * from './utils';

// export base components from react-native
export {
  ActivityIndicator,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
export { SafeAreaView } from 'react-native-safe-area-context';

//Apply cssInterop to Svg to resolve className string into style
cssInterop(Svg, {
  className: {
    target: 'style',
  },
});
````

## File: src/components/ui/input.test.tsx
````typescript
/* eslint-disable max-lines-per-function */
import React from 'react';
import { I18nManager } from 'react-native';

import { cleanup, render, screen, setup } from '@/lib/test-utils';

import { Input } from './input';

afterEach(cleanup);

describe('Input component ', () => {
  it('renders correctly ', () => {
    render(<Input testID="input" />);
    expect(screen.getByTestId('input')).toBeOnTheScreen();
  });
  it('should use the right direction for rtl layout', () => {
    I18nManager.isRTL = true;
    render(<Input testID="input" />);
    expect(screen.getByTestId('input')).toHaveStyle({
      writingDirection: 'rtl',
    });
  });

  it('should use the right direction for ltr layout', () => {
    I18nManager.isRTL = false;
    render(<Input testID="input" />);
    expect(screen.getByTestId('input')).toHaveStyle({
      writingDirection: 'ltr',
    });
  });

  it('should render the placeholder correctly ', () => {
    render(<Input testID="input" placeholder="Enter your username" />);
    expect(screen.getByTestId('input')).toBeOnTheScreen();
    expect(
      screen.getByPlaceholderText('Enter your username')
    ).toBeOnTheScreen();
  });

  it('should render the label correctly ', () => {
    render(<Input testID="input" label="Username" />);
    expect(screen.getByTestId('input')).toBeOnTheScreen();

    expect(screen.getByTestId('input-label')).toHaveTextContent('Username');
  });

  it('should render the error message correctly ', () => {
    render(<Input testID="input" error="This is an error message" />);
    expect(screen.getByTestId('input')).toBeOnTheScreen();

    expect(screen.getByTestId('input-error')).toHaveTextContent(
      'This is an error message'
    );
  });
  it('should render the label, error message & placeholder correctly ', () => {
    render(
      <Input
        testID="input"
        label="Username"
        placeholder="Enter your username"
        error="This is an error message"
      />
    );
    expect(screen.getByTestId('input')).toBeOnTheScreen();

    expect(screen.getByTestId('input-label')).toHaveTextContent('Username');
    expect(screen.getByTestId('input-error')).toBeOnTheScreen();
    expect(screen.getByTestId('input-error')).toHaveTextContent(
      'This is an error message'
    );
    expect(
      screen.getByPlaceholderText('Enter your username')
    ).toBeOnTheScreen();
  });

  it('should trigger onFocus event correctly ', async () => {
    const onFocus = jest.fn();
    const { user } = setup(<Input testID="input" onFocus={onFocus} />);

    const input = screen.getByTestId('input');
    await user.type(input, 'test text');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('should trigger onBlur event correctly ', async () => {
    const onBlur = jest.fn();
    const { user } = setup(<Input testID="input" onBlur={onBlur} />);

    const input = screen.getByTestId('input');
    await user.type(input, 'test text');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
  it('should trigger onChangeText event correctly', async () => {
    const onChangeText = jest.fn();
    const { user } = setup(
      <Input testID="input" onChangeText={onChangeText} />
    );

    const input = screen.getByTestId('input');
    await user.type(input, '123456789');
    expect(onChangeText).toHaveBeenCalledTimes(9); // every character is a change event
    expect(onChangeText).toHaveBeenCalledWith('123456789');
  });
  it('should be disabled when disabled prop is true', () => {
    render(<Input testID="input" disabled={true} />);

    const input = screen.getByTestId('input');
    expect(input.props.disabled).toBe(true);
  });
});
````

## File: src/components/ui/input.tsx
````typescript
import * as React from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { TextInputProps } from 'react-native';
import { I18nManager, StyleSheet, View } from 'react-native';
import { TextInput as NTextInput } from 'react-native';
import { tv } from 'tailwind-variants';

import colors from './colors';
import { Text } from './text';

const inputTv = tv({
  slots: {
    container: 'mb-2',
    label: 'text-grey-100 mb-1 text-lg dark:text-neutral-100',
    input:
      'mt-0 rounded-xl border-[0.5px] border-neutral-300 bg-neutral-100 px-4 py-3 font-inter text-base  font-medium leading-5 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white',
  },

  variants: {
    focused: {
      true: {
        input: 'border-neutral-400 dark:border-neutral-300',
      },
    },
    error: {
      true: {
        input: 'border-danger-600',
        label: 'text-danger-600 dark:text-danger-600',
      },
    },
    disabled: {
      true: {
        input: 'bg-neutral-200',
      },
    },
  },
  defaultVariants: {
    focused: false,
    error: false,
    disabled: false,
  },
});

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
}

type TRule<T extends FieldValues> =
  | Omit<
      RegisterOptions<T>,
      'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
    >
  | undefined;

export type RuleType<T extends FieldValues> = { [name in keyof T]: TRule<T> };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RuleType<T>;
};

interface ControlledInputProps<T extends FieldValues>
  extends NInputProps,
    InputControllerType<T> {}

export const Input = React.forwardRef<NTextInput, NInputProps>((props, ref) => {
  const { label, error, testID, ...inputProps } = props;
  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  const styles = React.useMemo(
    () =>
      inputTv({
        error: Boolean(error),
        focused: isFocussed,
        disabled: Boolean(props.disabled),
      }),
    [error, isFocussed, props.disabled]
  );

  return (
    <View className={styles.container()}>
      {label && (
        <Text
          testID={testID ? `${testID}-label` : undefined}
          className={styles.label()}
        >
          {label}
        </Text>
      )}
      <NTextInput
        testID={testID}
        ref={ref}
        placeholderTextColor={colors.neutral[400]}
        className={styles.input()}
        onBlur={onBlur}
        onFocus={onFocus}
        {...inputProps}
        style={StyleSheet.flatten([
          { writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' },
          { textAlign: I18nManager.isRTL ? 'right' : 'left' },
          inputProps.style,
        ])}
      />
      {error && (
        <Text
          testID={testID ? `${testID}-error` : undefined}
          className="text-sm text-danger-400 dark:text-danger-600"
        >
          {error}
        </Text>
      )}
    </View>
  );
});

// only used with react-hook-form
export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, ...inputProps } = props;

  const { field, fieldState } = useController({ control, name, rules });
  return (
    <Input
      ref={field.ref}
      autoCapitalize="none"
      onChangeText={field.onChange}
      value={(field.value as string) || ''}
      {...inputProps}
      error={fieldState.error?.message}
    />
  );
}
````

## File: src/components/ui/list.tsx
````typescript
import { FlashList as NFlashList } from '@shopify/flash-list';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { Text } from './text';
type Props = {
  isLoading: boolean;
};

export const List = NFlashList;

export const EmptyList = React.memo(({ isLoading }: Props) => {
  return (
    <View className="min-h-[400px] flex-1 items-center justify-center">
      {!isLoading ? (
        <View>
          <NoData />
          <Text className="pt-4 text-center">Sorry! No data found</Text>
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
});

export const NoData = () => (
  <Svg width={200} height={200} viewBox="0 0 647.636 632.174">
    <Path
      d="M411.146 142.174h-174.51a15.018 15.018 0 0 0-15 15v387.85l-2 .61-42.81 13.11a8.007 8.007 0 0 1-9.99-5.31l-127.34-415.95a8.003 8.003 0 0 1 5.31-9.99l65.97-20.2 191.25-58.54 65.97-20.2a7.99 7.99 0 0 1 9.99 5.3l32.55 106.32Z"
      fill="#f2f2f2"
    />
    <Path
      d="m449.226 140.174-39.23-128.14a16.994 16.994 0 0 0-21.23-11.28l-92.75 28.39-191.24 58.55-92.75 28.4a17.015 17.015 0 0 0-11.28 21.23l134.08 437.93a17.027 17.027 0 0 0 16.26 12.03 16.79 16.79 0 0 0 4.97-.75l63.58-19.46 2-.62v-2.09l-2 .61-64.17 19.65a15.015 15.015 0 0 1-18.73-9.95L2.666 136.734a14.98 14.98 0 0 1 9.95-18.73l92.75-28.4 191.24-58.54 92.75-28.4a15.156 15.156 0 0 1 4.41-.66 15.015 15.015 0 0 1 14.32 10.61l39.05 127.56.62 2h2.08Z"
      fill="#3f3d56"
    />
    <Path
      d="M122.68 127.82a9.016 9.016 0 0 1-8.61-6.366l-12.88-42.072a8.999 8.999 0 0 1 5.97-11.24L283.1 14.278a9.009 9.009 0 0 1 11.24 5.971l12.88 42.072a9.01 9.01 0 0 1-5.97 11.241l-175.94 53.864a8.976 8.976 0 0 1-2.63.395Z"
      fill="#7eb55a"
    />
    <Circle cx={190.154} cy={24.955} r={20} fill="#7eb55a" />
    <Circle cx={190.154} cy={24.955} r={12.665} fill="#fff" />
    <Path
      d="M602.636 582.174h-338a8.51 8.51 0 0 1-8.5-8.5v-405a8.51 8.51 0 0 1 8.5-8.5h338a8.51 8.51 0 0 1 8.5 8.5v405a8.51 8.51 0 0 1-8.5 8.5Z"
      fill="#e6e6e6"
    />
    <Path
      d="M447.136 140.174h-210.5a17.024 17.024 0 0 0-17 17v407.8l2-.61v-407.19a15.018 15.018 0 0 1 15-15h211.12Zm183.5 0h-394a17.024 17.024 0 0 0-17 17v458a17.024 17.024 0 0 0 17 17h394a17.024 17.024 0 0 0 17-17v-458a17.024 17.024 0 0 0-17-17Zm15 475a15.018 15.018 0 0 1-15 15h-394a15.018 15.018 0 0 1-15-15v-458a15.018 15.018 0 0 1 15-15h394a15.018 15.018 0 0 1 15 15Z"
      fill="#3f3d56"
    />
    <Path
      d="M525.636 184.174h-184a9.01 9.01 0 0 1-9-9v-44a9.01 9.01 0 0 1 9-9h184a9.01 9.01 0 0 1 9 9v44a9.01 9.01 0 0 1-9 9Z"
      fill="#7eb55a"
    />
    <Circle cx={433.636} cy={105.174} r={20} fill="#7eb55a" />
    <Circle cx={433.636} cy={105.174} r={12.182} fill="#fff" />
  </Svg>
);
````

## File: src/components/ui/modal-keyboard-aware-scroll-view.tsx
````typescript
// source https://kirillzyusko.github.io/react-native-keyboard-controller/docs/api/components/keyboard-aware-scroll-view
/**
 * This component is used to handle the keyboard in a modal.
 * It is a wrapper around the `KeyboardAwareScrollView` component from `react-native-keyboard-controller`.
 * It is used to handle the keyboard in a modal.
 * example usage:
      export function Example() {
        return (
          <Modal>
            <BottomSheetKeyboardAwareScrollView>
            </BottomSheetKeyboardAwareScrollView>
          </Modal>
        );
        }
 */
import {
  type BottomSheetScrollViewMethods,
  createBottomSheetScrollableComponent,
  SCROLLABLE_TYPE,
} from '@gorhom/bottom-sheet';
import { type BottomSheetScrollViewProps } from '@gorhom/bottom-sheet/src/components/bottomSheetScrollable/types';
import { memo } from 'react';
import { type KeyboardAwareScrollViewProps } from 'react-native-keyboard-controller';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import Reanimated from 'react-native-reanimated';

const AnimatedScrollView =
  Reanimated.createAnimatedComponent<KeyboardAwareScrollViewProps>(
    KeyboardAwareScrollView
  );
const BottomSheetScrollViewComponent = createBottomSheetScrollableComponent<
  BottomSheetScrollViewMethods,
  BottomSheetScrollViewProps
>(SCROLLABLE_TYPE.SCROLLVIEW, AnimatedScrollView);
const BottomSheetKeyboardAwareScrollView = memo(BottomSheetScrollViewComponent);

BottomSheetKeyboardAwareScrollView.displayName =
  'BottomSheetKeyboardAwareScrollView';

export default BottomSheetKeyboardAwareScrollView as (
  props: BottomSheetScrollViewProps & KeyboardAwareScrollViewProps
) => ReturnType<typeof BottomSheetKeyboardAwareScrollView>;
````

## File: src/components/ui/modal.tsx
````typescript
/**
 * Modal
 * Dependencies:
 * - @gorhom/bottom-sheet.
 *
 * Props:
 * - All `BottomSheetModalProps` props.
 * - `title` (string | undefined): Optional title for the modal header.
 *
 * Usage Example:
 * import { Modal, useModal } from '@gorhom/bottom-sheet';
 *
 * function DisplayModal() {
 *   const { ref, present, dismiss } = useModal();
 *
 *   return (
 *     <View>
 *       <Modal
 *         snapPoints={['60%']} // optional
 *         title="Modal Title"
 *         ref={ref}
 *       >
 *         Modal Content
 *       </Modal>
 *     </View>
 *   );
 * }
 *
 */

import type {
  BottomSheetBackdropProps,
  BottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import { BottomSheetModal, useBottomSheet } from '@gorhom/bottom-sheet';
import * as React from 'react';
import { Pressable, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { Path, Svg } from 'react-native-svg';

import { Text } from './text';

type ModalProps = BottomSheetModalProps & {
  title?: string;
};

type ModalRef = React.ForwardedRef<BottomSheetModal>;

type ModalHeaderProps = {
  title?: string;
  dismiss: () => void;
};

export const useModal = () => {
  const ref = React.useRef<BottomSheetModal>(null);
  const present = React.useCallback((data?: any) => {
    ref.current?.present(data);
  }, []);
  const dismiss = React.useCallback(() => {
    ref.current?.dismiss();
  }, []);
  return { ref, present, dismiss };
};

export const Modal = React.forwardRef(
  (
    {
      snapPoints: _snapPoints = ['60%'],
      title,
      detached = false,
      ...props
    }: ModalProps,
    ref: ModalRef
  ) => {
    const detachedProps = React.useMemo(
      () => getDetachedProps(detached),
      [detached]
    );
    const modal = useModal();
    const snapPoints = React.useMemo(() => _snapPoints, [_snapPoints]);

    React.useImperativeHandle(
      ref,
      () => (modal.ref.current as BottomSheetModal) || null
    );

    const renderHandleComponent = React.useCallback(
      () => (
        <>
          <View className="mb-8 mt-2 h-1 w-12 self-center rounded-lg bg-gray-400 dark:bg-gray-700" />
          <ModalHeader title={title} dismiss={modal.dismiss} />
        </>
      ),
      [title, modal.dismiss]
    );

    return (
      <BottomSheetModal
        {...props}
        {...detachedProps}
        ref={modal.ref}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={props.backdropComponent || renderBackdrop}
        enableDynamicSizing={false}
        handleComponent={renderHandleComponent}
      />
    );
  }
);

/**
 * Custom Backdrop
 */

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const CustomBackdrop = ({ style }: BottomSheetBackdropProps) => {
  const { close } = useBottomSheet();
  return (
    <AnimatedPressable
      onPress={() => close()}
      entering={FadeIn.duration(50)}
      exiting={FadeOut.duration(20)}
      style={[style, { backgroundColor: 'rgba(0, 0, 0, 0.4)' }]}
    />
  );
};

export const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <CustomBackdrop {...props} />
);

/**
 *
 * @param detached
 * @returns
 *
 * @description
 * In case the modal is detached, we need to add some extra props to the modal to make it look like a detached modal.
 */

const getDetachedProps = (detached: boolean) => {
  if (detached) {
    return {
      detached: true,
      bottomInset: 46,
      style: { marginHorizontal: 16, overflow: 'hidden' },
    } as Partial<BottomSheetModalProps>;
  }
  return {} as Partial<BottomSheetModalProps>;
};

/**
 * ModalHeader
 */

const ModalHeader = React.memo(({ title, dismiss }: ModalHeaderProps) => {
  return (
    <>
      {title && (
        <View className="flex-row px-2 py-4">
          <View className="size-[24px]" />
          <View className="flex-1">
            <Text className="text-center text-[16px] font-bold text-[#26313D] dark:text-white">
              {title}
            </Text>
          </View>
        </View>
      )}
      <CloseButton close={dismiss} />
    </>
  );
});

const CloseButton = ({ close }: { close: () => void }) => {
  return (
    <Pressable
      onPress={close}
      className="absolute right-3 top-3 size-[24px] items-center justify-center "
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      accessibilityLabel="close modal"
      accessibilityRole="button"
      accessibilityHint="closes the modal"
    >
      <Svg
        className="fill-neutral-300 dark:fill-white"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
      >
        <Path d="M18.707 6.707a1 1 0 0 0-1.414-1.414L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293Z" />
      </Svg>
    </Pressable>
  );
};
````

## File: src/components/ui/progress-bar.tsx
````typescript
import React, { forwardRef, useImperativeHandle } from 'react';
import { View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { twMerge } from 'tailwind-merge';

type Props = {
  initialProgress?: number;
  className?: string;
};

export type ProgressBarRef = {
  setProgress: (value: number) => void;
};

export const ProgressBar = forwardRef<ProgressBarRef, Props>(
  ({ initialProgress = 0, className = '' }, ref) => {
    const progress = useSharedValue<number>(initialProgress ?? 0);
    useImperativeHandle(ref, () => {
      return {
        setProgress: (value: number) => {
          progress.value = withTiming(value, {
            duration: 250,
            easing: Easing.inOut(Easing.quad),
          });
        },
      };
    }, [progress]);

    const style = useAnimatedStyle(() => {
      return {
        width: `${progress.value}%`,
        backgroundColor: '#000',
        height: 2,
      };
    });
    return (
      <View className={twMerge(` bg-[#EAEAEA]`, className)}>
        <Animated.View style={style} />
      </View>
    );
  }
);
````

## File: src/components/ui/select.test.tsx
````typescript
/* eslint-disable max-lines-per-function */

import React from 'react';

import type { OptionType } from '@/components/ui';
import { cleanup, render, screen, setup } from '@/lib/test-utils';

import { Select } from './select';

afterEach(cleanup);

describe('Select component ', () => {
  const options: OptionType[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  it('should render correctly ', () => {
    const onSelect = jest.fn();
    render(
      <Select
        label="Select options"
        options={options}
        onSelect={onSelect}
        testID="select"
      />
    );
    expect(screen.getByTestId('select-trigger')).toBeOnTheScreen();
    expect(screen.getByTestId('select-label')).toBeOnTheScreen();
  });

  it('should render the label correctly ', () => {
    const onSelect = jest.fn();
    render(
      <Select
        label="Select"
        options={options}
        onSelect={onSelect}
        testID="select"
      />
    );
    expect(screen.getByTestId('select-trigger')).toBeOnTheScreen();
    expect(screen.getByTestId('select-label')).toBeOnTheScreen();
    expect(screen.getByTestId('select-label')).toHaveTextContent('Select');
  });

  it('should render the error correctly ', () => {
    const onSelect = jest.fn();
    render(
      <Select
        label="Select"
        options={options}
        onSelect={onSelect}
        testID="select"
        error="Please select an option"
      />
    );
    expect(screen.getByTestId('select-trigger')).toBeOnTheScreen();
    expect(screen.getByTestId('select-error')).toBeOnTheScreen();
    expect(screen.getByTestId('select-error')).toHaveTextContent(
      'Please select an option'
    );
  });

  it('should open options modal on press', async () => {
    const { user } = setup(
      <Select
        label="Select"
        options={options}
        testID="select"
        placeholder="Select an option"
      />
    );

    const selectTrigger = screen.getByTestId('select-trigger');
    await user.press(selectTrigger);

    expect(screen.getByTestId('select-item-chocolate')).toBeOnTheScreen();
    expect(screen.getByTestId('select-item-strawberry')).toBeOnTheScreen();
    expect(screen.getByTestId('select-item-vanilla')).toBeOnTheScreen();
  });

  it('should call onSelect on selecting an option', async () => {
    const onSelect = jest.fn();

    const { user } = setup(
      <Select options={options} onSelect={onSelect} testID="select" />
    );

    const selectTrigger = screen.getByTestId('select-trigger');
    await user.press(selectTrigger);

    const optionModal = screen.getByTestId('select-modal');
    await user.press(optionModal);

    const optionItem1 = screen.getByTestId('select-item-chocolate');
    await user.press(optionItem1);

    expect(onSelect).toHaveBeenCalledWith(options[0].value);
  });
});
````

## File: src/components/ui/select.tsx
````typescript
/* eslint-disable max-lines-per-function */
import {
  BottomSheetFlatList,
  type BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { FlashList } from '@shopify/flash-list';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import type { FieldValues } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { Platform, View } from 'react-native';
import { Pressable, type PressableProps } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';
import { tv } from 'tailwind-variants';

import colors from '@/components/ui/colors';
import { CaretDown } from '@/components/ui/icons';

import type { InputControllerType } from './input';
import { useModal } from './modal';
import { Modal } from './modal';
import { Text } from './text';

const selectTv = tv({
  slots: {
    container: 'mb-4',
    label: 'text-grey-100 mb-1 text-lg dark:text-neutral-100',
    input:
      'border-grey-50 mt-0 flex-row items-center justify-center rounded-xl border-[0.5px] p-3  dark:border-neutral-500 dark:bg-neutral-800',
    inputValue: 'dark:text-neutral-100',
  },

  variants: {
    focused: {
      true: {
        input: 'border-neutral-600',
      },
    },
    error: {
      true: {
        input: 'border-danger-600',
        label: 'text-danger-600 dark:text-danger-600',
        inputValue: 'text-danger-600',
      },
    },
    disabled: {
      true: {
        input: 'bg-neutral-200',
      },
    },
  },
  defaultVariants: {
    error: false,
    disabled: false,
  },
});

const List = Platform.OS === 'web' ? FlashList : BottomSheetFlatList;

export type OptionType = { label: string; value: string | number };

type OptionsProps = {
  options: OptionType[];
  onSelect: (option: OptionType) => void;
  value?: string | number;
  testID?: string;
};

function keyExtractor(item: OptionType) {
  return `select-item-${item.value}`;
}

export const Options = React.forwardRef<BottomSheetModal, OptionsProps>(
  ({ options, onSelect, value, testID }, ref) => {
    const height = options.length * 70 + 100;
    const snapPoints = React.useMemo(() => [height], [height]);
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';

    const renderSelectItem = React.useCallback(
      ({ item }: { item: OptionType }) => (
        <Option
          key={`select-item-${item.value}`}
          label={item.label}
          selected={value === item.value}
          onPress={() => onSelect(item)}
          testID={testID ? `${testID}-item-${item.value}` : undefined}
        />
      ),
      [onSelect, value, testID]
    );

    return (
      <Modal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: isDark ? colors.neutral[800] : colors.white,
        }}
      >
        <List
          data={options}
          keyExtractor={keyExtractor}
          renderItem={renderSelectItem}
          testID={testID ? `${testID}-modal` : undefined}
          estimatedItemSize={52}
        />
      </Modal>
    );
  }
);

const Option = React.memo(
  ({
    label,
    selected = false,
    ...props
  }: PressableProps & {
    selected?: boolean;
    label: string;
  }) => {
    return (
      <Pressable
        className="flex-row items-center border-b border-neutral-300 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-800"
        {...props}
      >
        <Text className="flex-1 dark:text-neutral-100 ">{label}</Text>
        {selected && <Check />}
      </Pressable>
    );
  }
);

export interface SelectProps {
  value?: string | number;
  label?: string;
  disabled?: boolean;
  error?: string;
  options?: OptionType[];
  onSelect?: (value: string | number) => void;
  placeholder?: string;
  testID?: string;
}
interface ControlledSelectProps<T extends FieldValues>
  extends SelectProps,
    InputControllerType<T> {}

export const Select = (props: SelectProps) => {
  const {
    label,
    value,
    error,
    options = [],
    placeholder = 'select...',
    disabled = false,
    onSelect,
    testID,
  } = props;
  const modal = useModal();

  const onSelectOption = React.useCallback(
    (option: OptionType) => {
      onSelect?.(option.value);
      modal.dismiss();
    },
    [modal, onSelect]
  );

  const styles = React.useMemo(
    () =>
      selectTv({
        error: Boolean(error),
        disabled,
      }),
    [error, disabled]
  );

  const textValue = React.useMemo(
    () =>
      value !== undefined
        ? (options?.filter((t) => t.value === value)?.[0]?.label ?? placeholder)
        : placeholder,
    [value, options, placeholder]
  );

  return (
    <>
      <View className={styles.container()}>
        {label && (
          <Text
            testID={testID ? `${testID}-label` : undefined}
            className={styles.label()}
          >
            {label}
          </Text>
        )}
        <Pressable
          className={styles.input()}
          disabled={disabled}
          onPress={modal.present}
          testID={testID ? `${testID}-trigger` : undefined}
        >
          <View className="flex-1">
            <Text className={styles.inputValue()}>{textValue}</Text>
          </View>
          <CaretDown />
        </Pressable>
        {error && (
          <Text
            testID={`${testID}-error`}
            className="text-sm text-danger-300 dark:text-danger-600"
          >
            {error}
          </Text>
        )}
      </View>
      <Options
        testID={testID}
        ref={modal.ref}
        options={options}
        onSelect={onSelectOption}
      />
    </>
  );
};

// only used with react-hook-form
export function ControlledSelect<T extends FieldValues>(
  props: ControlledSelectProps<T>
) {
  const { name, control, rules, onSelect: onNSelect, ...selectProps } = props;

  const { field, fieldState } = useController({ control, name, rules });
  const onSelect = React.useCallback(
    (value: string | number) => {
      field.onChange(value);
      onNSelect?.(value);
    },
    [field, onNSelect]
  );
  return (
    <Select
      onSelect={onSelect}
      value={field.value}
      error={fieldState.error?.message}
      {...selectProps}
    />
  );
}

const Check = ({ ...props }: SvgProps) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
    className="stroke-black dark:stroke-white"
  >
    <Path
      d="m20.256 6.75-10.5 10.5L4.506 12"
      strokeWidth={2.438}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
````

## File: src/components/ui/text.tsx
````typescript
import React from 'react';
import type { TextProps, TextStyle } from 'react-native';
import { I18nManager, StyleSheet, Text as NNText } from 'react-native';
import { twMerge } from 'tailwind-merge';

import type { TxKeyPath } from '@/lib/i18n';
import { translate } from '@/lib/i18n';

interface Props extends TextProps {
  className?: string;
  tx?: TxKeyPath;
}

export const Text = ({
  className = '',
  style,
  tx,
  children,
  ...props
}: Props) => {
  const textStyle = React.useMemo(
    () =>
      twMerge(
        'text-base text-black  dark:text-white  font-inter font-normal',
        className
      ),
    [className]
  );

  const nStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        {
          writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
        },
        style,
      ]) as TextStyle,
    [style]
  );
  return (
    <NNText className={textStyle} style={nStyle} {...props}>
      {tx ? translate(tx) : children}
    </NNText>
  );
};
````

## File: src/components/ui/utils.tsx
````typescript
import type { AxiosError } from 'axios';
import { Dimensions, Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';

export const IS_IOS = Platform.OS === 'ios';
const { width, height } = Dimensions.get('screen');

export const WIDTH = width;
export const HEIGHT = height;

// for onError react queries and mutations
export const showError = (error: AxiosError) => {
  console.log(JSON.stringify(error?.response?.data));
  const description = extractError(error?.response?.data).trimEnd();

  showMessage({
    message: 'Error',
    description,
    type: 'danger',
    duration: 4000,
    icon: 'danger',
  });
};

export const showErrorMessage = (message: string = 'Something went wrong ') => {
  showMessage({
    message,
    type: 'danger',
    duration: 4000,
  });
};

export const extractError = (data: unknown): string => {
  if (typeof data === 'string') {
    return data;
  }
  if (Array.isArray(data)) {
    const messages = data.map((item) => {
      return `  ${extractError(item)}`;
    });

    return `${messages.join('')}`;
  }

  if (typeof data === 'object' && data !== null) {
    const messages = Object.entries(data).map((item) => {
      const [key, value] = item;
      const separator = Array.isArray(value) ? ':\n ' : ': ';

      return `- ${key}${separator}${extractError(value)} \n `;
    });
    return `${messages.join('')} `;
  }
  return 'Something went wrong ';
};
````

## File: src/components/buttons.tsx
````typescript
import React from 'react';

import { Button, View } from '@/components/ui';

import { Title } from './title';

export const Buttons = () => {
  return (
    <>
      <Title text="Buttons" />
      <View>
        <View className="flex-row  flex-wrap">
          <Button label="small" size="sm" className="mr-2" />
          <Button
            label="small"
            loading
            size="sm"
            className="mr-2 min-w-[60px]"
          />
          <Button
            label="small"
            size="sm"
            variant="secondary"
            className="mr-2"
          />
          <Button label="small" size="sm" variant="outline" className="mr-2" />
          <Button
            label="small"
            size="sm"
            variant="destructive"
            className="mr-2"
          />
          <Button label="small" size="sm" variant="ghost" className="mr-2" />
          <Button label="small" size="sm" disabled className="mr-2" />
        </View>
        <Button label="Default Button" />
        <Button label="Secondary Button" variant="secondary" />
        <Button label="Outline Button" variant="outline" />
        <Button label="Destructive Button" variant="destructive" />
        <Button label="Ghost Button" variant="ghost" />
        <Button label="Button" loading={true} />
        <Button label="Button" loading={true} variant="outline" />
        <Button label="Default Button Disabled" disabled />
        <Button
          label="Secondary Button Disabled"
          disabled
          variant="secondary"
        />
      </View>
    </>
  );
};
````

## File: src/components/card.tsx
````typescript
import { Link } from 'expo-router';
import React from 'react';

import type { Post } from '@/api';
import { Image, Pressable, Text, View } from '@/components/ui';

type Props = Post;

const images = [
  'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515386474292-47555758ef2e?auto=format&fit=crop&w=800&q=80',
  'https://plus.unsplash.com/premium_photo-1666815503002-5f07a44ac8fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=80',
];

export const Card = ({ title, body, id }: Props) => {
  return (
    <Link href={`/feed/${id}`} asChild>
      <Pressable>
        <View className="m-2 overflow-hidden rounded-xl  border border-neutral-300 bg-white  dark:bg-neutral-900">
          <Image
            className="h-56 w-full overflow-hidden rounded-t-xl"
            contentFit="cover"
            source={{
              uri: images[Math.floor(Math.random() * images.length)],
            }}
          />

          <View className="p-2">
            <Text className="py-3 text-2xl ">{title}</Text>
            <Text numberOfLines={3} className="leading-snug text-gray-600">
              {body}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};
````

## File: src/components/colors.tsx
````typescript
import React from 'react';

import { Text, View } from '@/components/ui';
import colors from '@/components/ui/colors';

import { Title } from './title';
type ColorName = keyof typeof colors;

export const Colors = () => {
  return (
    <>
      <Title text="Colors" />
      {(Object.keys(colors) as ColorName[]).map((name) => (
        <Color name={name} key={name} />
      ))}
    </>
  );
};

const Color = ({ name }: { name: ColorName }) => {
  if (typeof colors[name] === 'string') return null;
  return (
    <View className="pt-2">
      <Text className="font-medium">{name.toUpperCase()}</Text>
      <View className="flex-row flex-wrap content-between justify-around ">
        {Object.entries(colors[name]).map(([key, value]) => {
          return (
            <ColorCard
              key={`${colors[name]}-${key}`}
              value={key}
              color={value}
            />
          );
        })}
      </View>
    </View>
  );
};

const ColorCard = ({ color, value }: { value: string; color: string }) => {
  return (
    <View className="flex-1">
      <View
        className="h-14 w-full rounded-sm"
        style={{ backgroundColor: color }}
      />
      <Text className="text-sm">{value}</Text>
    </View>
  );
};
````

## File: src/components/cover.tsx
````typescript
/* eslint-disable max-lines-per-function */
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Circle, Path, Polygon } from 'react-native-svg';
// TODO: should be updated to simple images
export const Cover = (props: SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 831 729.98934" {...props}>
    <Path
      d="M908.4762,788.57689v-72.34S936.66786,767.52287,908.4762,788.57689Z"
      transform="translate(-184.5 -85.00533)"
      fill="#f1f1f1"
    />
    <Path
      d="M910.21766,788.56417,856.928,739.64292S913.77324,753.55845,910.21766,788.56417Z"
      transform="translate(-184.5 -85.00533)"
      fill="#f1f1f1"
    />
    <Path
      d="M290.95913,788.57689v-72.34S262.76747,767.52287,290.95913,788.57689Z"
      transform="translate(-184.5 -85.00533)"
      fill="#f1f1f1"
    />
    <Path
      d="M289.21766,788.56417l53.28963-48.92125S285.66209,753.55845,289.21766,788.56417Z"
      transform="translate(-184.5 -85.00533)"
      fill="#f1f1f1"
    />
    <Path
      d="M775.25582,252.05354h-3.86238V146.24468a61.23928,61.23928,0,0,0-61.23923-61.23935H485.9837a61.23927,61.23927,0,0,0-61.2394,61.23916V726.72032a61.2393,61.2393,0,0,0,61.23922,61.23935H710.15391a61.2393,61.2393,0,0,0,61.23947-61.23911V327.3701h3.86244Z"
      transform="translate(-184.5 -85.00533)"
      fill="#3f3d56"
    />
    <Path
      d="M712.625,100.93768H683.36335a21.72758,21.72758,0,0,1-20.11676,29.93348H534.82222a21.72754,21.72754,0,0,1-20.11676-29.93351H487.375a45.73283,45.73283,0,0,0-45.73286,45.73276V726.2945a45.73282,45.73282,0,0,0,45.7328,45.73286H712.625a45.73283,45.73283,0,0,0,45.73286-45.7328h0V146.67045A45.73279,45.73279,0,0,0,712.625,100.93768Z"
      transform="translate(-184.5 -85.00533)"
      fill="#fff"
    />
    <Path
      d="M706.98254,762.07515H493.01746c-24.58521,0-44.58667-17.85253-44.58667-39.79589V693.46871c0-17.48975,15.92895-31.71875,35.50805-31.71875H716.06116c19.5791,0,35.50805,14.229,35.50805,31.71875v28.81055C751.56921,744.22262,731.56775,762.07515,706.98254,762.07515Z"
      transform="translate(-184.5 -85.00533)"
      fill="#e5e5e5"
    />
    <Path
      d="M515.50942,277.85025H467.78191a3.22863,3.22863,0,0,1-3.22483-3.22483V226.89791a3.22863,3.22863,0,0,1,3.22483-3.22483h47.72751a3.22863,3.22863,0,0,1,3.22483,3.22483v47.72751A3.22863,3.22863,0,0,1,515.50942,277.85025Z"
      transform="translate(-184.5 -85.00533)"
      fill="#ff7b1a"
    />
    <Path
      d="M587.74564,277.85025h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22483V226.89791a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.72751A3.22863,3.22863,0,0,1,587.74564,277.85025Z"
      transform="translate(-184.5 -85.00533)"
      fill="#e5e5e5"
    />
    <Path
      d="M659.98186,277.85025h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22483V226.89791a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.72751A3.22863,3.22863,0,0,1,659.98186,277.85025Z"
      transform="translate(-184.5 -85.00533)"
      fill="#e5e5e5"
    />
    <Path
      d="M732.21809,277.85025H684.49058a3.22863,3.22863,0,0,1-3.22483-3.22483V226.89791a3.22863,3.22863,0,0,1,3.22483-3.22483h47.72751a3.22863,3.22863,0,0,1,3.22483,3.22483v47.72751A3.22863,3.22863,0,0,1,732.21809,277.85025Z"
      transform="translate(-184.5 -85.00533)"
      fill="#e5e5e5"
    />
    <Path
      d="M515.33871,366.21063h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22484v-47.7275a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,515.33871,366.21063Z"
      transform="translate(-184.5 -85.00533)"
      fill="#e5e5e5"
    />
    <Path
      d="M587.57493,366.21063h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22484v-47.7275a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22863,3.22863,0,0,1,3.22484,3.22483v47.7275A3.22864,3.22864,0,0,1,587.57493,366.21063Z"
      transform="translate(-184.5 -85.00533)"
      fill="#e5e5e5"
    />
    <Path
      d="M659.81116,366.21063H612.08365a3.22864,3.22864,0,0,1-3.22483-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22483-3.22483h47.72751a3.22863,3.22863,0,0,1,3.22483,3.22483v47.7275A3.22864,3.22864,0,0,1,659.81116,366.21063Z"
      transform="translate(-184.5 -85.00533)"
      fill="#ff7b1a"
    />
    <Path
      d="M732.04738,366.21063h-47.7275a3.22864,3.22864,0,0,1-3.22484-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22484-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,732.04738,366.21063Z"
      transform="translate(-184.5 -85.00533)"
      fill="#ff7b1a"
    />
    <Path
      d="M515.168,454.571H467.4405a3.22863,3.22863,0,0,1-3.22483-3.22484v-47.7275a3.22862,3.22862,0,0,1,3.22483-3.22483H515.168a3.22863,3.22863,0,0,1,3.22484,3.22483v47.7275A3.22864,3.22864,0,0,1,515.168,454.571Z"
      transform="translate(-184.5 -85.00533)"
      fill="#e5e5e5"
    />
    <Path
      d="M587.40423,454.571H539.67672a3.22864,3.22864,0,0,1-3.22483-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22483-3.22483h47.72751a3.22863,3.22863,0,0,1,3.22483,3.22483v47.7275A3.22864,3.22864,0,0,1,587.40423,454.571Z"
      transform="translate(-184.5 -85.00533)"
      fill="#e5e5e5"
    />
    <Path
      d="M659.64045,454.571H611.913a3.22864,3.22864,0,0,1-3.22484-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22484-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,659.64045,454.571Z"
      transform="translate(-184.5 -85.00533)"
      fill="#e5e5e5"
    />
    <Path
      d="M731.87667,454.571h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22484v-47.7275a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,731.87667,454.571Z"
      transform="translate(-184.5 -85.00533)"
      fill="#e5e5e5"
    />
    <Path
      d="M514.9973,542.93139H467.26979a3.22864,3.22864,0,0,1-3.22483-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22483-3.22483H514.9973a3.22863,3.22863,0,0,1,3.22483,3.22483v47.7275A3.22864,3.22864,0,0,1,514.9973,542.93139Z"
      transform="translate(-184.5 -85.00533)"
      fill="#e5e5e5"
    />
    <Path
      d="M587.23352,542.93139H539.506a3.22864,3.22864,0,0,1-3.22484-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22484-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,587.23352,542.93139Z"
      transform="translate(-184.5 -85.00533)"
      fill="#e5e5e5"
    />
    <Path
      d="M659.46974,542.93139h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22484v-47.7275a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,659.46974,542.93139Z"
      transform="translate(-184.5 -85.00533)"
      fill="#e5e5e5"
    />
    <Path
      d="M731.706,542.93139H683.97846a3.22864,3.22864,0,0,1-3.22483-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22483-3.22483H731.706a3.22863,3.22863,0,0,1,3.22483,3.22483v47.7275A3.22864,3.22864,0,0,1,731.706,542.93139Z"
      transform="translate(-184.5 -85.00533)"
      fill="#e5e5e5"
    />
    <Path
      d="M515.50942,740.29107H467.78191a3.22864,3.22864,0,0,1-3.22483-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22483-3.22483h47.72751a3.22863,3.22863,0,0,1,3.22483,3.22483v47.7275A3.22864,3.22864,0,0,1,515.50942,740.29107Z"
      transform="translate(-184.5 -85.00533)"
      fill="#fff"
    />
    <Path
      d="M587.74564,740.29107h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22484v-47.7275a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,587.74564,740.29107Z"
      transform="translate(-184.5 -85.00533)"
      fill="#fff"
    />
    <Path
      d="M659.98186,740.29107h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22484v-47.7275a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,659.98186,740.29107Z"
      transform="translate(-184.5 -85.00533)"
      fill="#fff"
    />
    <Path
      d="M732.21809,740.29107H684.49058a3.22864,3.22864,0,0,1-3.22483-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22483-3.22483h47.72751a3.22863,3.22863,0,0,1,3.22483,3.22483v47.7275A3.22864,3.22864,0,0,1,732.21809,740.29107Z"
      transform="translate(-184.5 -85.00533)"
      fill="#fff"
    />
    <Circle cx={392.11051} cy={548.22133} r={6.44966} fill="#e5e5e5" />
    <Circle cx={415.32929} cy={548.22133} r={6.44966} fill="#e5e5e5" />
    <Circle cx={438.54808} cy={548.22133} r={6.44966} fill="#e5e5e5" />
    <Path
      d="M1014.5,789.00533h-829a1,1,0,0,1,0-2h829a1,1,0,0,1,0,2Z"
      transform="translate(-184.5 -85.00533)"
      fill="#cbcbcb"
    />
    <Path
      d="M510.864,592.10718a13.04925,13.04925,0,0,0-1.75972-19.93187l12.59561-44.62912-22.9642,7.30333-8.44035,41.26089A13.11993,13.11993,0,0,0,510.864,592.10718Z"
      transform="translate(-184.5 -85.00533)"
      fill="#ffb7b7"
    />
    <Path
      d="M517.39368,564.75191a5.96933,5.96933,0,0,1-1.24508.10531l-22.02964-.44139a5.83948,5.83948,0,0,1-5.65948-6.693L510.80711,406.732a18.51184,18.51184,0,0,1,18.25725-15.71657h0a18.41265,18.41265,0,0,1,17.83,22.82525l-15.84048,64.15663L522.07066,559.658A5.80616,5.80616,0,0,1,517.39368,564.75191Z"
      transform="translate(-184.5 -85.00533)"
      fill="#3f3d56"
    />
    <Polygon
      points="342.105 718.105 354.365 718.105 360.198 670.817 342.103 670.818 342.105 718.105"
      fill="#ffb7b7"
    />
    <Path
      d="M523.47815,799.108l24.144-.001h.001a15.3873,15.3873,0,0,1,15.38647,15.38623v.5l-39.53076.00147Z"
      transform="translate(-184.5 -85.00533)"
      fill="#2f2e41"
    />
    <Polygon
      points="394.382 714.123 406.565 715.489 417.632 669.146 399.65 667.13 394.382 714.123"
      fill="#ffb7b7"
    />
    <Path
      d="M576.22006,794.80228l23.99372,2.69008.001.00011a15.38731,15.38731,0,0,1,13.57568,17.00532l-.05573.49688-39.28462-4.40458Z"
      transform="translate(-184.5 -85.00533)"
      fill="#2f2e41"
    />
    <Path
      d="M515.09858,539.9603s-16.808,37.20886-1.96521,61.37694l8.84283,188.16809h20.30315l19.69685-152,35,45L575.65255,787.53294l24.83152,1.394L634.9762,682.50533S608.47831,565.15663,599.72725,562.331l-5.75105-26.82565Z"
      transform="translate(-184.5 -85.00533)"
      fill="#2f2e41"
    />
    <Path
      d="M507.61793,572.62738s-15.14173,17.37795,24.85827,23.37795,82-3,83-15S507.61793,572.62738,507.61793,572.62738Z"
      transform="translate(-184.5 -85.00533)"
      fill="#cbcbcb"
    />
    <Path
      d="M708.1348,357.05837a11.61132,11.61132,0,0,1-14.05875,10.92486l-15.11989,21.80439-15.49148-5.95655,21.78468-30.49213a11.67422,11.67422,0,0,1,22.88544,3.71943Z"
      transform="translate(-184.5 -85.00533)"
      fill="#ffb7b7"
    />
    <Path
      d="M580.2636,385.112l-21.37737-9.671L531.49666,377.399s-33.02046,38.6063-20.02046,75.6063l-8,129c51,14,74.1831-12.25781,111-1L603.10422,437.636Z"
      transform="translate(-184.5 -85.00533)"
      fill="#3f3d56"
    />
    <Path
      d="M565.9762,394.50533l14.2874-9.39337s19.84646-3,27.77953,4.69668c0,0,26.92659,2.25376,33.42983,8.97523l7.16026,1.6141,23.7869-30.80184,14.55608,7.9092-21,57-62.872,3.13064Z"
      transform="translate(-184.5 -85.00533)"
      fill="#3f3d56"
    />
    <Circle
      cx={554.72002}
      cy={334.98279}
      r={33.74484}
      transform="translate(-277.19936 222.12213) rotate(-28.66318)"
      fill="#ffb7b7"
    />
    <Path
      d="M525.53291,308.60053c6.02337-10.83362,13.55038-17.84837,25.94329-17.5952s23.11287-.23674,28.68877,10.83384a18.20735,18.20735,0,0,0,2.14293-8.97911,10.2833,10.2833,0,0,1,4.53932,10.34472,7.50982,7.50982,0,0,0,3.70778-6.16528c4.136,1.37646,5.2115,7.20519,3.11866,11.02892s-6.19726,6.03481-10.13517,7.904-2.1199,11.75518-4.69141,15.27487c-1.79468,2.45641-2.61549,5.4668-3.82479,8.25829a.54091.54091,0,0,1-.2448.25565c-2.77277,1.54608-4.5229,4.30857-4.03339,7.44529a1.21274,1.21274,0,0,1-.03945.70958c-3.51018,6.613-7.29926,13.53194-13.66181,17.478a22.65364,22.65364,0,0,1-17.01862,2.63072c-6.50353-1.55494-12.1259-5.86678-16.18006-11.18444s-6.662-11.60249-8.62153-17.99576c-1.73827-5.6714-3.00232-11.73529-1.62409-17.50476s6.04709-11.112,11.96211-11.55783"
      transform="translate(-184.5 -85.00533)"
      fill="#2f2e41"
    />
  </Svg>
);
````

## File: src/components/inputs.tsx
````typescript
import React from 'react';

import type { OptionType } from '@/components/ui';
import { Input, Select, View } from '@/components/ui';
import { Checkbox, Radio, Switch } from '@/components/ui';

import { Title } from './title';

const options: OptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const Inputs = () => {
  const [value, setValue] = React.useState<string | number | undefined>();
  return (
    <>
      <Title text="Form" />
      <View>
        <Input label="Default" placeholder="Lorem ipsum dolor sit amet" />
        <Input label="Error" error="This is a message error" />
        <Input label="Focused" />
        <Select
          label="Select"
          options={options}
          value={value}
          onSelect={(option) => setValue(option)}
        />
        <CheckboxExample />
        <RadioExample />
        <SwitchExample />
      </View>
    </>
  );
};

const CheckboxExample = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Checkbox.Root
      checked={checked}
      onChange={setChecked}
      accessibilityLabel="accept terms of condition"
      className="pb-2"
    >
      <Checkbox.Icon checked={checked} />
      <Checkbox.Label text="checkbox" />
    </Checkbox.Root>
  );
};

const RadioExample = () => {
  const [selected, setSelected] = React.useState(false);
  return (
    <Radio.Root
      checked={selected}
      onChange={setSelected}
      accessibilityLabel="radio button"
      className="pb-2"
    >
      <Radio.Icon checked={selected} />
      <Radio.Label text="radio button" />
    </Radio.Root>
  );
};

const SwitchExample = () => {
  const [active, setActive] = React.useState(false);
  return (
    <Switch.Root
      checked={active}
      onChange={setActive}
      accessibilityLabel="switch"
      className="pb-2"
    >
      <Switch.Icon checked={active} />
      <Switch.Label text="switch" />
    </Switch.Root>
  );
};
````

## File: src/components/login-form.test.tsx
````typescript
import React from 'react';

import { cleanup, screen, setup, waitFor } from '@/lib/test-utils';

import type { LoginFormProps } from './login-form';
import { LoginForm } from './login-form';

afterEach(cleanup);

const onSubmitMock: jest.Mock<LoginFormProps['onSubmit']> = jest.fn();

describe('LoginForm Form ', () => {
  it('renders correctly', async () => {
    setup(<LoginForm />);
    expect(await screen.findByTestId('form-title')).toBeOnTheScreen();
  });

  it('should display required error when values are empty', async () => {
    const { user } = setup(<LoginForm />);

    const button = screen.getByTestId('login-button');
    expect(screen.queryByText(/Email is required/i)).not.toBeOnTheScreen();
    await user.press(button);
    expect(await screen.findByText(/Email is required/i)).toBeOnTheScreen();
    expect(screen.getByText(/Password is required/i)).toBeOnTheScreen();
  });

  it('should display matching error when email is invalid', async () => {
    const { user } = setup(<LoginForm />);

    const button = screen.getByTestId('login-button');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    await user.type(emailInput, 'yyyyy');
    await user.type(passwordInput, 'test');
    await user.press(button);

    expect(await screen.findByText(/Invalid Email Format/i)).toBeOnTheScreen();
    expect(screen.queryByText(/Email is required/i)).not.toBeOnTheScreen();
  });

  it('Should call LoginForm with correct values when values are valid', async () => {
    const { user } = setup(<LoginForm onSubmit={onSubmitMock} />);

    const button = screen.getByTestId('login-button');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    await user.type(emailInput, 'youssef@gmail.com');
    await user.type(passwordInput, 'password');
    await user.press(button);
    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });
    // expect.objectContaining({}) because we don't want to test the target event we are receiving from the onSubmit function
    expect(onSubmitMock).toHaveBeenCalledWith(
      {
        email: 'youssef@gmail.com',
        password: 'password',
      },
      expect.objectContaining({})
    );
  });
});
````

## File: src/components/login-form.tsx
````typescript
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/components/ui';

const schema = z.object({
  name: z.string().optional(),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};

export const LoginForm = ({ onSubmit = () => {} }: LoginFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <View className="flex-1 justify-center p-4">
        <View className="items-center justify-center">
          <Text
            testID="form-title"
            className="pb-6 text-center text-4xl font-bold"
          >
            Sign In
          </Text>

          <Text className="mb-6 max-w-xs text-center text-gray-500">
            Welcome! 👋 This is a demo login screen! Feel free to use any email
            and password to sign in and try it out.
          </Text>
        </View>

        <ControlledInput
          testID="name"
          control={control}
          name="name"
          label="Name"
        />

        <ControlledInput
          testID="email-input"
          control={control}
          name="email"
          label="Email"
        />
        <ControlledInput
          testID="password-input"
          control={control}
          name="password"
          label="Password"
          placeholder="***"
          secureTextEntry={true}
        />
        <Button
          testID="login-button"
          label="Login"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
````

## File: src/components/title.tsx
````typescript
import * as React from 'react';

import { Text, View } from '@/components/ui';

type Props = {
  text: string;
};
export const Title = ({ text }: Props) => {
  return (
    <View className="flex-row items-center justify-center  py-4 pb-2">
      <Text className="pr-2 text-2xl">{text}</Text>
      <View className="h-[2px] flex-1 bg-neutral-300" />
    </View>
  );
};
````

## File: src/components/typography.tsx
````typescript
import React from 'react';

import { Text, View } from '@/components/ui';

import { Title } from './title';

export const Typography = () => {
  return (
    <>
      <Title text="Typography" />
      <View className="mb-4 flex-col">
        <Text className="text-3xl  tracking-tight">
          H1: Lorem ipsum dolor sit
        </Text>
        <Text className="text-2xl ">H2: Lorem ipsum dolor sit</Text>
        <Text className="text-xl ">H3: Lorem ipsum dolor sit</Text>
        <Text className="text-lg ">H4: Lorem ipsum dolor sit</Text>
        <Text className="text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quasi
          aut, expedita tempore ratione quidem in, corporis quia minus et
          dolorem sunt temporibus iusto consequatur culpa. Omnis sequi debitis
          recusandae?
        </Text>
      </View>
    </>
  );
};
````

## File: src/lib/auth/index.tsx
````typescript
import { create } from 'zustand';

import { createSelectors } from '../utils';
import type { TokenType } from './utils';
import { getToken, removeToken, setToken } from './utils';

interface AuthState {
  token: TokenType | null;
  status: 'idle' | 'signOut' | 'signIn';
  signIn: (data: TokenType) => void;
  signOut: () => void;
  hydrate: () => void;
}

const _useAuth = create<AuthState>((set, get) => ({
  status: 'idle',
  token: null,
  signIn: (token) => {
    setToken(token);
    set({ status: 'signIn', token });
  },
  signOut: () => {
    removeToken();
    set({ status: 'signOut', token: null });
  },
  hydrate: () => {
    try {
      const userToken = getToken();
      if (userToken !== null) {
        get().signIn(userToken);
      } else {
        get().signOut();
      }
    } catch (e) {
      // only to remove eslint error, handle the error properly
      console.error(e);
      // catch error here
      // Maybe sign_out user!
    }
  },
}));

export const useAuth = createSelectors(_useAuth);

export const signOut = () => _useAuth.getState().signOut();
export const signIn = (token: TokenType) => _useAuth.getState().signIn(token);
export const hydrateAuth = () => _useAuth.getState().hydrate();
````

## File: src/lib/auth/utils.tsx
````typescript
import { getItem, removeItem, setItem } from '@/lib/storage';

const TOKEN = 'token';

export type TokenType = {
  access: string;
  refresh: string;
};

export const getToken = () => getItem<TokenType>(TOKEN);
export const removeToken = () => removeItem(TOKEN);
export const setToken = (value: TokenType) => setItem<TokenType>(TOKEN, value);
````

## File: src/lib/hooks/index.tsx
````typescript
export * from './use-is-first-time';
export * from './use-selected-theme';
````

## File: src/lib/hooks/use-is-first-time.tsx
````typescript
import { useMMKVBoolean } from 'react-native-mmkv';

import { storage } from '../storage';

const IS_FIRST_TIME = 'IS_FIRST_TIME';

export const useIsFirstTime = () => {
  const [isFirstTime, setIsFirstTime] = useMMKVBoolean(IS_FIRST_TIME, storage);
  if (isFirstTime === undefined) {
    return [true, setIsFirstTime] as const;
  }
  return [isFirstTime, setIsFirstTime] as const;
};
````

## File: src/lib/hooks/use-selected-theme.tsx
````typescript
import { colorScheme, useColorScheme } from 'nativewind';
import React from 'react';
import { useMMKVString } from 'react-native-mmkv';

import { storage } from '../storage';

const SELECTED_THEME = 'SELECTED_THEME';
export type ColorSchemeType = 'light' | 'dark' | 'system';
/**
 * this hooks should only be used while selecting the theme
 * This hooks will return the selected theme which is stored in MMKV
 * selectedTheme should be one of the following values 'light', 'dark' or 'system'
 * don't use this hooks if you want to use it to style your component based on the theme use useColorScheme from nativewind instead
 *
 */
export const useSelectedTheme = () => {
  const { colorScheme: _color, setColorScheme } = useColorScheme();
  const [theme, _setTheme] = useMMKVString(SELECTED_THEME, storage);

  const setSelectedTheme = React.useCallback(
    (t: ColorSchemeType) => {
      setColorScheme(t);
      _setTheme(t);
    },
    [setColorScheme, _setTheme]
  );

  const selectedTheme = (theme ?? 'system') as ColorSchemeType;
  return { selectedTheme, setSelectedTheme } as const;
};
// to be used in the root file to load the selected theme from MMKV
export const loadSelectedTheme = () => {
  const theme = storage.getString(SELECTED_THEME);
  if (theme !== undefined) {
    console.log('theme', theme);
    colorScheme.set(theme as ColorSchemeType);
  }
};
````

## File: src/lib/i18n/index.tsx
````typescript
import { locale } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

import { resources } from './resources';
import { getLanguage } from './utils';
export * from './utils';

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguage() || locale, // TODO: if you are not supporting multiple languages or languages with multiple directions you can set the default value to `en`
  fallbackLng: 'en',
  compatibilityJSON: 'v3', // By default React Native projects does not support Intl

  // allows integrating dynamic values into translations.
  interpolation: {
    escapeValue: false, // escape passed in values to avoid XSS injections
  },
});

// Is it a RTL language?
export const isRTL: boolean = i18n.dir() === 'rtl';

I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

export default i18n;
````

## File: src/lib/i18n/react-i18next.d.ts
````typescript
import type { resources } from './resources';

// react-i18next versions higher than 11.11.0

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['en'];
  }
}
````

## File: src/lib/i18n/resources.ts
````typescript
import ar from '@/translations/ar.json';
import en from '@/translations/en.json';

export const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

export type Language = keyof typeof resources;
````

## File: src/lib/i18n/types.ts
````typescript
//  https://github.com/infinitered/ignite/blob/master/boilerplate/app/i18n/i18n.ts
export type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<
  TValue,
  Text extends string,
> = TValue extends any[]
  ? Text
  : TValue extends object
    ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
    : Text;
````

## File: src/lib/i18n/utils.tsx
````typescript
import type TranslateOptions from 'i18next';
import i18n from 'i18next';
import memoize from 'lodash.memoize';
import { useCallback } from 'react';
import { I18nManager, NativeModules, Platform } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import RNRestart from 'react-native-restart';

import { storage } from '../storage';
import type { Language, resources } from './resources';
import type { RecursiveKeyOf } from './types';

type DefaultLocale = typeof resources.en.translation;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

export const LOCAL = 'local';

export const getLanguage = () => storage.getString(LOCAL); // 'Marc' getItem<Language | undefined>(LOCAL);

export const translate = memoize(
  (key: TxKeyPath, options = undefined) =>
    i18n.t(key, options) as unknown as string,
  (key: TxKeyPath, options: typeof TranslateOptions) =>
    options ? key + JSON.stringify(options) : key
);

export const changeLanguage = (lang: Language) => {
  i18n.changeLanguage(lang);
  if (lang === 'ar') {
    I18nManager.forceRTL(true);
  } else {
    I18nManager.forceRTL(false);
  }
  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    if (__DEV__) NativeModules.DevSettings.reload();
    else RNRestart.restart();
  } else if (Platform.OS === 'web') {
    window.location.reload();
  }
};

export const useSelectedLanguage = () => {
  const [language, setLang] = useMMKVString(LOCAL);

  const setLanguage = useCallback(
    (lang: Language) => {
      setLang(lang);
      if (lang !== undefined) changeLanguage(lang as Language);
    },
    [setLang]
  );

  return { language: language as Language, setLanguage };
};
````

## File: src/lib/env.js
````javascript
/*
 * This file should not be modified; use `env.js` in the project root to add your client environment variables.
 * If you import `Env` from `@env`, this is the file that will be loaded.
 * You can only access the client environment variables here.
 * NOTE: We use js file so we can load the client env types
 */

import Constants from 'expo-constants';
/**
 *  @type {typeof import('../../env.js').ClientEnv}
 */
//@ts-ignore // Don't worry about TypeScript here; we know we're passing the correct environment variables to `extra` in `app.config.ts`.
export const Env = Constants.expoConfig?.extra ?? {};
````

## File: src/lib/index.tsx
````typescript
export * from './auth';
export * from './hooks';
export * from './i18n';
export * from './utils';
````

## File: src/lib/storage.tsx
````typescript
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export function getItem<T>(key: string): T | null {
  const value = storage.getString(key);
  return value ? JSON.parse(value) || null : null;
}

export async function setItem<T>(key: string, value: T) {
  storage.set(key, JSON.stringify(value));
}

export async function removeItem(key: string) {
  storage.delete(key);
}
````

## File: src/lib/test-utils.tsx
````typescript
import '@shopify/flash-list/jestSetup';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import type { RenderOptions } from '@testing-library/react-native';
import { render, userEvent } from '@testing-library/react-native';
import type { ReactElement } from 'react';
import React from 'react';

const createAppWrapper = () => {
  return ({ children }: { children: React.ReactNode }) => (
    <BottomSheetModalProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </BottomSheetModalProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  const Wrapper = createAppWrapper(); // make sure we have a new wrapper for each render
  return render(ui, { wrapper: Wrapper, ...options });
};

// use this if you want to test user events
export const setup = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  const Wrapper = createAppWrapper();
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...options }),
  };
};

export * from '@testing-library/react-native';
export { customRender as render };
````

## File: src/lib/use-theme-config.tsx
````typescript
import type { Theme } from '@react-navigation/native';
import {
  DarkTheme as _DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'nativewind';

import colors from '@/components/ui/colors';

const DarkTheme: Theme = {
  ..._DarkTheme,
  colors: {
    ..._DarkTheme.colors,
    primary: colors.primary[200],
    background: colors.charcoal[950],
    text: colors.charcoal[100],
    border: colors.charcoal[500],
    card: colors.charcoal[850],
  },
};

const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary[400],
    background: colors.white,
  },
};

export function useThemeConfig() {
  const { colorScheme } = useColorScheme();

  if (colorScheme === 'dark') return DarkTheme;

  return LightTheme;
}
````

## File: src/lib/utils.ts
````typescript
import { Linking } from 'react-native';
import type { StoreApi, UseBoundStore } from 'zustand';

export function openLinkInBrowser(url: string) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url));
}

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};
````

## File: src/translations/ar.json
````json
{
  "onboarding": {
    "message": "مرحبا بكم في موقع تطبيق obytes"
  },
  "settings": {
    "about": "حول التطبيق ",
    "app_name": "اسم التطبيق",
    "arabic": "عربي",
    "english": "إنجليزي",
    "generale": "عام",
    "github": "جيثب",
    "language": "لغة",
    "links": "الروابط",
    "logout": "تسجيل خروج",
    "more": "أكثر",
    "privacy": "سياسة الخصوصية",
    "rate": "تقييم",
    "share": "شارك",
    "support": "الدعم",
    "support_us": "ادعمنا",
    "terms": "شروط الخدمة",
    "theme": {
      "dark": "مظلم",
      "light": "خفيفة",
      "system": "System",
      "title": "سمة"
    },
    "title": "إعدادات",
    "version": "إصدار",
    "website": "موقع الكتروني"
  },
  "welcome": "test arabic"
}
````

## File: src/translations/en.json
````json
{
  "onboarding": {
    "message": "Welcome to obytes app site"
  },
  "settings": {
    "about": "About",
    "app_name": "App Name",
    "arabic": "Arabic",
    "english": "English",
    "generale": "General",
    "github": "Github",
    "language": "Language",
    "links": "Links",
    "logout": "Logout",
    "more": "More",
    "privacy": "Privacy Policy",
    "rate": "Rate",
    "share": "Share",
    "support": "Support",
    "support_us": "Support Us",
    "terms": "Terms of Service",
    "theme": {
      "dark": "Dark",
      "light": "Light",
      "system": "System",
      "title": "Theme"
    },
    "title": "Settings",
    "version": "Version",
    "website": "Website"
  },
  "welcome": "Welcome to obytes app site"
}
````

## File: .cursorrules
````
# React Native/Expo Project

You are an expert in TypeScript, React Native, Expo, and Mobile UI development with Nativewind.

Every time you choose to apply a rule(s), explicitly state the rule(s) in the output. You can abbreviate the rule description to a single word or phrase.

## Project Context

## Code Style and Structure

- Write concise, technical TypeScript code with accurate examples
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError)
- Ensure components are modular, reusable, and maintainable.
- Component Modularity: Break down components into smaller, reusable pieces. Keep components focused on a single responsibility and shouldn't be more than 80 lines of code.
- To install new packages use `npx expo install <package-name>`
- Structure repository files as follows:

```
src
  ├── api   ## API related code, mainly using axios and react query
  ├── app   ## the main entry point for expo router(file-based routing), when you can find screens and navigation setup
  ├── components  ## shared components
  │   ├── card.tsx
  │   └── ui  ## core ui components. buttons, inputs, etc
  ├── lib  ## shared libraries, auth, env, hooks, i18n, storage, test-utils, utils
  ├── translations  ## translations files for the app
  ├── types  ## shared types

```

## Tech Stack

- Expo
- React Native
- TypeScript
- Nativewind ( Tailwind CSS for React Native )
- Expo Router
- React Query with React Query Kit
- Zustand
- React Native Keyboard Controller
- React Native SVG
- React Native MMKV

## Naming Conventions

- Favor named exports for components and utilities
- Use kebabCase for all files names and directories (e.g., visa-form.tsx)

## TypeScript Usage

- Use TypeScript for all code; prefer types over interfaces
- Avoid enums; use const objects with 'as const' assertion
- Use functional components with TypeScript interfaces
- Define strict types for message passing between different parts of the extension
- Use absolute imports for all files @/...
- Avoid try/catch blocks unless there's good reason to translate or handle error in that abstraction
- Use explicit return types for all functions

## State Management

- Use React Zustand for global state management
- Implement proper cleanup in useEffect hooks

## Syntax and Formatting

- Use "function" keyword for pure functions
- Avoid unnecessary curly braces in conditionals
- Use declarative JSX
- Implement proper TypeScript discriminated unions for message types

## UI and Styling

- Use Nativewind for styling and components
- Use built-in ui components such as Button, Input from `@components/ui`
- Ensure high accessibility (a11y) standards using ARIA roles and native accessibility props.
- Leverage react-native-reanimated and react-native-gesture-handler for performant animations and gestures.
- Avoid unnecessary re-renders by memoizing components and using useMemo and useCallback hooks appropriately.
- Make sure to use defined colors and fonts in the tailwind config file.

Here is a simple example of how a component should be written using :

```tsx
import * as React from 'react';

import { Text, View, Image, SavaAreaView } from '@/components/ui';

// Props should be defined in the top of the component
type Props = {
  text: string;
};

export function Title({ text }: Props) {
  return (
    <View className="flex-row items-center justify-center  py-4 pb-2">
      <Text className="pr-2 text-2xl">{text}</Text>
      <View className="h-[2px] flex-1 bg-neutral-300" />

      <Image
        source={require('@assets/images/demo.png')}
        style={{ width: 24, height: 24 }}
        contentFit="contain"
      />
    </View>
  );
}
```

## Error Handling

- Log errors appropriately for debugging
- Provide user-friendly error messages

## Testing

- Write unit tests using Jest and React Native Testing Library.
- Write unit tests for utilities and complex components
- The test file should be named like the component file but with the .test.tsx extension (e.g., component-name.test.tsx)
- Do not write unit tests for simple components that only show data

## Git Usage

Commit Message Prefixes:

- "fix:" for bug fixes
- "feat:" for new features
- "perf:" for performance improvements
- "docs:" for documentation changes
- "style:" for formatting changes
- "refactor:" for code refactoring
- "test:" for adding missing tests
- "chore:" for maintenance tasks

Rules:

- Use lowercase for commit messages
- Keep the summary line concise with a maximum of 100 characters
- Reference issue numbers when applicable

## Documentation

- Maintain clear README with the following sections:
  - Setup ( how to install and run the project )
  - Usage ( listing all the commands and how to use them )
  - Stack ( the tech stack used in the project )
  - Folder Structure ( the folder structure of the project only the important ones inside src )
````

## File: .env.development
````
API_URL=https://dummyjson.com/

## TODO: add the variable to your  CI and remove it from here, not recommended setting sensitive values on your git repo
SECRET_KEY=my-secret-key
VAR_NUMBER=10 # this is a number variable
VAR_BOOL=true # this is a boolean variable
````

## File: .env.production
````
API_URL=https://dummyjson.com/

## TODO: add the variable to your  CI and remove it from here, not recommended setting sensitive values on your git repo
SECRET_KEY=my-secret-key
VAR_NUMBER=10 # this is a number variable
VAR_BOOL=true # this is a boolean variable
````

## File: .env.staging
````
API_URL=https://dummyjson.com/

## TODO: add the variable to your  CI and remove it from here, not recommended setting sensitive values on your git repo
SECRET_KEY=my-secret-key
VAR_NUMBER=10 # this is a number variable
VAR_BOOL=true # this is a boolean variable
````

## File: .gitignore
````
node_modules/
.expo/
dist/
npm-debug.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision
*.orig.*
web-build/
yarn-error.log
/coverage
# macOS
.DS_Store

# @generated expo-cli sync-2b81b286409207a5da26e14c78851eb30d8ccbdb
# The following patterns were generated by expo-cli

expo-env.d.ts
# @end expo-cli
````

## File: .npmrc
````
node-linker=hoisted
auto-install-peers=true
````

## File: .prettierrc.js
````javascript
/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  endOfLine: 'auto',
  trailingComma: 'es5',
};

module.exports = config;
````

## File: app.config.ts
````typescript
/* eslint-disable max-lines-per-function */
import type { ConfigContext, ExpoConfig } from '@expo/config';
import type { AppIconBadgeConfig } from 'app-icon-badge/types';

import { ClientEnv, Env } from './env';

const appIconBadgeConfig: AppIconBadgeConfig = {
  enabled: Env.APP_ENV !== 'production',
  badges: [
    {
      text: Env.APP_ENV,
      type: 'banner',
      color: 'white',
    },
    {
      text: Env.VERSION.toString(),
      type: 'ribbon',
      color: 'white',
    },
  ],
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.NAME,
  description: `${Env.NAME} Mobile App`,
  owner: Env.EXPO_ACCOUNT_OWNER,
  scheme: Env.SCHEME,
  slug: 'obytesapp',
  version: Env.VERSION.toString(),
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Env.BUNDLE_ID,
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  experiments: {
    typedRoutes: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#2E3C4B',
    },
    package: Env.PACKAGE,
  },
  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro',
  },
  plugins: [
    [
      'expo-splash-screen',
      {
        backgroundColor: '#2E3C4B',
        image: './assets/splash-icon.png',
        imageWidth: 150,
      },
    ],
    [
      'expo-font',
      {
        fonts: ['./assets/fonts/Inter.ttf'],
      },
    ],
    'expo-localization',
    'expo-router',
    ['app-icon-badge', appIconBadgeConfig],
    ['react-native-edge-to-edge'],
  ],
  extra: {
    ...ClientEnv,
    eas: {
      projectId: Env.EAS_PROJECT_ID,
    },
  },
});
````

## File: babel.config.js
````javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
            '@env': './src/lib/env.js',
          },
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
````

## File: commitlint.config.js
````javascript
module.exports = { extends: ['@commitlint/config-conventional'] };
````

## File: eas.json
````json
{
  "cli": {
    "version": ">= 3.8.1"
  },
  "build": {
    "production": {
      "channel": "production",
      "distribution": "store",
      "pnpm": "9.12.3",
      "ios": {
        "image": "latest"
      },
      "android": {
        "buildType": "app-bundle",
        "image": "latest"
      },
      "env": {
        "EXPO_NO_DOTENV": "1",
        "APP_ENV": "production",
        "FLIPPER_DISABLE": "1"
      }
    },
    "staging": {
      "channel": "staging",
      "distribution": "internal",
      "pnpm": "9.12.3",
      "ios": {
        "image": "latest"
      },
      "android": {
        "buildType": "apk",
        "image": "latest"
      },
      "env": {
        "APP_ENV": "staging",
        "EXPO_NO_DOTENV": "1",
        "FLIPPER_DISABLE": "1"
      }
    },
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "pnpm": "9.12.3",
      "ios": {
        "image": "latest"
      },
      "android": {
        "image": "latest"
      },
      "env": {
        "APP_ENV": "development",
        "EXPO_NO_DOTENV": "1"
      }
    },
    "simulator": {
      "pnpm": "9.12.3",
      "ios": {
        "simulator": true,
        "image": "latest"
      },
      "android": {
        "image": "latest"
      },
      "env": {
        "APP_ENV": "development",
        "EXPO_NO_DOTENV": "1"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
````

## File: env.js
````javascript
/* eslint-env node */
/*
 * Env file to load and validate env variables
 * Be cautious; this file should not be imported into your source folder.
 * We split the env variables into two parts:
 * 1. Client variables: These variables are used in the client-side code (src folder).
 * 2. Build-time variables: These variables are used in the build process (app.config.ts file).
 * Import this file into the `app.config.ts` file to use environment variables during the build process. The client variables can then be passed to the client-side using the extra field in the `app.config.ts` file.
 * To access the client environment variables in your `src` folder, you can import them from `@env`. For example: `import Env from '@env'`.
 */
/**
 * 1st part: Import packages and Load your env variables
 * we use dotenv to load the correct variables from the .env file based on the APP_ENV variable (default is development)
 * APP_ENV is passed as an inline variable while executing the command, for example: APP_ENV=staging pnpm build:android
 */
const z = require('zod');

const packageJSON = require('./package.json');
const path = require('path');
const APP_ENV = process.env.APP_ENV ?? 'development';
// eslint-disable-next-line no-undef
const envPath = path.resolve(__dirname, `.env.${APP_ENV}`);

require('dotenv').config({
  path: envPath,
});

/**
 * 2nd part: Define some static variables for the app
 * Such as: bundle id, package name, app name.
 *
 * You can add them to the .env file but we think it's better to keep them here as as we use prefix to generate this values based on the APP_ENV
 * for example: if the APP_ENV is staging, the bundle id will be com.obytes.staging
 */

// TODO: Replace these values with your own

const BUNDLE_ID = 'com.obytes'; // ios bundle id
const PACKAGE = 'com.obytes'; // android package name
const NAME = 'ObytesApp'; // app name
const EXPO_ACCOUNT_OWNER = 'obytes'; // expo account owner
const EAS_PROJECT_ID = 'c3e1075b-6fe7-4686-aa49-35b46a229044'; // eas project id
const SCHEME = 'obytesApp'; // app scheme

/**
 * We declare a function withEnvSuffix that will add a suffix to the variable name based on the APP_ENV
 * Add a suffix to variable env based on APP_ENV
 * @param {string} name
 * @returns  {string}
 */

const withEnvSuffix = (name) => {
  return APP_ENV === 'production' ? name : `${name}.${APP_ENV}`;
};

/**
 * 2nd part: Define your env variables schema
 * we use zod to define our env variables schema
 *
 * we split the env variables into two parts:
 *    1. client: These variables are used in the client-side code (`src` folder).
 *    2. buildTime: These variables are used in the build process (app.config.ts file). You can think of them as server-side variables.
 *
 * Main rules:
 *    1. If you need your variable on the client-side, you should add it to the client schema; otherwise, you should add it to the buildTime schema.
 *    2. Whenever you want to add a new variable, you should add it to the correct schema based on the previous rule, then you should add it to the corresponding object (_clientEnv or _buildTimeEnv).
 *
 * Note: `z.string()` means that the variable exists and can be an empty string, but not `undefined`.
 * If you want to make the variable required, you should use `z.string().min(1)` instead.
 * Read more about zod here: https://zod.dev/?id=strings
 *
 */

const client = z.object({
  APP_ENV: z.enum(['development', 'staging', 'production']),
  NAME: z.string(),
  SCHEME: z.string(),
  BUNDLE_ID: z.string(),
  PACKAGE: z.string(),
  VERSION: z.string(),

  // ADD YOUR CLIENT ENV VARS HERE
  API_URL: z.string(),
  VAR_NUMBER: z.number(),
  VAR_BOOL: z.boolean(),
});

const buildTime = z.object({
  EXPO_ACCOUNT_OWNER: z.string(),
  EAS_PROJECT_ID: z.string(),
  // ADD YOUR BUILD TIME ENV VARS HERE
  SECRET_KEY: z.string(),
});

/**
 * @type {Record<keyof z.infer<typeof client> , unknown>}
 */
const _clientEnv = {
  APP_ENV,
  NAME: NAME,
  SCHEME: SCHEME,
  BUNDLE_ID: withEnvSuffix(BUNDLE_ID),
  PACKAGE: withEnvSuffix(PACKAGE),
  VERSION: packageJSON.version,

  // ADD YOUR ENV VARS HERE TOO
  API_URL: process.env.API_URL,
  VAR_NUMBER: Number(process.env.VAR_NUMBER),
  VAR_BOOL: process.env.VAR_BOOL === 'true',
};

/**
 * @type {Record<keyof z.infer<typeof buildTime> , unknown>}
 */
const _buildTimeEnv = {
  EXPO_ACCOUNT_OWNER,
  EAS_PROJECT_ID,
  // ADD YOUR ENV VARS HERE TOO
  SECRET_KEY: process.env.SECRET_KEY,
};

/**
 * 3rd part: Merge and Validate your env variables
 * We use zod to validate our env variables based on the schema we defined above
 * If the validation fails we throw an error and log the error to the console with a detailed message about missed variables
 * If the validation passes we export the merged and parsed env variables to be used in the app.config.ts file as well as a ClientEnv object to be used in the client-side code
 **/
const _env = {
  ..._clientEnv,
  ..._buildTimeEnv,
};

const merged = buildTime.merge(client);
const parsed = merged.safeParse(_env);

if (parsed.success === false) {
  console.error(
    '❌ Invalid environment variables:',
    parsed.error.flatten().fieldErrors,

    `\n❌ Missing variables in .env.${APP_ENV} file, Make sure all required variables are defined in the .env.${APP_ENV} file.`,
    `\n💡 Tip: If you recently updated the .env.${APP_ENV} file and the error still persists, try restarting the server with the -c flag to clear the cache.`
  );
  throw new Error(
    'Invalid environment variables, Check terminal for more details '
  );
}

const Env = parsed.data;
const ClientEnv = client.parse(_clientEnv);

module.exports = {
  Env,
  ClientEnv,
  withEnvSuffix,
};
````

## File: eslint.config.mjs
````
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig, globalIgnores } from 'eslint/config';
import expoConfig from 'eslint-config-expo/flat.js';
import i18nJsonPlugin from 'eslint-plugin-i18n-json';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactCompiler from 'eslint-plugin-react-compiler';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tailwind from 'eslint-plugin-tailwindcss';
import testingLibrary from 'eslint-plugin-testing-library';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member, import/namespace
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import { configs, parser } from 'typescript-eslint';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
  globalIgnores([
    'dist/*',
    'node_modules',
    '__tests__/',
    'coverage',
    '.expo',
    '.expo-shared',
    'android',
    'ios',
    '.vscode',
    'docs/',
    'cli/',
    'expo-env.d.ts',
  ]),
  expoConfig,
  eslintPluginPrettierRecommended,
  ...tailwind.configs['flat/recommended'],
  reactCompiler.configs.recommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      unicorn: eslintPluginUnicorn,
      'unused-imports': unusedImports,
    },
    rules: {
      'max-params': ['error', 3],
      'max-lines-per-function': ['error', 70],
      'tailwindcss/classnames-order': [
        'warn',
        {
          officialSorting: true,
        },
      ],
      'tailwindcss/no-custom-classname': 'off',
      'react/display-name': 'off',
      'react/no-inline-styles': 'off',
      'react/destructuring-assignment': 'off',
      'react/require-default-props': 'off',
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: ['/android', '/ios'],
        },
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'import/prefer-default-export': 'off',
      'import/no-cycle': ['error', { maxDepth: '∞' }],
      'prettier/prettier': ['error', { ignores: ['expo-env.d.ts'] }],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    rules: {
      ...configs.recommended.rules,
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: true,
        },
      ],
    },
  },
  {
    files: ['src/translations/*.json'],
    plugins: { 'i18n-json': i18nJsonPlugin },
    processor: {
      meta: { name: '.json' },
      ...i18nJsonPlugin.processors['.json'],
    },
    rules: {
      ...i18nJsonPlugin.configs.recommended.rules,
      'i18n-json/valid-message-syntax': [
        2,
        {
          syntax: path.resolve(
            __dirname,
            './scripts/i18next-syntax-validation.js'
          ),
        },
      ],
      'i18n-json/valid-json': 2,
      'i18n-json/sorted-keys': [
        2,
        {
          order: 'asc',
          indentSpaces: 2,
        },
      ],
      'i18n-json/identical-keys': [
        2,
        {
          filePath: path.resolve(__dirname, './src/translations/en.json'),
        },
      ],
      'prettier/prettier': [
        0,
        {
          singleQuote: true,
          endOfLine: 'auto',
        },
      ],
    },
  },
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    plugins: { 'testing-library': testingLibrary },
    rules: {
      ...testingLibrary.configs.react.rules,
    },
  },
]);
````

## File: global.css
````css
@tailwind base;
@tailwind components;
@tailwind utilities;
````

## File: jest-setup.ts
````typescript
import '@testing-library/react-native/extend-expect';

// react-hook form setup for testing
// @ts-ignore
global.window = {};
// @ts-ignore
global.window = global;
````

## File: jest.config.js
````javascript
module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
    '!**/docs/**',
    '!**/cli/**',
  ],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transformIgnorePatterns: [
    `node_modules/(?!(?:.pnpm/)?((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|@sentry/.*|native-base|react-native-svg))`,
  ],
  coverageReporters: ['json-summary', ['text', { file: 'coverage.txt' }]],
  reporters: [
    'default',
    ['github-actions', { silent: false }],
    'summary',
    [
      'jest-junit',
      {
        outputDirectory: 'coverage',
        outputName: 'jest-junit.xml',
        ancestorSeparator: ' › ',
        uniqueOutputName: 'false',
        suiteNameTemplate: '{filepath}',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
      },
    ],
  ],
  coverageDirectory: '<rootDir>/coverage/',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
````

## File: LICENSE
````
MIT License

Copyright (c) 2021 Obytes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: lint-staged.config.js
````javascript
module.exports = {
  '**/*.{js,jsx,ts,tsx}': (filenames) => [
    `npx eslint --fix ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
  ],
  '**/*.(md|json)': (filenames) =>
    `npx prettier --write ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
  'src/translations/*.(json)': (filenames) => [
    `npx eslint --fix ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
  ],
};
````

## File: metro.config.js
````javascript
/* eslint-env node */

const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });
````

## File: nativewind-env.d.ts
````typescript
/// <reference types="nativewind/types" />
````

## File: package.json
````json
{
  "name": "obytesapp",
  "version": "8.0.0",
  "private": true,
  "main": "expo-router/entry",
  "scripts": {
    "start": "cross-env EXPO_NO_DOTENV=1 expo start",
    "prebuild": "cross-env EXPO_NO_DOTENV=1 pnpm expo prebuild",
    "android": "cross-env EXPO_NO_DOTENV=1 expo run:android",
    "ios": "cross-env EXPO_NO_DOTENV=1 expo run:ios",
    "web": "cross-env EXPO_NO_DOTENV=1 expo start --web",
    "xcode": "xed -b ios",
    "doctor": "npx expo-doctor@latest",
    "preinstall": "npx only-allow pnpm",
    "start:staging": "cross-env APP_ENV=staging pnpm run start",
    "prebuild:staging": "cross-env APP_ENV=staging pnpm run prebuild",
    "prebuild:development": "cross-env APP_ENV=development pnpm run prebuild",
    "android:staging": "cross-env APP_ENV=staging pnpm run android",
    "ios:staging": "cross-env APP_ENV=staging pnpm run ios",
    "start:production": "cross-env APP_ENV=production pnpm run start",
    "prebuild:production": "cross-env APP_ENV=production pnpm run prebuild",
    "android:production": "cross-env APP_ENV=production pnpm run android",
    "ios:production": "cross-env APP_ENV=production pnpm run ios",
    "build:development:ios": "cross-env APP_ENV=development EXPO_NO_DOTENV=1 eas build --profile development --platform ios",
    "build:development:android": "cross-env APP_ENV=development EXPO_NO_DOTENV=1 eas build --profile development --platform android ",
    "build:staging:ios": "cross-env APP_ENV=staging EXPO_NO_DOTENV=1 eas build --profile staging --platform ios",
    "build:staging:android": "cross-env APP_ENV=staging EXPO_NO_DOTENV=1 eas build --profile staging --platform android ",
    "build:production:ios": "cross-env APP_ENV=production EXPO_NO_DOTENV=1 eas build --profile production --platform ios",
    "build:production:android": "cross-env APP_ENV=production EXPO_NO_DOTENV=1 eas build --profile production --platform android ",
    "prepare": "husky",
    "app-release": "cross-env SKIP_BRANCH_PROTECTION=true np --no-publish --no-cleanup --no-release-draft",
    "version": "pnpm run prebuild && git add .",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "type-check": "tsc  --noemit",
    "lint:translations": "eslint ./src/translations/ --fix --ext .json  ",
    "test": "jest",
    "check-all": "pnpm run lint && pnpm run type-check && pnpm run lint:translations && pnpm run test",
    "test:ci": "pnpm run test --coverage",
    "test:watch": "pnpm run test --watch",
    "install-maestro": "curl -Ls 'https://get.maestro.mobile.dev' | bash",
    "e2e-test": "maestro test .maestro/ -e APP_ID=com.obytes.development"
  },
  "dependencies": {
    "@expo/metro-runtime": "^5.0.4",
    "@gorhom/bottom-sheet": "^5.0.5",
    "@hookform/resolvers": "^3.9.0",
    "@shopify/flash-list": "1.7.6",
    "@tanstack/react-query": "^5.52.1",
    "app-icon-badge": "^0.1.2",
    "axios": "^1.7.5",
    "expo": "~53.0.12",
    "expo-constants": "~17.1.6",
    "expo-crypto": "^14.1.5",
    "expo-dev-client": "~5.2.1",
    "expo-font": "~13.3.1",
    "expo-image": "~2.3.0",
    "expo-linking": "~7.1.5",
    "expo-localization": "~16.1.5",
    "expo-router": "~5.1.0",
    "expo-splash-screen": "~0.30.9",
    "expo-status-bar": "~2.2.3",
    "expo-system-ui": "~5.0.9",
    "i18next": "^23.14.0",
    "lodash.memoize": "^4.1.2",
    "moti": "^0.29.0",
    "nativewind": "^4.1.21",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "react-error-boundary": "^4.0.13",
    "react-hook-form": "^7.53.0",
    "react-i18next": "^15.0.1",
    "react-native": "0.79.4",
    "react-native-edge-to-edge": "^1.6.0",
    "react-native-flash-message": "^0.4.2",
    "react-native-gesture-handler": "~2.24.0",
    "react-native-keyboard-controller": "^1.17.4",
    "react-native-mmkv": "~3.1.0",
    "react-native-reanimated": "~3.17.5",
    "react-native-restart": "0.0.27",
    "react-native-safe-area-context": "5.4.0",
    "react-native-screens": "^4.11.1",
    "react-native-svg": "~15.11.2",
    "react-native-url-polyfill": "^2.0.0",
    "react-native-web": "~0.20.0",
    "react-query-kit": "^3.3.0",
    "tailwind-variants": "^0.2.1",
    "zod": "^3.23.8",
    "zustand": "^5.0.5"
  },
  "devDependencies": {
    "@babel/core": "^7.26.0",
    "@commitlint/cli": "^19.2.2",
    "@commitlint/config-conventional": "^19.2.2",
    "@dev-plugins/react-query": "^0.0.7",
    "@eslint/eslintrc": "^3.3.1",
    "@eslint/js": "^9.28.0",
    "@expo/config": "~11.0.10",
    "@testing-library/jest-dom": "^6.5.0",
    "@testing-library/react-native": "^12.7.2",
    "@types/i18n-js": "^3.8.9",
    "@types/invariant": "^2.2.37",
    "@types/jest": "^29.5.12",
    "@types/lodash.memoize": "^4.1.9",
    "@types/react": "~19.0.14",
    "@typescript-eslint/eslint-plugin": "^8.34.0",
    "@typescript-eslint/parser": "^8.34.0",
    "babel-plugin-module-resolver": "^5.0.2",
    "cross-env": "^7.0.3",
    "dotenv": "^16.4.5",
    "eslint": "^9.28.0",
    "eslint-config-expo": "^9.2.0",
    "eslint-config-prettier": "^10.1.5",
    "eslint-import-resolver-typescript": "^4.4.3",
    "eslint-plugin-i18n-json": "^4.0.1",
    "eslint-plugin-import": "^2.31.0",
    "eslint-plugin-prettier": "^5.4.1",
    "eslint-plugin-react-compiler": "19.1.0-rc.2",
    "eslint-plugin-simple-import-sort": "^12.1.1",
    "eslint-plugin-tailwindcss": "^3.18.0",
    "eslint-plugin-testing-library": "^7.5.2",
    "eslint-plugin-unicorn": "^59.0.1",
    "eslint-plugin-unused-imports": "^4.1.4",
    "husky": "^9.1.5",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "jest-expo": "~53.0.7",
    "jest-junit": "^16.0.0",
    "lint-staged": "^15.2.9",
    "np": "^10.0.7",
    "prettier": "^3.3.3",
    "tailwindcss": "3.4.4",
    "ts-jest": "^29.1.2",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.34.0"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/obytes/react-native-template-obytes.git"
  },
  "packageManager": "pnpm@10.12.3",
  "expo": {
    "doctor": {
      "reactNativeDirectoryCheck": {
        "listUnknownPackages": false,
        "exclude": [
          "react-native-restart"
        ]
      }
    },
    "install": {
      "exclude": [
        "eslint-config-expo"
      ]
    }
  }
}
````

## File: README-project.md
````markdown
<h1 align="center">
  <img alt="logo" src="./assets/icon.png" width="124px" style="border-radius:10px"/><br/>
Mobile App </h1>

> This Project is based on [Obytes starter](https://starter.obytes.com)

## Requirements

- [React Native dev environment ](https://reactnative.dev/docs/environment-setup)
- [Node.js LTS release](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall), required only for macOS or Linux users
- [Pnpm](https://pnpm.io/installation)
- [Cursor](https://www.cursor.com/) or [VS Code Editor](https://code.visualstudio.com/download) ⚠️ Make sure to install all recommended extension from `.vscode/extensions.json`

## 👋 Quick start

Clone the repo to your machine and install deps :

```sh
git clone https://github.com/user/repo-name

cd ./repo-name

pnpm install
```

To run the app on ios

```sh
pnpm ios
```

To run the app on Android

```sh
pnpm android
```

## ✍️ Documentation

- [Rules and Conventions](https://starter.obytes.com/getting-started/rules-and-conventions/)
- [Project structure](https://starter.obytes.com/getting-started/project-structure)
- [Environment vars and config](https://starter.obytes.com/getting-started/environment-vars-config)
- [UI and Theming](https://starter.obytes.com/ui-and-theme/ui-theming)
- [Components](https://starter.obytes.com/ui-and-theme/components)
- [Forms](https://starter.obytes.com/ui-and-theme/Forms)
- [Data fetching](https://starter.obytes.com/guides/data-fetching)
- [Contribute to starter](https://starter.obytes.com/how-to-contribute/)
````

## File: README.md
````markdown
<p align="center">
    <img alt="React Native Template Obytes" src="https://github.com/obytes/react-native-template-obytes/assets/11137944/a8163d23-897a-4efe-91ce-b9bf7348c18f" width="200" />
</p>

<h1 align="center">
  React Native Template Obytes
</h1>

![expo](https://img.shields.io/github/package-json/dependency-version/obytes/react-native-template-obytes/expo?label=expo) ![react-native](https://img.shields.io/github/package-json/dependency-version/obytes/react-native-template-obytes/react-native?label=react-native) ![GitHub Repo stars](https://img.shields.io/github/stars/obytes/react-native-template-obytes) ![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/obytes/react-native-template-obytes) ![GitHub issues](https://img.shields.io/github/issues/obytes/react-native-template-obytes) ![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/obytes/react-native-template-obytes)

📱 A template for your next React Native project 🚀, Made with developer experience and performance first: Expo, TypeScript, TailwindCSS, Husky, Lint-Staged, expo-router, react-query, react-hook-form, I18n.

> Welcome to the Obytes Mobile Tribe's Expo / React Native Starter Kit!

## 🚀 Motivation

Our goal with this starter kit was to streamline the process of building React Native apps, both for our own team and for our clients. We wanted to create a resource that would allow us to create high-quality apps faster and with less effort, while ensuring that all of our projects adhere to the same code standards and architectural principles.

The benefits of using this starter kit are numerous. It helps our team easily switch between projects, as we can rely on a consistent foundation of code. It also allows us to focus on the business logic of each project rather than getting bogged down in boilerplate code. And, because it promotes consistency across projects, it makes it easier to maintain and scale our apps, as well as share code between teams.

Overall, our starter kit is designed to facilitate efficient and effective app development, helping us to bring the best possible products to our clients

## ✍️ Philosophy

When creating this starter kit, we had several guiding principles in mind::

- **🚀 Production-ready**: We wanted to ensure that this starter was ready for real-world use, providing a solid foundation for building production-grade apps.
- **🥷 Developer experience and productivity**: Our focus was on creating a starter that would enhance the developer experience and increase productivity.
- **🧩 Minimal code and dependencies**: We aimed to keep the codebase and dependencies as small as possible.
- **💪 Well-maintained third-party libraries**: We included only well-maintained and reliable third-party libraries, to provide stability and support for our projects.

## ⭐ Key Features

- ✅ Latest Expo SDK with Custom Dev Client: Leverage the best of the Expo ecosystem while maintaining full control over your app.
- 🎉 [TypeScript](https://www.typescriptlang.org/) for enhanced code quality and bug prevention through static type checking.
- 💅 Minimal UI kit built with [TailwindCSS](https://www.nativewind.dev/), featuring common components essential for your app.
- ⚙️ Multi-environment build support (Production, Staging, Development) using Expo configuration.
- 🦊 Husky for Git Hooks: Automate your git hooks and enforce code standards.
- 💡 Clean project structure with Absolute Imports for easier code navigation and management.
- 🚫 Lint-staged: Run Eslint and TypeScript checks on Git staged files to maintain code quality.
- 🗂 VSCode recommended extensions, settings, and snippets for an enhanced developer experience.
- ☂️ Pre-installed [Expo Router](https://docs.expo.dev/router/introduction/) with examples for comprehensive app navigation.
- 💫 Auth flow implementation using [Zustand](https://github.com/pmndrs/zustand) for state management and [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) for secure data storage.
- 🛠 10+ [Github Actions](https://github.com/features/actions) workflows for building, releasing, testing, and distributing your app.
- 🔥 [React Query](https://react-query.tanstack.com/) and [axios](https://github.com/axios/axios) for efficient data fetching and state management.
- 🧵 Robust form handling with [react-hook-form](https://react-hook-form.com/) and [zod](https://github.com/colinhacks/zod) for validation, plus keyboard handling.
- 🎯 Localization support with [i18next](https://www.i18next.com/), including Eslint for validation.
- 🧪 Unit testing setup with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- 🔍 E2E testing capabilities with [Maestro](https://maestro.mobile.dev/) for comprehensive app testing.

## Is this starter for me?

Yes 😀

This starter kit is designed to benefit a wide range of React Native developers, from beginners to experienced professionals. Here's why it might be a good fit for you:

1. **For beginners:** It provides a solid foundation with best practices and common solutions, helping you learn industry-standard approaches to React Native development.

2. **For experienced developers:** It offers a well-structured, production-ready setup that can save you time and effort in project initialization and configuration.

3. **For teams:** It ensures consistency across projects and team members, making it easier to onboard new developers and maintain code quality.

4. **For explorers:** Even if you prefer not to use starter kits, this project can serve as a valuable reference. You can explore the codebase, documentation, and architectural decisions to gain insights and potentially adopt specific solutions for your projects.

5. **For learners:** The starter kit incorporates up-to-date libraries and patterns, allowing you to familiarize yourself with current best practices in the React Native ecosystem.

6. **For AI-assisted development:** This starter kit works well with AI coding tools. It provides a solid structure and best practices that can guide AI-generated code. This helps ensure that AI assistance leads to high-quality, maintainable code that fits well within your project.

Remember, you don't have to use the entire starter kit as-is. Feel free to cherry-pick ideas, configurations, or code snippets that align with your project needs. Whether you're building a new app from scratch or looking to improve your existing development process, this starter kit can provide valuable insights and practical solutions.

## Why Expo and not React Native CLI?

We have been using Expo as our main framework since the introduction of [Continuous Native Generation (CNG)](https://docs.expo.dev/workflow/continuous-native-generation/) concept and we are happy with the experience.

I think this question is not valid anymore, especially after the last React conference when the core React native team recommended using Expo for new projects.

> "As of today, the only recommended community framework for React Native is Expo. Folks at Expo have been investing in the React Native ecosystem since the early days of React Native and as of today, we believe the developer experience offered by Expo is best in class." React native core team

Still hesitating? Check out this [article](https://reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps) or this [video](https://www.youtube.com/watch?v=lifGTznLBcw), maybe this one [video](https://www.youtube.com/watch?v=ek_IdGC0G80) too.

## 🧑‍💻 Stay up to date

We are committed to continually improving our starter kit and providing the best possible resources for building React Native apps. To that end, we regularly add new features and fix any bugs that are discovered.

If you want to stay up to date with the latest developments in our starter kit, you can either watch the repository or hit the "star" button. This will allow you to receive notifications whenever new updates are available.

We value the feedback and contributions of our users, and we encourage you to let us know if you have any suggestions for improving our starter kit. We are always looking for ways to make it even more effective and useful for our community. So, please do not hesitate to reach out and share your thoughts with us.

<!-- add a gif image here  -->

## 💎 Libraries used

- [Expo](https://docs.expo.io/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Nativewind](https://www.nativewind.dev/v4/overview)
- [Flash list](https://github.com/Shopify/flash-list)
- [React Query](https://tanstack.com/query/v4)
- [Axios](https://axios-http.com/docs/intro)
- [React Hook Form](https://react-hook-form.com/)
- [i18next](https://www.i18next.com/)
- [zustand](https://github.com/pmndrs/zustand)
- [React Native MMKV](https://github.com/mrousavy/react-native-mmkv)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/)
- [React Native Svg](https://github.com/software-mansion/react-native-svg)
- [React Error Boundaries](https://github.com/bvaughn/react-error-boundary)
- [Expo Image](https://docs.expo.dev/versions/unversioned/sdk/image/)
- [React Native Keyboard Controller](https://github.com/kirillzyusko/react-native-keyboard-controller)
- [Moti](https://moti.fyi/)
- [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)
- [React Native Screens](https://github.com/software-mansion/react-native-screens)
- [Tailwind Variants](https://www.tailwind-variants.org/)
- [Zod](https://zod.dev/)

## Contributors

This starter is maintained by [Obytes mobile tribe team](https://www.obytes.com/team) and we welcome new contributors to join us in improving it. If you are interested in getting involved in the project, please don't hesitate to open an issue or submit a pull request.

In addition to maintaining this starter kit, we are also available to work on custom projects and help you build your dream app. If you are looking for experienced and reliable developers to bring your app vision to life, please visit our website at [obytes.com/contact](https://www.obytes.com/contact) to get in touch with us. We would be happy to discuss your project in more detail and explore how we can help you achieve your goals.

## 🔥 How to contribute?

Thank you for your interest in contributing to our project. Your involvement is greatly appreciated and we welcome your contributions. Here are some ways you can help us improve this project:

1. Show your support for the project by giving it a 🌟 on Github. This helps us increase visibility and attract more contributors.
2. Share your thoughts and ideas with us by opening an issue. If you have any suggestions or feedback about any aspect of the project, we are always eager to hear from you and have a discussion.
3. If you have any questions about the project, please don't hesitate to ask. Simply open an issue and our team will do our best to provide a helpful and informative response.
4. If you encounter a bug or typo while using the starter kit or reading the documentation, we would be grateful if you could bring it to our attention. You can open an issue to report the issue, or even better, submit a pull request with a fix.

We value the input and contributions of our community and look forward to working with you to improve this project.

## ❓ FAQ

If you have any questions about the starter and want answers, please check out the [Discussions](https://github.com/obytes/react-native-template-obytes/discussions) page.

## 🔖 License

This project is MIT licensed.
````

## File: tailwind.config.js
````javascript
const colors = require('./src/components/ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      colors,
    },
  },
  plugins: [],
};
````

## File: tsconfig.json
````json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@env": ["./src/lib/env.js"]
    },
    "esModuleInterop": true,
    "checkJs": true
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "docs",
    "cli",
    "android",
    "ios",
    "lint-staged.config.js"
  ],
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts",
    "nativewind-env.d.ts"
  ]
}
````
