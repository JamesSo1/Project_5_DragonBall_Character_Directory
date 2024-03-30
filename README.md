# Web Development Project 5 - *DragonBall Character Directory*

Submitted by: **James So**

This web app: **allows users to look up characters from the anime Dragonball based on a character's name, power level, and race (i.e. human, saiyan, android, etc.).**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The list displays a list of data fetched using an API call**
- [x] **Data uses the useEffect React hook and async/await syntax**
- [x] **The app dashboard includes at least three summary statistics about the data such as**
  - [x] *Lowest power level among all characters in the dataset*
  - [x] *Average power level for the dataset*
  - [x] *Highest power level among all characters in the dataset*  
- [x] **A search bar allows the user to search for an item in the fetched data**
- [x] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [ ] Filters use different input types such as a text input, a selection, or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [x] The race of each character is color coded to make the dataset easier to read. For example, "Human" is colored blue while "Saiyan" is colored orange.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
    <a href="https://www.loom.com/share/be1af835f6474c42a357304f5eaa59e0">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/be1af835f6474c42a357304f5eaa59e0-with-play.gif">
    </a>


<!-- Replace this with whatever GIF tool you used! -->
GIF created with Loom
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

The biggest challenge was being able to make all three filters work at the same time. I figured out that I could use ".filter()" three times for each filter to get only the results that satisfied the conditions set by all three filters.

## License

    Copyright 2024 James So

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
