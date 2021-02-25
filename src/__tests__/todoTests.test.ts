import {
  By,
  until,
  WebDriver,
  Builder,
  Capabilities
} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

class TodoPage {
  driver: WebDriver;
     url: string = "https://devmountain.github.io/qa_todos/";
     const todoInput: By = By.css('.new-todo');
// this locator will find ALL the todos
    const todos: By = By.css('.main');
// this locator will find the text of a todo FROM the todo
    const todoLabel: By = By.css('label');
// this locator will find the checkbox for the todo FROM the todo
    const todoComplete: By = By.css('input');
// this locator is for the "Clear complete" button in the corner
    const clearCompletedButton: By = By.css('.clear-completed');
    const starTodo: By = By.css('svg');
    constructor(driver: WebDriver) {
      this.driver = driver;
    }}
    const ntodo = new TodoPage(driver);


describe("the todo app", () => {
  beforeEach(async () => {
    await driver.get(ntodo.url);
  });
  afterAll(async () => {
    await driver.quit();
  });
  it("can add a todo", async () => {
    await driver.wait(until.elementLocated(ntodo.todoInput));
    await driver.findElement(ntodo.todoInput).sendKeys('Todo Item 1\n');
    expect(await driver.findElement(ntodo.todoLabel)).toBe('Todo Item');
  });
  it("can remove a todo", async () => {
    await driver.wait(until.elementLocated(ntodo.todoInput));
    await driver.findElement(ntodo.todoInput).sendKeys('Todo Item 1\n');
    await driver.wait(until.elementLocated(ntodo.todoComplete));
    await driver.findElement(ntodo.todoComplete).click();
    await driver.wait(until.elementLocated(ntodo.clearCompletedButton));
    await (await driver.findElement(ntodo.clearCompletedButton)).click();
    expect(await driver.findElement(ntodo.todos)).toBeFalsy();
  });
  it("can mark a todo with a star", async () => {
    await driver.wait(until.elementLocated(ntodo.todoInput));
    await driver.findElement(ntodo.todoInput).sendKeys('Todo Item 1\n');
    await driver.wait(until.elementLocated(ntodo.starTodo));
    await driver.findElement(ntodo.starTodo).click();
    expect(await driver.findElement(ntodo.starTodo)).toBeFalsy()
  });
  it("has the right number of todos listed", async () => {
    await driver.wait(until.elementLocated(ntodo.todos));
   await driver.findElement(ntodo.todos);
  });
});
