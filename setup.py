from setuptools import setup

setup(
    name='ctdocs',
    version="0.1",
    author='Mario Balibrera',
    author_email='mario.balibrera@gmail.com',
    license='MIT License',
    description='Documentation plugin for cantools (ct)',
    long_description='This package parses JSON-defined documentatoin data and displays it in a web page.',
    packages=[
        'ctdocs'
    ],
    zip_safe = False,
    install_requires = [
        "ct >= 0.8.6.2"
    ],
    entry_points = '''''',
    classifiers = [
        'Development Status :: 3 - Alpha',
        'Environment :: Console',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Topic :: Software Development :: Libraries :: Python Modules'
    ],
)
