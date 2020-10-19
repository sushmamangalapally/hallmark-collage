import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchForm from './SearchForm';
import '@testing-library/react'
import '@testing-library/jest-dom'
import {
  render,
  screen,
  fireEvent,
  // act,
} from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');

const pictureOne = 
  {
    "id": "ScEXB6uxOVc",
    "created_at": "2020-10-03T16:51:33-04:00",
    "updated_at": "2020-10-14T01:04:40-04:00",
    "promoted_at": null,
    "width": 3382,
    "height": 4793,
    "color": "#171819",
    "blur_hash": "LfNJ]_%2V@WAGdRkNGay$xRkRjkC",
    "description": null,
    "alt_description": null,
    "urls": {
      "raw": "https://images.unsplash.com/photo-1601758282715-6446bbde7082?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjcyNTI1fQ",
      "full": "https://images.unsplash.com/photo-1601758282715-6446bbde7082?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjcyNTI1fQ",
      "regular": "https://images.unsplash.com/photo-1601758282715-6446bbde7082?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjcyNTI1fQ",
      "small": "https://images.unsplash.com/photo-1601758282715-6446bbde7082?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcyNTI1fQ",
      "thumb": "https://images.unsplash.com/photo-1601758282715-6446bbde7082?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjcyNTI1fQ"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/ScEXB6uxOVc",
      "html": "https://unsplash.com/photos/ScEXB6uxOVc",
      "download": "https://unsplash.com/photos/ScEXB6uxOVc/download",
      "download_location": "https://api.unsplash.com/photos/ScEXB6uxOVc/download"
    },
    "categories": [],
    "likes": 70,
    "liked_by_user": false,
    "current_user_collections": [],
    "user": {
      "id": "21uOSEd-cSI",
      "updated_at": "2020-10-18T21:20:10-04:00",
      "username": "chewy",
      "name": "Chewy",
      "first_name": "Chewy",
      "last_name": null,
      "twitter_username": "chewy",
      "portfolio_url": "https://www.chewy.com/",
      "bio": "There are endless ways #PetsBringUsTogether. We’re just here to help.",
      "location": null,
      "links": {
        "self": "https://api.unsplash.com/users/chewy",
        "html": "https://unsplash.com/@chewy",
        "photos": "https://api.unsplash.com/users/chewy/photos",
        "likes": "https://api.unsplash.com/users/chewy/likes",
        "portfolio": "https://api.unsplash.com/users/chewy/portfolio",
        "following": "https://api.unsplash.com/users/chewy/following",
        "followers": "https://api.unsplash.com/users/chewy/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1600206400067-ef9dc8ec33aaimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/profile-1600206400067-ef9dc8ec33aaimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/profile-1600206400067-ef9dc8ec33aaimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
      },
      "instagram_username": "chewy",
      "total_collections": 0,
      "total_likes": 0,
      "total_photos": 50,
      "accepted_tos": true
    },
  };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('SearchForm', () => {
  const searchFormProps = {
    searchTerm: 'dog',
    onSearchInput: jest.fn(),
    onSearchSubmit: jest.fn(),
  };
  const emptySearchFormProps = {
    searchTerm: '',
    onSearchInput: jest.fn(),
    onSearchSubmit: jest.fn(),
  };

  test('renders the input field with its value', () => {
    render(<SearchForm {...searchFormProps} />);

    expect(screen.getByDisplayValue('dog')).toBeInTheDocument();
  });

  test('renders the correct placeholder', () => {
    render(<SearchForm {...emptySearchFormProps} />);

    expect(screen.getByPlaceholderText('Search Pictures')).toHaveValue('')
  });

  test('calls onSearchInput on input field change', () => {
    render(<SearchForm {...searchFormProps} />);

    fireEvent.change(screen.getByDisplayValue('dog'), {
      target: { value: 'puppies' },
    });

    expect(searchFormProps.onSearchInput).toHaveBeenCalledTimes(1);
  });

  test('renders snapshot', () => {
    const { container } = render(<SearchForm {...searchFormProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});