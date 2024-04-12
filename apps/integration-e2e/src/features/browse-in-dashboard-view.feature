@browse-in-dashboard-view
Feature: Browse in dashboard view
  In order to browse through a publication
  As a user
  I want to navigate between pages

  @ignore @android @iphone
  Scenario Outline: Swipe to navigate
    Given a <viewingDirection> publication with 10 pages
    And the viewer is in dashboard view
    And the scroll direction is <scrollDirection>
    And the user is on page <startPage>
    When the user swipe <swipeDirection> and the velocity is between <velocity>
    Then page <endPage> is displayed

    Examples:
      | viewingDirection | startPage | swipeDirection | velocity | endPage | scrollDirection |
      | left-to-right    |         1 | left           |   50-100 |       2 | horizontal      |
      | left-to-right    |         1 | left           |  100-150 |       4 | horizontal      |
      | right-to-left    |         1 | right          |   50-100 |       2 | horizontal      |
      | right-to-left    |         1 | right          |  100-150 |       4 | horizontal      |
      | left-to-right    |         1 | down           |   50-100 |       2 | vertical        |
      | left-to-right    |         1 | down           |  100-150 |       4 | vertical        |
      | right-to-left    |         1 | up             |   50-100 |       2 | vertical        |
      | right-to-left    |         1 | up             |  100-150 |       4 | vertical        |
